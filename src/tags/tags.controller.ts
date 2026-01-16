import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { TagsService } from './providers/tags.service';
import { CreateTagDto, PatchTagDto, GetTagParamDto } from './dtos';
import { Tag } from './tag.entity';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  public getTags() {
    return this.tagsService.getAll();
  }

  @Get('/:id')
  public getById(@Param() getTagParamDto: GetTagParamDto) {
    return this.tagsService.getById(getTagParamDto);
  }

  @Post()
  public create(@Body() createTagDto: CreateTagDto): Promise<Tag> {
    return this.tagsService.create(createTagDto);
  }

  @Patch()
  public update(@Body() patchTagDto: PatchTagDto) {
    return this.tagsService.update(patchTagDto);
  }

  @Delete()
  public delete(@Query('id', ParseIntPipe) id: number) {
    return this.tagsService.delete(id);
  }

  @Delete('soft-delete')
  public softDelete(@Query('id', ParseIntPipe) id: number) {
    return this.tagsService.softDelete(id);
  }
}
