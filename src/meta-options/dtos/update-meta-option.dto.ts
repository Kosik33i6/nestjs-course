import { IsJSON, IsNotEmpty } from 'class-validator';

export class updateDto {
  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
