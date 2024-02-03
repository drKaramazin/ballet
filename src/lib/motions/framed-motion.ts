import { Motion } from './motion';
import { MotionParams } from '../models/motion-params.model';

export abstract class FramedMotion extends Motion {

  protected abstract makeStartStep(params: MotionParams): void;
  protected abstract makeEndStep(params: MotionParams): void;
  protected abstract makeUsualStep(params: MotionParams): void;

  make(params: MotionParams): void {
    if (params.element) {
      if (params.delta <= 0) {
        this.makeStartStep(params);
        return;
      }
      if (params.delta >= 1) {
        this.makeEndStep(params);
        return;
      }

      this.makeUsualStep(params);
    } else {
      throw new Error('There is no element');
    }
  }

}
