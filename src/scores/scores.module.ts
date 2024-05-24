import { Module } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { ScoresController } from './scores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Score, ScoreSchema } from './entities/score.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Score.name,
        schema: ScoreSchema,
      },

    ]),
  ],
  controllers: [ScoresController],
  providers: [ScoresService],
})
export class ScoresModule { }
