import { Service } from "gapi";
import { SequelizeConfig } from "./sequelize.interface";

@Service()
export class SequelizeConfigService extends SequelizeConfig {
    constructor() {
        super();
    }
}