import { Module } from '@nestjs/common';
import { databaseProviders } from './db.service';

@Module({
  imports: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DbModule {}
