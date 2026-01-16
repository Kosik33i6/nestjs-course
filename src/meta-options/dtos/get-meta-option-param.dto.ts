import { IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class GetMetaOptionParamDto {
  @IsNotEmpty()
  @Type(() => Number)
  id: number;
}
