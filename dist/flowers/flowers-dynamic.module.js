"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FlowersModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowersModule = void 0;
const common_1 = require("@nestjs/common");
let FlowersModule = FlowersModule_1 = class FlowersModule {
    static forRoot(options) {
        return {
            module: FlowersModule_1,
            providers: [{ provide: 'OPTIONS', useValue: options }],
        };
    }
};
exports.FlowersModule = FlowersModule;
exports.FlowersModule = FlowersModule = FlowersModule_1 = __decorate([
    (0, common_1.Module)({})
], FlowersModule);
//# sourceMappingURL=flowers-dynamic.module.js.map