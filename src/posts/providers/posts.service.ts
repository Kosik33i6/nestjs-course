import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../../user/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GetPostParamDto } from '../dtos/get-post-param.dto';
import { TagsService } from '../../tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';

@Injectable()
export class PostsService {
  constructor(
    // * Injecting User Service
    private readonly usersService: UsersService,

    // * Injecting TagsService
    private readonly tagsService: TagsService,

    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    // @InjectRepository(MetaOption)
    // private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public async create(@Body() createPostDto: CreatePostDto): Promise<Post> {
    const author = await this.usersService.findOneById(createPostDto.authorId);
    const tags = await this.tagsService.getMultiple(createPostDto.tags);
    if (!author) throw new NotFoundException('Author not found');
    const post = this.postsRepository.create({
      ...createPostDto,
      author,
      tags,
    });
    return await this.postsRepository.save(post);
  }

  public async getAll(): Promise<Post[]> {
    return await this.postsRepository.find({
      relations: {
        // metaOptions: true,
        // author: true
        tags: true,
      },
    });
  }

  public async getById(getPostParamDto: GetPostParamDto): Promise<Post> {
    const post = await this.postsRepository.findOne({
      where: { id: getPostParamDto.id },
    });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  public async update(patchPostDto: PatchPostDto): Promise<Post> {
    // Find new tags
    const tags = await this.tagsService.getMultiple(patchPostDto.tags);

    // Find the post
    const post = await this.postsRepository.findOneBy({
      id: patchPostDto.id,
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    // Update post related properties
    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;

    // Update the tags

    post.tags = tags;

    return await this.postsRepository.save(post);
  }

  public async delete(id: number) {
    await this.postsRepository.delete(id);
    return { deleted: true, id };
  }
}
