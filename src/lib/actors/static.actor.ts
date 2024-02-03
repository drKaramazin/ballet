import { InitiableActor } from './initiable.actor';
import { Util } from '../util';
import { MoveMotion } from '../motions/move.motion';
import { Scene } from '../scenes/scene';

export interface StaticActorOptions {
  initPosition?: boolean;
  initSize?: boolean;
  initOpacity?: boolean;
}

export class StaticActor extends InitiableActor {

  constructor(
    public override element: HTMLElement | undefined,
    public options?: StaticActorOptions,
  ) {
    super();
    this.options = {
      initPosition: true,
      initSize: true,
      initOpacity: true,
      ...this.options,
    };
  }

  override bindElement(scrollPosOnScene: number, scene: Scene<any>): HTMLElement | undefined {
    if (this.element) {
      if (this.options?.initPosition) {
        const timeFrame = this.findFirstMoveMotionFrame();
        (timeFrame.motion as MoveMotion).make(Util.prepareMotionParams(
          scrollPosOnScene,
          this.element,
          timeFrame,
          scene,
        ));
      }
      if (this.options?.initSize) {
        const startDimensions = this.calcStartSize();
        this.element.style.width = `${startDimensions.width(Util.clientWidth(), Util.clientHeight())}px`;
        this.element.style.height = `${startDimensions.height(Util.clientWidth(), Util.clientHeight())}px`;
      }
      if (this.options?.initOpacity) {
        const startOpacity = this.calcStartOpacity();
        this.element.style.opacity = `${startOpacity(Util.clientWidth(), Util.clientHeight())}`;
      }
    }
    return this.element;
  }

}
