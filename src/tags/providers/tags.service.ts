import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, In } from 'typeorm';
import { Tag } from '../tag.entity';
import { CreateTagDto, GetTagParamDto, PatchTagDto } from '../dtos';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  public async getAll(): Promise<Tag[]> {
    const tags = await this.tagRepository.find();
    if (!tags) throw new NotFoundException('No tags found');
    return tags;
  }

  public async getMultiple(tags: number[] | undefined): Promise<Tag[]> {
    if (!tags) throw new NotFoundException('No tags found');
    return await this.tagRepository.find({ where: { id: In(tags) } });
  }

  public async getById(getTagParamDto: GetTagParamDto): Promise<Tag> {
    const tag = await this.tagRepository.findOne({
      where: { id: getTagParamDto.id },
    });
    if (!tag) throw new NotFoundException('No tag found');
    return tag;
  }

  public async create(createTagDto: CreateTagDto): Promise<Tag> {
    const newTag = this.tagRepository.create(createTagDto);
    return await this.tagRepository.save(newTag);
  }

  public async update(patchTagDto: PatchTagDto): Promise<UpdateResult> {
    const { id, ...data } = patchTagDto;
    return await this.tagRepository.update(id, data);
  }

  public async delete(id: number) {
    await this.tagRepository.delete(id);
    return { deleted: true, id };
  }

  public async softDelete(id: number) {
    await this.tagRepository.softDelete(id);
    return { deleted: true, id };
  }
}
