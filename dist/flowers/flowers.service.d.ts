import { PrismaService } from '../prisma.service';
import { CreateFlowersDto } from './flowers.dto';
export declare class FlowersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
