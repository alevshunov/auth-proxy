import type { NextFunction, Request, Response } from "express";

import Config from "~/config";

function ReloadConfig(_req: Request, _res: Response, next: NextFunction) {
    if (!Config.Instance().cache) {
        Config.refresh();
    }
    next();
}

export default ReloadConfig;
