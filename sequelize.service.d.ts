import { Sequelize } from 'sequelize-typescript';
import { SequelizeConfigService } from './sequelize-config.service';
export declare class GapiSequelizeService {
    private config;
    sequelize: Sequelize;
    constructor(config: SequelizeConfigService);
    sync(): any;
}
