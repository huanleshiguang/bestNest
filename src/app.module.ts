/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-11-24 22:24:26
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-11-25 15:48:26
 * @Descripttion: 
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '111111',
      database: 'bestNest',
      synchronize: true,
      logging: true,
      entities: ['dist/**/*.entity.js'], // 路径根据实际情况修改
    }),
    ConfigModule.forRoot(
      {
        envFilePath: '.env', // 指定配置文件路径
        isGlobal: true,
      }
    ),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
