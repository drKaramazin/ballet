import { Value } from '../models/value.model';
import { Util } from '../util';
import { MotionParams } from '../models/motion-params.model';
import { FramedMotion } from './framed-motion';

export interface IOpacityMotion {
  start: Value;
  end: Value;
}

export class OpacityMotion extends FramedMotion {

  override name = 'OpacityMotion';

  start: Value;
  end: Value;

  constructor(data: IOpacityMotion) {
    super();

    this.start = data.start;
    this.end = data.end;
  }

  protected setOpacity(params: MotionParams, opacity: number): void {
    params.element.style.opacity = opacity.toString();
  }

  protected makeStartStep(params: MotionParams): void {
    const opacity = this.start(Util.clientWidth(), Util.clientHeight());
    this.setOpacity(params, opacity);
  }

  protected makeEndStep(params: MotionParams): void {
    const opacity = this.end(Util.clientWidth(), Util.clientHeight());
    this.setOpacity(params, opacity);
  }

  protected makeUsualStep(params: MotionParams): void {
    const motionLength = this.end(Util.clientWidth(), Util.clientHeight()) - this.start(Util.clientWidth(), Util.clientHeight());
    const opacity = this.start(Util.clientWidth(), Util.clientHeight()) + motionLength * params.delta;
    this.setOpacity(params, opacity);
  }

}
