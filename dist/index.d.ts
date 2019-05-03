import { ModuleWithServices } from "@rxdi/core";
import { SequelizeConfig } from "./sequelize.interface";
export declare class SequelizeModule {
    static forRoot(config: SequelizeConfig): ModuleWithServices;
}
export * from './sequelize.interface';
export * from './sequelize-config.service';
