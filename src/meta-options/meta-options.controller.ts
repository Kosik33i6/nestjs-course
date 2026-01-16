import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MetaOptionsService } from './providers/meta-options.service';
import { GetMetaOptionParamDto } from './dtos/get-meta-option-param.dto';
import { CreateMetaOptionsDto } from './dtos/create-meta-options.dto';
import { updateDto } from './dtos/update-meta-option.dto';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}
  @Get()
  public getAll() {
    return this.metaOptionsService.getAll();
  }

  @Get('/:id')
  public getById(@Param() getMetaOptionParamDto: GetMetaOptionParamDto) {
    return this.metaOptionsService.getById(getMetaOptionParamDto);
  }

  @Post()
  public create(@Body() CreateMetaOptionsDto: CreateMetaOptionsDto) {
    console.log(CreateMetaOptionsDto);
    return this.metaOptionsService.create(CreateMetaOptionsDto);
  }

  @Patch('/:id')
  public update(
    @Param() getMetaOptionParamDto: GetMetaOptionParamDto,
    @Body() updateDto: updateDto,
  ) {
    return this.metaOptionsService.update(getMetaOptionParamDto, updateDto);
  }

  @Delete()
  public delete(@Query('id', ParseIntPipe) id: number) {
    return this.metaOptionsService.delete(id);
  }
}
