import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Score } from './entities/score.entity';
import { Model } from 'mongoose';

@Injectable()
export class ScoresService {

  constructor(
    @InjectModel(Score.name)
    private readonly scoreModel: Model<Score>,
  ) { }

  async create(createScoreDto: CreateScoreDto) {
    return await this.scoreModel.create(createScoreDto);
  }

  async findAll() {
    return await this.scoreModel.find().sort({ score: "desc" }).limit(10);
  }


}
