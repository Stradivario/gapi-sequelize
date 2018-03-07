import { SequelizeConfig } from "./sequelize.interface";
export declare class SequelizeModule {
    static forRoot(config: SequelizeConfig): typeof SequelizeModule;
}
export * from './sequelize.service';
export * from './sequelize.interface';
export * from './sequelize-config.service';
