import { GapiModuleWithServices } from "@gapi/core";
import { SequelizeConfig } from "./sequelize.interface";
export declare class GapiSequelizeModule {
    static forRoot(config: SequelizeConfig): GapiModuleWithServices;
}
export * from './sequelize.service';
export * from './sequelize.interface';
export * from './sequelize-config.service';
