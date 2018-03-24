import { SequelizeConfig } from "./sequelize.interface";
export declare class GapiSequelizeModule {
    static forRoot(config: SequelizeConfig): typeof GapiSequelizeModule;
}
export * from './sequelize.service';
export * from './sequelize.interface';
export * from './sequelize-config.service';
