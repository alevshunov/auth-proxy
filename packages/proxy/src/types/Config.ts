import type ExtraField from "~/types/ExtraField";

type Route = {
    path: string;
    target: string;
    delay?: number;
}

type Config = {
    testusers: string | undefined;
    localStorage: string | undefined;
    proxyURL: string | undefined;
    defaultContext: string | undefined;
    scope: "global" | "session" | undefined;
    cache: boolean | undefined;
    extraFields: Array<ExtraField> | undefined;
    routes: Route[]
};

export default Config;
