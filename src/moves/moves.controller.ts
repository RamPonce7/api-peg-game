import { BadRequestException, Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MovesService } from './moves.service';

@Controller('moves')
export class MovesController {
  constructor(private readonly movesService: MovesService) { }



  @Get(':holeAt')
  findOne(@Param('holeAt', ParseIntPipe) holeAt: string) {
    if (+holeAt > 14 || +holeAt < 0) {
      throw new BadRequestException('holeAt must be less than 15 and greater than 0');
    }
    return this.movesService.findOne(+holeAt);
  }


}
