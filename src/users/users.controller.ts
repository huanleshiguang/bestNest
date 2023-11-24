/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-11-24 22:52:09
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-11-24 22:54:02
 * @Descripttion: 
 */
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.getUserById(Number(id));
  }

  @Post()
  addUser(@Body() user: User): void {
    this.usersService.addUser(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updatedUser: User): void {
    this.usersService.updateUser(Number(id), updatedUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    this.usersService.deleteUser(Number(id));
  }
}
