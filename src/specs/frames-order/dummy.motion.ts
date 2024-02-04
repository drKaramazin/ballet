import { Motion, MotionParams } from '../../lib';

export class DummyMotion extends Motion {

  override name = 'DummyMotion';

  constructor(public id: string) {
    super();
  }

  override make(params: MotionParams): void {}

  turnOff(element: HTMLElement): void {}

}
