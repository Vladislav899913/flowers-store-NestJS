"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const flowers_module_1 = require("./flowers/flowers.module");
const middleware_1 = require("./conception/middleware");
const config_1 = require("@nestjs/config");
const microservice_module_1 = require("./microservice/microservice.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const microservices_1 = require("@nestjs/microservices");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const flowers_graphql_module_1 = require("./flowers-graphql/flowers-graphql.module");
const process = require("process");
const path_1 = require("path");
const websocket_gateway_1 = require("./websocket.gateway");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(middleware_1.LoggerMiddleware).forRoutes('flowers');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            flowers_module_1.FlowersModule,
            microservice_module_1.MicroserviceModule,
            microservices_1.ClientsModule.register([
                {
                    name: 'ORDER_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: 8877,
                    },
                },
            ]),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
            }),
            flowers_graphql_module_1.FlowersGraphqlModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, websocket_gateway_1.WebsocketGateway],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map