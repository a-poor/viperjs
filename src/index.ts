import yaml from 'yaml';

export interface IFileConfig {
    fileName: string;
    // fileType?: "json" | "yaml";
    reread?: boolean;
}

export interface IEnvConfig {
    keepCase?: boolean;
}

/**
 * IViperParams - 
 */
export interface IViperParams {
    configFiles?: string | IFileConfig | IFileConfig[];
    envConfig?: IEnvConfig;
}

/**
 * Viper - 
 */
export default class Viper {
    #literals: {[key: string]: any};
    #defaults: {[key: string]: any};
    #configFiles?: string | IFileConfig | IFileConfig[];
    #keepEnvCase: boolean;

    constructor(params: IViperParams) {
        this.#literals = {};
        this.#defaults = {};
        this.#configFiles = params.configFiles;
        this.#keepEnvCase = params.envConfig?.keepCase ?? false;
    }

    setDefault(key: string, value: any) {
        this.#defaults[key] = value;
    }

    set(key: string, value: any) {
        this.#literals[key] = value;
    }

    get(key: string): any {
        if (key in this.#literals)
            return this.#literals[key];
        
        
        if (key in this.#defaults)
            return this.#defaults[key];
        
        return undefined;
    }
}
