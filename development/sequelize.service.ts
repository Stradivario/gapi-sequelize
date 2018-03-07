import { Service, Injector, Container } from 'gapi';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeConfigService } from './sequelize-config.service';

@Service()
export class GapiSequelizeService {
    public sequelize: Sequelize = new Sequelize(<any>this.config);
    constructor(
        private config: SequelizeConfigService
    ) {
        this.sync();
    }
    sync(): any {
        return this.sequelize.sync({ force: this.config.force, logging: this.config.logging });
    }
}