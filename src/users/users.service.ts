/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-11-24 22:53:22
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-11-25 16:13:56
 * @Descripttion: 
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly configService: ConfigService
  ) {
    const databaseHost = this.configService.get<string>('DATABASE_HOST');
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    return this.usersRepository.findOne({where: {id}});
  }

  async addUser(user: User): Promise<void> {
    console.log(user,'userrrr');
    
    await this.usersRepository.save(user);
  }

  async updateUser(id: number, updatedUser: User): Promise<void> {
    await this.usersRepository.update(id, updatedUser);
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}