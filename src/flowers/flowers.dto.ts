import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFlowersDto {
  @IsString({
    message: 'Имя не строка!',
  })
  @ApiProperty({
    example: 'Vladislav',
    required: true,
  })
  name: string;

  @IsString()
  @ApiProperty({
    example: 'Gromiychuk',
    required: true,
  })
  color: string;

  @IsNumber()
  @ApiProperty({
    example: 'Viktorovich',
    required: true,
  })
  price: number;
}

export type TUpdateFlowersDto = Partial<CreateFlowersDto>;
