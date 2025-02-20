import { DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config();

export const connectionDB: DataSourceOptions = {
  // type: process.env.DB_TYPE as any,
  // host: process.env.DB_HOST,
  // port: +process.env.DB_PORT,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  type: 'postgres',
  host: '34.141.57.167',
  port: 5432,
  username: 'meduzzen',
  password: 'meduzzen',
  database: 'meduzzen',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  synchronize: false,
};
