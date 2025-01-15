import type { Request, Response } from "express";

import config from "~/config";

const GetEnvironmentAction = (_req: Request, res: Response) => {
    res.json({
        ls_scope: config.Instance().ls_scope,
        default_context: config.Instance().default_context,
        extra_fields: config.Instance().extra_fields
    });
};

export default GetEnvironmentAction;
