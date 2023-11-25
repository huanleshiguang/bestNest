/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-11-24 22:24:26
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-11-25 15:58:59
 * @Descripttion: 
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!';
  }
}
