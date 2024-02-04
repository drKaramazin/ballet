import { MotionParams } from '../models/motion-params.model';

export abstract class Motion {

  protected abstract readonly name: string;

  motionName(): string {
    return this.name;
  }

  abstract make(params: MotionParams): void;
  abstract turnOff(element: HTMLElement): void;

}
