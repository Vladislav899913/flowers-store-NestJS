"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowersGraphqlResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const flowers_service_1 = require("../flowers/flowers.service");
const flower_model_1 = require("./flower.model");
let FlowersGraphqlResolver = class FlowersGraphqlResolver {
    constructor(flowersService) {
        this.flowersService = flowersService;
    }
    findAll() {
        return this.flowersService.findAll();
    }
};
exports.FlowersGraphqlResolver = FlowersGraphqlResolver;
__decorate([
    (0, graphql_1.Query)(() => [flower_model_1.FlowerModel], { name: 'flowers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlowersGraphqlResolver.prototype, "findAll", null);
exports.FlowersGraphqlResolver = FlowersGraphqlResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [flowers_service_1.FlowersService])
], FlowersGraphqlResolver);
//# sourceMappingURL=flowers-graphql.resolver.js.map