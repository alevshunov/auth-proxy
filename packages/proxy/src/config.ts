import path from "path";

import createConfig from "~/helpers/config/createConfig";
export type LiveConfig = ReturnType<typeof createConfig>;

// const config = createConfig(path.resolve(__dirname, "."));
// export type LiveConfig = typeof config;
//
// export function reload() {
//     const props = Object.getOwnPropertyNames(config);
//     for (let i = 0; i < props.length; i++) {
//         delete config[props[i] as keyof typeof config];
//     }
//     for (const key in config) {
//         delete config[key as keyof typeof config];
//     }
//
//     Object.assign(config, createConfig(path.resolve(__dirname, ".")));
// }
//
// export default config;

export default class Config {
    private static _config: LiveConfig | null = null;

    public static Instance(): LiveConfig {
        if (this._config === null) {
            this._config = createConfig(path.resolve(__dirname, "."));
        }

        return this._config;
    }

    public static refresh() {
        this._config = createConfig(path.resolve(__dirname, "."));
    }
}