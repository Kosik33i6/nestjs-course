import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/users.module';
import { PostModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';
import { Tag } from './tags/tag.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { MetaOption } from './meta-options/meta-option.entity';
import { configuration } from './config/configuration';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: !ENV ? '.env' : `.env.${ENV}`.trim(),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        imports: [],
        inject: [],
        type: 'postgres',
        entities: [User, Tag, MetaOption],
        autoLoadEntities: true,
        synchronize: true,
        port: 5432,
        username: 'postgres',
        password: configuration().database.password,
        host: 'localhost',
        database: 'nestjs-course-blog',
      }),
    }),
    UsersModule,
    PostModule,
    AuthModule,
    TagsModule,
    MetaOptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
