import { IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class GetPostParamDto {
  @IsNotEmpty()
  @Type(() => Number)
  id: number;
}
