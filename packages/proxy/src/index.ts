import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import managementRouter from "~/api/management/management.routes";
import clientRouter from "~/api/management/client.routes";
import usageRouter from "~/api/usage/usage.routes";
import config from "~/config";

const app = express();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cookieParser());
app.use(json());
app.use(
    cors({
        credentials: true,
        origin: config.client_url
    })
);
app.use("/auth/manage", managementRouter);
app.use("/auth", clientRouter);
app.use("/", usageRouter);

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
    console.log(`Login page: http://localhost:${config.port}/auth/login`);
});
