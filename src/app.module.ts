import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from './users/user.entity.js';
import { Post } from './posts/post.entity.js';
import { Market } from './markets/market.entity.js'; // <--- Importe a Entidade nova
import { UsersModule } from './users/users.module.js';
import { AuthModule } from './auth/auth.module.js';
import { PostsModule } from './posts/posts.module.js';
import { MarketsModule } from './markets/markets.module.js'; // <--- Importe o Módulo novo

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Post, Market], // <--- Adicione Market aqui
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    PostsModule,
    MarketsModule, // <--- Adicione MarketsModule aqui
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}