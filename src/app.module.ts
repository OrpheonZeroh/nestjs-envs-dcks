import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { Configuration } from "./config/config.keys";
import { ConfigService } from "./config/config.service";
import { DbModule } from './db/db.module';
import { ConfigModule } from './config/config.module';


@Module({
  imports: [ DbModule, ConfigService, UsersModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
