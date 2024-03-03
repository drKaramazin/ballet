import { Value } from '../models/value.model';
import { Util } from '../util';
import { MotionParams } from '../models/motion-params.model';
import { FramedMotion } from './framed-motion';
import { ValueHelper } from '../helpers/value.helper';
import { NumOrFn } from '../models/num-or-fn';

export interface IOpacityMotion {
  start: NumOrFn;
  end: NumOrFn;
}

export class OpacityMotion extends FramedMotion {

  override name = 'OpacityMotion';

  start: Value;
  end: Value;

  constructor(data: IOpacityMotion) {
    super();

    this.start = ValueHelper.prepare(data.start);
    this.end = ValueHelper.prepare(data.end);
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

  turnOff(element: HTMLElement): void {
    element.style.removeProperty('opacity');
  }

}
