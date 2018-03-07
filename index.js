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
const gapi_1 = require("gapi");
const sequelize_service_1 = require("./sequelize.service");
const sequelize_config_service_1 = require("./sequelize-config.service");
let SequelizeModule = SequelizeModule_1 = class SequelizeModule {
    static forRoot(config) {
        Object.assign(gapi_1.Container.get(sequelize_config_service_1.SequelizeConfigService), config);
        return SequelizeModule_1;
    }
};
SequelizeModule = SequelizeModule_1 = __decorate([
    gapi_1.GapiModule({
        services: [
            sequelize_service_1.GapiSequelizeService,
            sequelize_config_service_1.SequelizeConfigService
        ]
    })
], SequelizeModule);
exports.SequelizeModule = SequelizeModule;
__export(require("./sequelize.service"));
__export(require("./sequelize.interface"));
__export(require("./sequelize-config.service"));
var SequelizeModule_1;
