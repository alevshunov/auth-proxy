import { type Server } from "net";
import http, { type RequestListener } from "http";

import httpProxy from "http-proxy";

import Config, { type LiveConfig } from "~/config";
import logger from "~/logger";

interface INavigatorConfigProvider {
    getRoutes(): LiveConfig['routes'];
}

export class NavigatorConfigProvider implements INavigatorConfigProvider {
    getRoutes(): LiveConfig['routes'] {
        return Config.Instance().routes;
    }
}

export default class Navigator {
    private _proxy: ReturnType<typeof httpProxy.createProxyServer> | null = null;
    private _server: Server | null = null;
    private _port: number;
    private _configProvider: INavigatorConfigProvider;

    constructor(port: number, configProvider: INavigatorConfigProvider) {
        this._port = port;
        this._configProvider = configProvider;
    }

    private handleRequest: RequestListener = (req, res) => {
        const proxy = this._proxy;

        if (!this._configProvider || !proxy || !req) {
            res.end();
            return;
        }

        const url = req.url;

        if (!url) {
            res.write("???");
            res.end();
            return;
        }

        const routes = this._configProvider.getRoutes();

        const route = routes.find((r) => new RegExp(r.path).test(url));

        if (!route) {
            res.write(`Route not found: ${url}`);
            res.end();
            return;
        }

        logger.info(`${req.method || '---'} ${decodeURIComponent(url)} -> ${JSON.stringify(route)}`);

        setTimeout(function () {
            try {
                proxy.web(
                    req,
                    res,
                    {
                        target: route.target
                    },
                    (e) => {
                        res.write(req.url);
                        res.write("->");
                        res.write(e.toString());
                        res.end();
                    }
                );
            } catch (e) {
                res.write(req.url);
                res.write("->");
                if (typeof e === "string") {
                    res.write(e);
                } else if (e instanceof Error) {
                    res.write(e.toString());
                }
                res.end();
            }
        }, route.delay || 0);
    };

    run() {
        this._proxy = httpProxy.createProxyServer();
        this._server = http.createServer(this.handleRequest).listen(this._port);
        return this;
    }

    stop() {
        if (this._server) {
            this._server.close();
        }
        if (this._proxy) {
            this._proxy.close();
        }
    }
}
