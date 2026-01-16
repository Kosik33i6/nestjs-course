import {
  IsString,
  IsOptional,
  IsArray,
  IsEnum,
  MinLength,
  IsNotEmpty,
  Matches,
  IsJSON,
  IsUrl,
  IsISO8601,
  ValidateNested,
  MaxLength,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateMetaOptionsDto } from '../../meta-options/dtos/create-meta-options.dto';
import { PostTypeEnum } from '../enums/postType.enum';
import { PostStatusEnum } from '../enums/postStatus.enum';

export class CreatePostDto {
  @ApiProperty({
    description: 'This is the title for the blog post',
    example: 'How to use NestJS for building backend applications',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    enum: PostTypeEnum,
    description:
      'Possible values for post types are: post, page, story, series',
    example: PostTypeEnum.POST,
  })
  @IsEnum(PostTypeEnum)
  @IsNotEmpty()
  postType: PostTypeEnum;

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
  @MaxLength(256)
  slug: string;

  @ApiProperty({
    enum: PostStatusEnum,
    description:
      'Possible values for post status are: published, draft, pending, private',
    example: PostStatusEnum.PUBLISHED,
  })
  @IsEnum(PostStatusEnum)
  @IsNotEmpty()
  status: PostStatusEnum;

  @ApiPropertyOptional({
    description: 'This is the content for the blog post',
    example: '<p>This is my first blog post</p>',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description:
      'Serialize your JSON object else a validation error will be thrown',
    example:
      '{\\r\\n    \\"@context\\": \\"https:\\/\\/schema.org\\",\\r\\n    \\"@type\\": \\"Person\\"\\r\\n  }',
  })
  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({
    description: 'URL to the featured image for the blog post',
    example: 'https://myblog.com/images/featured-image.png',
  })
  @IsUrl()
  @IsOptional()
  @MaxLength(1024)
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    description:
      'The date and time when the post should be published. If not provided, the post will be published immediately.',
    example: '2023-10-05T14:48:00.000Z',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional({
    description: 'Array of ids of tags',
    example: [1, 2, 3],
    type: [Number],
  })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  tags?: number[];

  @ApiPropertyOptional({
    description: 'Meta options for the blog post',
    example: { sidebarEnabled: true, menuHamburger: false },
    type: () => CreateMetaOptionsDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateMetaOptionsDto)
  metaOptions?: CreateMetaOptionsDto | undefined;

  @ApiProperty({
    type: 'integer',
    required: true,
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  authorId: number;
}
