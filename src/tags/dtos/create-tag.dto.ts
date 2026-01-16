import {
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(256)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'For example, "my-url"',
    example: 'how-to-use-nestjs-for-building-backend-applications',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be  all small letters and uses only hyphens to separate words and without spaces. For example ,y-url',
  })
  @MaxLength(512)
  slug: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featuredImage?: string;
}
