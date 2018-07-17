import { Module, ModuleWithServices } from "@rxdi/core";
import { SequelizeConfig } from "./sequelize.interface";
import { Sequelize } from "sequelize-typescript";
import { SEQUELIZE } from "./sequelize-config.service";

@Module()
export class SequelizeModule {
    public static forRoot(config: SequelizeConfig): ModuleWithServices {
        return {
            module: SequelizeModule,
            services: [
                {
                    provide: SEQUELIZE,
                    lazy: true,
                    useFactory: async () => {
                        const sequelize = new Sequelize(<any>config);
                        sequelize.addModels(config.models);
                        await sequelize.sync({ force: config.force, logging: config.logging });
                        return sequelize;
                    }
                }
            ]
        };
    }
}

export * from './sequelize.interface';
export * from './sequelize-config.service';
