/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-11-24 22:51:42
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-11-24 22:56:45
 * @Descripttion: 
 */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
