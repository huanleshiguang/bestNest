/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-11-24 22:24:26
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-11-25 15:47:03
 * @Descripttion: 
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const configService = app.get(ConfigService);

  // 使用 ConfigService 可以访问加载的配置
  const databaseHost = configService.get<string>('DATABASE_HOST');
  console.log('Database Host:', databaseHost);


  await app.listen(3000);




}
bootstrap();
