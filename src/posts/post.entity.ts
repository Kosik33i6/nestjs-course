import { PostTypeEnum } from './enums/postType.enum';
import { PostStatusEnum } from './enums/postStatus.enum';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MetaOption } from '../meta-options/meta-option.entity';
import { User } from '../user/user.entity';
import { Tag } from '../tags/tag.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 512, nullable: false })
  title: string;

  @Column({
    type: 'enum',
    enum: PostTypeEnum,
    nullable: false,
    default: PostTypeEnum.POST,
  })
  postType: PostTypeEnum;

  @Column({ type: 'varchar', length: 256, nullable: false, unique: true })
  slug: string;

  @Column({
    type: 'enum',
    enum: PostStatusEnum,
    nullable: false,
    default: PostStatusEnum.DRAFT,
  })
  status: PostStatusEnum;

  @Column({ type: 'text', nullable: true })
  content?: string;

  @Column({ type: 'text', nullable: true })
  schema?: string;

  @Column({ type: 'varchar', nullable: true, length: 1024 })
  featuredImageUrl?: string;

  @Column({ type: 'timestamp', nullable: true })
  publishOn?: Date;

  // @Column({ type })

  @ManyToMany(() => Tag, (tag) => tag.posts, { eager: true })
  @JoinTable()
  tags?: Tag[];

  @OneToOne(() => MetaOption, (metaOptions) => metaOptions.post, {
    cascade: true,
    eager: true,
  })
  metaOptions?: MetaOption;

  @ManyToOne(() => User, (user) => user.posts, { eager: true })
  author: User;
}
