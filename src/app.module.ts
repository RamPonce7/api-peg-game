import { Module } from '@nestjs/common';
import { MovesModule } from './moves/moves.module';
import { ScoresModule } from './scores/scores.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig } from './utils/config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfig]
    }),
    MongooseModule.forRoot(`${process.env.MONGO_URL}${process.env.MONGO_DB}`),
    MovesModule,
    ScoresModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
