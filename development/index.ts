import { GapiModule, Container, Token, GapiModuleWithServices } from "@gapi/core";
import { GapiSequelizeService } from "./sequelize.service";
import { SequelizeConfigService } from './sequelize-config.service';
import { SequelizeConfig } from "./sequelize.interface";
import { Sequelize } from "sequelize-typescript";

@GapiModule({
    services: [GapiSequelizeService]
})
export class GapiSequelizeModule {
    public static forRoot(config: SequelizeConfig): GapiModuleWithServices {
        return {
            gapiModule: GapiSequelizeModule,
            services: [
                {
                    provide: GapiSequelizeService,
                    useFactory: async () => {
                        const sequelize = new Sequelize(<any>config);
                        await sequelize.sync({ force: config.force, logging: config.logging });
                        return sequelize;
                    }
                }
            ]
        };
    }
}

export * from './sequelize.service';
export * from './sequelize.interface';
export * from './sequelize-config.service';
