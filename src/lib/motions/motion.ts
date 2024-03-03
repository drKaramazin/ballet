import { MotionParams } from '../models/motion-params.model';
import { Klass, RootKlassGuard } from '../models/rootKlassGuard';

export abstract class Motion implements RootKlassGuard {

  rootKlass = Klass.Motion;

  protected abstract readonly name: string;

  motionName(): string {
    return this.name;
  }

  abstract make(params: MotionParams): void;
  abstract turnOff(element: HTMLElement): void;

}
