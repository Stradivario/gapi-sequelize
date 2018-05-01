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
        return {
            gapiModule: GapiSequelizeModule,
            services: [{provide: SequelizeConfigService, useValue: config}]
        };
    }
}

export * from './sequelize.service';
export * from './sequelize.interface';
export * from './sequelize-config.service';
