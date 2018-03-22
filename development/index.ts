import { GapiModule, Container, Token } from "@gapi/core";
import { GapiSequelizeService } from "./sequelize.service";
import { SequelizeConfigService } from './sequelize-config.service';
import { SequelizeConfig } from "./sequelize.interface";

@GapiModule({
    services: [
        GapiSequelizeService,
        SequelizeConfigService
    ]
})
export class SequelizeModule {
    static forRoot(config: SequelizeConfig) {
        Object.assign(Container.get(SequelizeConfigService), config);
        return SequelizeModule;
    }
}

export * from './sequelize.service';
export * from './sequelize.interface';
export * from './sequelize-config.service';
