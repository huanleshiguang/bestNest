/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-11-24 22:52:09
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-11-25 16:14:40
 * @Descripttion: 
 */
// users/users.controller.ts

import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(Number(id));
  }

  @Post()
  async addUser(@Body() user: User): Promise<void> {
    console.log(user,'useruseruser');
    
    await this.usersService.addUser(user);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updatedUser: User): Promise<void> {
    await this.usersService.updateUser(Number(id), updatedUser);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    await this.usersService.deleteUser(Number(id));
  }
}
