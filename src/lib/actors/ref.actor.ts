import { InitiableActor } from './initiable.actor';

export class RefActor extends InitiableActor {

  constructor(
    public override element: HTMLElement | undefined,
  ) {
    super();
  }

  override bindElement(): HTMLElement | undefined {
    return this.element;
  }

}
