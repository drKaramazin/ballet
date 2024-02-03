import { Motion } from './motions/motion';
import { Util } from './util';

export class TimeFrame {

  constructor(
    public motion: Motion,
    public start: (deviceWidth: number, deviceHeight: number) => number,
    public end: (deviceWidth: number, deviceHeight: number) => number = start,
  ) {
    if (end === undefined) {
      this.end = start;
    } else {
      if (this.getStartPos() > this.getEndPos()) {
        throw new SyntaxError('"Start" later than "End" in the frame');
      }
    }
  }

  getStartPos(): number {
    return this.start(Util.clientWidth(), Util.clientHeight());
  }

  getEndPos(): number {
    return this.end(Util.clientWidth(), Util.clientHeight());
  }

  length(): number {
    return this.getEndPos() - this.getStartPos();
  }

}
