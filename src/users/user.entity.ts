/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-11-24 23:15:25
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-11-25 16:34:31
 * @Descripttion: 
 */
// users/user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn() //PrimaryGeneratedColumn 表明id自增
  id: number;

  @Column() // Column 表明普通列
  username: string;

  @Column()
  email: string;
}
