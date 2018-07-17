export declare class SequelizeConfig {
    dialect?: string;
    host?: string;
    port?: string;
    username?: string;
    password?: string;
    name?: string;
    storage?: string;
    logging?: boolean;
    modelPaths?: string[];
    models?: any[];
    force?: boolean;
    modifyFunctions?: {
        sync?: () => {};
    };
}
