import { Actor, ActorOptions } from './actor';
import { ElementRecognition } from '../models/element-recognition';

/**
 * @deprecated since version 0.0.4
 */
export interface StaticActorOptions extends ActorOptions {
  initPosition?: boolean;
  initSize?: boolean;
  initOpacity?: boolean;
}

/**
 * @deprecated since version 0.0.4
 */
export class StaticActor extends Actor<StaticActorOptions> {

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

}
