/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-11-24 23:13:43
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-11-25 15:35:56
 * @Descripttion: 
 */
// ormconfig.js or app.module.ts

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '111111',
  database: 'bestNest',
  synchronize: true,
  logging: true,
  entities: ['dist/**/*.entity.js'], // 路径根据实际情况修改
  migrations: ['dist/migrations/**/*.js'], // 路径根据实际情况修改
  subscribers: ['dist/subscribers/**/*.js'], // 路径根据实际情况修改
};
