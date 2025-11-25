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
exports.Account = void 0;
var profile_entity_1 = require("feature/profile/data/entity/profile.entity");
var typeorm_1 = require("typeorm"); // <-- Imports manquants
var ulid_1 = require("ulid"); // <-- Import manquant pour la clé
var Account = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _account_id_decorators;
    var _account_id_initializers = [];
    var _account_id_extraInitializers = [];
    var _firstname_decorators;
    var _firstname_initializers = [];
    var _firstname_extraInitializers = [];
    var _lastname_decorators;
    var _lastname_initializers = [];
    var _lastname_extraInitializers = [];
    var _birthday_decorators;
    var _birthday_initializers = [];
    var _birthday_extraInitializers = [];
    var _mail_decorators;
    var _mail_initializers = [];
    var _mail_extraInitializers = [];
    var _profiles_decorators;
    var _profiles_initializers = [];
    var _profiles_extraInitializers = [];
    var Account = _classThis = /** @class */ (function () {
        function Account_1() {
            // (Style basé sur person.entity.ts [cite: 809-810])
            this.account_id = __runInitializers(this, _account_id_initializers, void 0);
            this.firstname = (__runInitializers(this, _account_id_extraInitializers), __runInitializers(this, _firstname_initializers, void 0));
            this.lastname = (__runInitializers(this, _firstname_extraInitializers), __runInitializers(this, _lastname_initializers, void 0));
            this.birthday = (__runInitializers(this, _lastname_extraInitializers), __runInitializers(this, _birthday_initializers, void 0));
            this.mail = (__runInitializers(this, _birthday_extraInitializers), __runInitializers(this, _mail_initializers, void 0));
            this.profiles = (__runInitializers(this, _mail_extraInitializers), __runInitializers(this, _profiles_initializers, void 0)); // Corrigé : doit être un tableau (Profile[])
            __runInitializers(this, _profiles_extraInitializers);
        }
        return Account_1;
    }());
    __setFunctionName(_classThis, "Account");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _account_id_decorators = [(0, typeorm_1.PrimaryColumn)('varchar', { length: 26, default: function () { return "'".concat((0, ulid_1.ulid)(), "'"); } })];
        _firstname_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _lastname_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _birthday_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _mail_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _profiles_decorators = [(0, typeorm_1.ManyToMany)(function () { return profile_entity_1.Profile; }, function (profile) { return profile.accounts; }, { cascade: true, eager: true })];
        __esDecorate(null, null, _account_id_decorators, { kind: "field", name: "account_id", static: false, private: false, access: { has: function (obj) { return "account_id" in obj; }, get: function (obj) { return obj.account_id; }, set: function (obj, value) { obj.account_id = value; } }, metadata: _metadata }, _account_id_initializers, _account_id_extraInitializers);
        __esDecorate(null, null, _firstname_decorators, { kind: "field", name: "firstname", static: false, private: false, access: { has: function (obj) { return "firstname" in obj; }, get: function (obj) { return obj.firstname; }, set: function (obj, value) { obj.firstname = value; } }, metadata: _metadata }, _firstname_initializers, _firstname_extraInitializers);
        __esDecorate(null, null, _lastname_decorators, { kind: "field", name: "lastname", static: false, private: false, access: { has: function (obj) { return "lastname" in obj; }, get: function (obj) { return obj.lastname; }, set: function (obj, value) { obj.lastname = value; } }, metadata: _metadata }, _lastname_initializers, _lastname_extraInitializers);
        __esDecorate(null, null, _birthday_decorators, { kind: "field", name: "birthday", static: false, private: false, access: { has: function (obj) { return "birthday" in obj; }, get: function (obj) { return obj.birthday; }, set: function (obj, value) { obj.birthday = value; } }, metadata: _metadata }, _birthday_initializers, _birthday_extraInitializers);
        __esDecorate(null, null, _mail_decorators, { kind: "field", name: "mail", static: false, private: false, access: { has: function (obj) { return "mail" in obj; }, get: function (obj) { return obj.mail; }, set: function (obj, value) { obj.mail = value; } }, metadata: _metadata }, _mail_initializers, _mail_extraInitializers);
        __esDecorate(null, null, _profiles_decorators, { kind: "field", name: "profiles", static: false, private: false, access: { has: function (obj) { return "profiles" in obj; }, get: function (obj) { return obj.profiles; }, set: function (obj, value) { obj.profiles = value; } }, metadata: _metadata }, _profiles_initializers, _profiles_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Account = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Account = _classThis;
}();
exports.Account = Account;
