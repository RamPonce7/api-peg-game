import { Injectable } from '@nestjs/common';
import { PuzzlePegs } from 'src/utils/peg-game-resolver/PuzzlePegs';

@Injectable()
export class MovesService {

  findOne(holeIn: number) {

    const puzzlePeg = new PuzzlePegs((holeIn + 1), -1);
    if (puzzlePeg.solve()) {
      return puzzlePeg.jumps.map(jump => {
        return jump.map(j => j - 1);
      });
    }
    return [];
  }


}
