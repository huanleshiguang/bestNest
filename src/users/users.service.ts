/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-11-24 22:53:22
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-11-24 22:53:33
 * @Descripttion: 
 */
import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.find(user => user.id === id);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(id: number, updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
