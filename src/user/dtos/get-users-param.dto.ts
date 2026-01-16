import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetUsersParamDto {
  @ApiPropertyOptional({
    description: 'Get users with specific id',
    example: 123456,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
