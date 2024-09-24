import { FlowersService } from '../flowers/flowers.service';
export declare class FlowersGraphqlResolver {
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
}
