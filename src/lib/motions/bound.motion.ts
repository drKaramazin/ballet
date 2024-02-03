import { Motion } from './motion';
import { Util } from '../util';
import { MotionParams } from '../models/motion-params.model';

export declare type BoundValue = (deviceWidth: number, deviceHeight: number) => Partial<CSSStyleDeclaration>;

export interface IBoundMotion {
  before: BoundValue;
  after: BoundValue;
}

export class BoundMotion extends Motion {

  override name = 'BoundMotion';

  before: BoundValue;
  after: BoundValue;

  constructor(data: IBoundMotion) {
    super();

    this.before = data.before;
    this.after = data.after;
  }

  applyProperties(element: HTMLElement, properties: Partial<CSSStyleDeclaration>): void {
    for (const property of Object.keys(properties)) {
      element.style[property] = properties[property];
    }
  }

  override make(params: MotionParams): void {
    if (params.element) {
      if (params.scrollPosOnScene < params.frame.getStartPos()) {
        this.applyProperties(params.element, this.before(Util.clientWidth(), Util.clientHeight()));
      } else {
        this.applyProperties(params.element, this.after(Util.clientWidth(), Util.clientHeight()));
      }
    } else {
      throw new Error('There is no element');
    }
  }

}
