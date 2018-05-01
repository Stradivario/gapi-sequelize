"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@gapi/core");
const sequelize_service_1 = require("./sequelize.service");
const sequelize_config_service_1 = require("./sequelize-config.service");
let GapiSequelizeModule = GapiSequelizeModule_1 = class GapiSequelizeModule {
    static forRoot(config) {
        Object.assign(core_1.Container.get(sequelize_config_service_1.SequelizeConfigService), config);
        return {
            gapiModule: GapiSequelizeModule_1,
            services: [sequelize_config_service_1.SequelizeConfigService]
        };
    }
};
GapiSequelizeModule = GapiSequelizeModule_1 = __decorate([
    core_1.GapiModule({
        services: [
            sequelize_service_1.GapiSequelizeService,
        ]
    })
], GapiSequelizeModule);
exports.GapiSequelizeModule = GapiSequelizeModule;
__export(require("./sequelize.service"));
__export(require("./sequelize.interface"));
__export(require("./sequelize-config.service"));
var GapiSequelizeModule_1;
