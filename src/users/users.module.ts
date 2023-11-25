/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-11-24 22:51:42
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-11-25 15:09:22
 * @Descripttion: 
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // 添加这一行，告诉 TypeORM 在 UsersModule 中可以使用 Repository<User>
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule { }
