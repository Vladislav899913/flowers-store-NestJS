import { FlowersService } from './flowers.service';
import { CreateFlowersDto } from './flowers.dto';
export declare class FlowersController {
    private readonly flowersService;
    constructor(flowersService: FlowersService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        color: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(dto: CreateFlowersDto): import(".prisma/client").Prisma.Prisma__FlowerClient<{
        id: number;
        name: string;
        color: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
