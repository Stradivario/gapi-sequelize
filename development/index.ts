import { GapiModule, Container, Token, GapiModuleWithServices } from "@gapi/core";
import { GapiSequelizeService } from "./sequelize.service";
import { SequelizeConfigService } from './sequelize-config.service';
import { SequelizeConfig } from "./sequelize.interface";

@GapiModule({
    services: [
        GapiSequelizeService,
    ]
})
export class GapiSequelizeModule {
    public static forRoot(config: SequelizeConfig): GapiModuleWithServices {
        Object.assign(Container.get(SequelizeConfigService), config);
        return {
            gapiModule: GapiSequelizeModule,
            services: [SequelizeConfigService]
        };
    }
}

export * from './sequelize.service';
export * from './sequelize.interface';
export * from './sequelize-config.service';
