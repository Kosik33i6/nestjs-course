import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class GetTagParamDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: string;
}
