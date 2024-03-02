import { InitiableActor } from './initiable.actor';
import { ActorOptions } from './actor';

export class RefActor extends InitiableActor<ActorOptions> {

  override bindElement(): HTMLElement | undefined {
    return this.element;
  }

}
