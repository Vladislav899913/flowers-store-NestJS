"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Flowers API')
        .setDescription('The flowers API description')
        .setVersion('1.0')
        .addTag('flowers')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(4200);
    console.log('HTTP app is listening on port 4200');
    const microserviceApp = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: 'localhost',
            port: 8877,
        },
    });
    await microserviceApp.listen();
    console.log('Microservice is listening on port 8877');
}
bootstrap();
//# sourceMappingURL=main.js.map