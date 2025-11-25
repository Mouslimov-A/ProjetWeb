"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configManager = void 0;
var config_key_enum_1 = require("@common/config/enum/config-key.enum");
require('dotenv').config();
var ConfigManager = /** @class */ (function () {
    function ConfigManager(env) {
        this.env = env;
    }
    ConfigManager.prototype.ensureValues = function (keys) {
        var _this = this;
        keys.forEach(function (k) { return _this.getValue(k, true); });
        return this;
    };
    ConfigManager.prototype.getTypeOrmConfig = function () {
        return {
            type: this.getValue(config_key_enum_1.ConfigKey.DB_TYPE),
            host: this.getValue(config_key_enum_1.ConfigKey.DB_HOST),
            port: parseInt(this.getValue(config_key_enum_1.ConfigKey.DB_PORT)),
            username: this.getValue(config_key_enum_1.ConfigKey.DB_USER),
            password: this.getValue(config_key_enum_1.ConfigKey.DB_PASSWORD),
            database: this.getValue(config_key_enum_1.ConfigKey.DB_DATABASE),
            entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
            synchronize: this.getValue(config_key_enum_1.ConfigKey.DB_SYNC) === 'true',
        };
    };
    ConfigManager.prototype.getValue = function (key, throwOnMissing) {
        if (throwOnMissing === void 0) { throwOnMissing = true; }
        var value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error("config error - missing env.".concat(key));
        }
        return value;
    };
    return ConfigManager;
}());
var configManager = new ConfigManager(process.env).ensureValues(config_key_enum_1.configMinimalKeys);
exports.configManager = configManager;
