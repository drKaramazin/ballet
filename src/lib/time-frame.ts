import { Motion } from './motions/motion';
import { Util } from './util';
import { Value } from './models/value.model';
import { Klass, RootKlassGuard } from './models/rootKlassGuard';
import { ValueHelper } from './helpers/value.helper';
import { NumOrFn } from './models/num-or-fn';

export class TimeFrame implements RootKlassGuard {

  rootKlass = Klass.TimeFrame;

  public start: Value;
  public end: Value;

  constructor(
    public motion: Motion,
    start?: NumOrFn,
    end?: NumOrFn,
  ) {
    this.start = start === undefined ? ValueHelper.prepare(0) : ValueHelper.prepare(start);
    this.end = end === undefined ? this.end = this.start : this.end = ValueHelper.prepare(end);

    if (this.getStartPos() > this.getEndPos()) {
      throw new SyntaxError('"Start" later than "End" in the frame');
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
