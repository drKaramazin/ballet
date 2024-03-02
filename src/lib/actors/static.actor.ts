import { InitiableActor } from './initiable.actor';
import { Util } from '../util';
import { MoveMotion } from '../motions/move.motion';
import { Scene } from '../scenes/scene';
import { ActorOptions } from './actor';
import { ElementRecognition } from '../models/element-recognition';

export interface StaticActorOptions extends ActorOptions {
  initPosition?: boolean;
  initSize?: boolean;
  initOpacity?: boolean;
}

export class StaticActor extends InitiableActor<StaticActorOptions> {

  constructor(
    element: ElementRecognition,
    options?: StaticActorOptions,
  ) {
    super(element, options);
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
