import { Service } from "@gapi/core";
import { SequelizeConfig } from "./sequelize.interface";

@Service()
export class SequelizeConfigService extends SequelizeConfig {
    constructor() {
        super();
    }
}