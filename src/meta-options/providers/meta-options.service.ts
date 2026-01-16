import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { MetaOption } from '../meta-option.entity';
import { GetMetaOptionParamDto } from '../dtos/get-meta-option-param.dto';
import { CreateMetaOptionsDto } from '../dtos/create-meta-options.dto';
import { updateDto } from '../dtos/update-meta-option.dto';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
  ) {}

  public async getAll(): Promise<MetaOption[]> {
    const metaOptions: MetaOption[] = await this.metaOptionRepository.find();
    if (!metaOptions) throw new NotFoundException('No meta options found');
    return metaOptions;
  }

  public async getById(
    getMetaOptionParamDto: GetMetaOptionParamDto,
  ): Promise<MetaOption> {
    const metaOption = await this.metaOptionRepository.findOne({
      where: { id: getMetaOptionParamDto.id },
    });
    if (!metaOption) throw new NotFoundException('No meta option found');
    return metaOption;
  }

  public async create(
    CreateMetaOptionsDto: CreateMetaOptionsDto,
  ): Promise<MetaOption> {
    const newMetaOption =
      this.metaOptionRepository.create(CreateMetaOptionsDto);
    return await this.metaOptionRepository.save(newMetaOption);
  }

  public async update(
    getMetaOptionParamDto: GetMetaOptionParamDto,
    updateDto: updateDto,
  ): Promise<UpdateResult> {
    return this.metaOptionRepository.update(getMetaOptionParamDto, updateDto);
  }

  public async delete(id: number) {
    await this.metaOptionRepository.delete(id);
    return { deleted: true, id };
  }
}
