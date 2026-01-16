import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateTagDto } from './create-tag.dto';

export class PatchTagDto extends PartialType(CreateTagDto) {
  @ApiProperty({ description: 'The ID of the tag that needs to be updated' })
  @IsInt()
  @IsNotEmpty()
  id: string;
}
