import { MicroserviceService } from './microservice.service';
export declare class MicroserviceController {
    private readonly microserviceService;
    constructor(microserviceService: MicroserviceService);
    handleMessage(message: string): void;
}
