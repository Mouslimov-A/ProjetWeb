"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
var typeorm_1 = require("typeorm");
var ulid_1 = require("ulid");
var account_entity_1 = require("../../../account/data/entity/account.entity");
var Profile = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _profile_id_decorators;
    var _profile_id_initializers = [];
    var _profile_id_extraInitializers = [];
    var _nbLike_decorators;
    var _nbLike_initializers = [];
    var _nbLike_extraInitializers = [];
    var _accounts_decorators;
    var _accounts_initializers = [];
    var _accounts_extraInitializers = [];
    var Profile = _classThis = /** @class */ (function () {
        function Profile_1() {
            this.profile_id = __runInitializers(this, _profile_id_initializers, void 0);
            this.nbLike = (__runInitializers(this, _profile_id_extraInitializers), __runInitializers(this, _nbLike_initializers, void 0));
            this.accounts = (__runInitializers(this, _nbLike_extraInitializers), __runInitializers(this, _accounts_initializers, void 0));
            __runInitializers(this, _accounts_extraInitializers);
        }
        return Profile_1;
    }());
    __setFunctionName(_classThis, "Profile");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _profile_id_decorators = [(0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 26, default: function () { return "'".concat((0, ulid_1.ulid)(), "'"); } })];
        _nbLike_decorators = [(0, typeorm_1.Column)()];
        _accounts_decorators = [(0, typeorm_1.ManyToMany)(function () { return account_entity_1.Account; }, function (account) { return account.profiles; }), (0, typeorm_1.JoinTable)({
                name: 'account_profile',
                inverseJoinColumn: { name: 'car_id_fk', referencedColumnName: 'account_id' },
                joinColumn: { name: 'profile_id_fk', referencedColumnName: 'profile_id' },
            })];
        __esDecorate(null, null, _profile_id_decorators, { kind: "field", name: "profile_id", static: false, private: false, access: { has: function (obj) { return "profile_id" in obj; }, get: function (obj) { return obj.profile_id; }, set: function (obj, value) { obj.profile_id = value; } }, metadata: _metadata }, _profile_id_initializers, _profile_id_extraInitializers);
        __esDecorate(null, null, _nbLike_decorators, { kind: "field", name: "nbLike", static: false, private: false, access: { has: function (obj) { return "nbLike" in obj; }, get: function (obj) { return obj.nbLike; }, set: function (obj, value) { obj.nbLike = value; } }, metadata: _metadata }, _nbLike_initializers, _nbLike_extraInitializers);
        __esDecorate(null, null, _accounts_decorators, { kind: "field", name: "accounts", static: false, private: false, access: { has: function (obj) { return "accounts" in obj; }, get: function (obj) { return obj.accounts; }, set: function (obj, value) { obj.accounts = value; } }, metadata: _metadata }, _accounts_initializers, _accounts_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Profile = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Profile = _classThis;
}();
exports.Profile = Profile;
