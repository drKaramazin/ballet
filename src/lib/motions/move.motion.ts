import { Value } from '../models/value.model';
import { Util } from '../util';
import { MotionParams } from '../models/motion-params.model';
import { FramedMotion } from './framed-motion';
import { ValueHelper } from '../helpers/value.helper';
import { NumOrFn } from '../models/num-or-fn';

export interface IMoveMotion {
  startX: NumOrFn;
  endX: NumOrFn;
  startY: NumOrFn;
  endY: NumOrFn;
}

export class MoveMotion extends FramedMotion {

  override name = 'MoveMotion';

  startX: Value;
  endX: Value;
  startY: Value;
  endY: Value;

  constructor(data: IMoveMotion) {
    super();

    this.startX = ValueHelper.prepare(data.startX);
    this.endX = ValueHelper.prepare(data.endX);
    this.startY = ValueHelper.prepare(data.startY);
    this.endY = ValueHelper.prepare(data.endY);
  }

  protected setLeft(element: HTMLElement, left: number): void {
    element.style.left = `${left}px`;
  }

  protected setTop(params: MotionParams, y: number): void {
    const top = params.scene.interceptY(y, params);
    params.element.style.top = `${top}px`;
  }

  protected makeStartStep(params: MotionParams): void {
    const x = this.startX(Util.clientWidth(), Util.clientHeight());
    this.setLeft(params.element, x);

    const y = this.startY(Util.clientWidth(), Util.clientHeight());
    this.setTop(params, y);
  }

  protected makeEndStep(params: MotionParams): void {
    const x = this.endX(Util.clientWidth(), Util.clientHeight());
    this.setLeft(params.element, x);

    const y = this.endY(Util.clientWidth(), Util.clientHeight());
    this.setTop(params, y);
  }

  protected makeUsualStep(params: MotionParams): void {
    const xLength = this.endX(Util.clientWidth(), Util.clientHeight()) - this.startX(Util.clientWidth(), Util.clientHeight());

    const x = Util.castToInt(this.startX(Util.clientWidth(), Util.clientHeight()) + xLength * params.delta);
    this.setLeft(params.element, x);

    const yLength = this.endY(Util.clientWidth(), Util.clientHeight()) - this.startY(Util.clientWidth(), Util.clientHeight());
    const y = Util.castToInt(this.startY(Util.clientWidth(), Util.clientHeight()) + yLength * params.delta);
    this.setTop(params, y);
  }

  turnOff(element: HTMLElement): void {
    element.style.removeProperty('left');
    element.style.removeProperty('top');
  }

}
