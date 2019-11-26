import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class DrawService {
  boardWidth = 1000;
  boardHeight = 600;
  gridWidth = 50;
  gridHeight = 50;

  getHorizontalLines(): number[] {
    const count = this.boardHeight / this.gridHeight + 1;
    return _.range(count).map(index => index * this.gridHeight);
  }

  getVerticalLines(): number[] {
    const count = this.boardWidth / this.gridWidth + 1;
    return _.range(count).map(index => index * this.gridWidth);
  }
}
