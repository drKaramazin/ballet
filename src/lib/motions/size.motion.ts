import { Value } from '../models/value.model';
import { Util } from '../util';
import { MotionParams } from '../models/motion-params.model';
import { FramedMotion } from './framed-motion';
import { ValueHelper } from '../helpers/value.helper';
import { NumOrFn } from '../models/num-or-fn';

export interface ISizeMotion {
  startWidth: NumOrFn;
  endWidth: NumOrFn;
  startHeight: NumOrFn;
  endHeight: NumOrFn;
}

export class SizeMotion extends FramedMotion {

  override name = 'SizeMotion';

  startWidth: Value;
  endWidth: Value;
  startHeight: Value;
  endHeight: Value;

  constructor(data: ISizeMotion) {
    super();

    this.startWidth = ValueHelper.prepare(data.startWidth);
    this.endWidth = ValueHelper.prepare(data.endWidth);
    this.startHeight = ValueHelper.prepare(data.startHeight);
    this.endHeight = ValueHelper.prepare(data.endHeight);
  }

  protected setWidth(params: MotionParams, width: number): void {
    params.element.style.width = `${width}px`;
  }

  protected setHeight(params: MotionParams, height: number): void {
    params.element.style.height = `${height}px`;
  }

  protected makeStartStep(params: MotionParams): void {
    const width = this.startWidth(Util.clientWidth(), Util.clientHeight());
    this.setWidth(params, width);

    const height = this.startHeight(Util.clientWidth(), Util.clientHeight());
    this.setHeight(params, height);
  }

  protected makeEndStep(params: MotionParams): void {
    const width = this.endWidth(Util.clientWidth(), Util.clientHeight());
    this.setWidth(params, width);

    const height = this.endHeight(Util.clientWidth(), Util.clientHeight());
    this.setHeight(params, height);
  }

  protected makeUsualStep(params: MotionParams): void {
    const widthLength = this.endWidth(Util.clientWidth(), Util.clientHeight()) - this.startWidth(Util.clientWidth(), Util.clientHeight());
    const width = Util.castToInt(this.startWidth(Util.clientWidth(), Util.clientHeight()) + widthLength * params.delta);
    this.setWidth(params, width);

    const heightLength = this.endHeight(Util.clientWidth(), Util.clientHeight()) - this.startHeight(Util.clientWidth(), Util.clientHeight());
    const height = Util.castToInt(this.startHeight(Util.clientWidth(), Util.clientHeight()) + heightLength * params.delta);
    this.setHeight(params, height);
  }

  turnOff(element: HTMLElement): void {
    element.style.removeProperty('width');
    element.style.removeProperty('height');
  }

}
