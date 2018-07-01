import { Sequelize } from 'sequelize-typescript';
import { SequelizeConfigService } from './sequelize-config.service';
export declare class SequelizeService {
    private config;
    sequelize: Sequelize;
    constructor(config: SequelizeConfigService);
    sync(): any;
}
