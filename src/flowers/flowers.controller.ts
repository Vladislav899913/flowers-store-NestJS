import {
  Body,
  Controller,
  Get,
  Post,
  // UseGuards,
  // UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
// import { AuthGuard } from '../conception/guard';
// import { LoggingInterceptor } from '../conception/interceptor';
import { CreateFlowersDto } from './flowers.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('flowers')
@ApiTags('Flowers')
// @UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  // @UseGuards(AuthGuard)
  findAll() {
    return this.flowersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  // @UseGuards(AuthGuard)
  @ApiResponse({ status: 201 })
  @ApiBody({
    type: CreateFlowersDto,
    description: 'Json structure for flower object',
  })
  create(@Body() dto: CreateFlowersDto) {
    return this.flowersService.create(dto);
  }
}

// 2:29:25 - остановился
