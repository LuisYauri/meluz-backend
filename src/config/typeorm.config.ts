import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'remotemysql.com',
  port: 3306,
  username: 'zs6Asse1Bp',
  password: 'D4AuhZvzGJ',
  database: 'zs6Asse1Bp',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
