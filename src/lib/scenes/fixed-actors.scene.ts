import { Actor } from '../actors/actor';
import { Util } from '../util';
import { Scene, SceneOptions } from './scene';
import { MotionParams } from '../models/motion-params.model';

export class FixedActorsScene extends Scene<SceneOptions> {

  public override name = 'FixedActorsScene';

  protected platformHeight(deviceWidth: number, deviceHeight: number): number {
    return deviceHeight;
  }

  override resizeHeight(): void {
    if (this.checkResolution()) {
      this.element.style.height = `${this.height(Util.clientWidth(), Util.clientHeight())}px`;
    }
  }

  protected override turnOn(): void {
    this.element.style.position = 'relative';

    this.placeAllActors();
  }

  protected turnOff(): void {
    this.actors.forEach(actor => {
      actor.turnOff();
      actor.element?.style.removeProperty('position');
    });

    this.element.style.removeProperty('position');
  }

  protected placeActor(actor: Actor<any>): void {
    if (this.checkResolution()) {
      actor.element!.style.position = 'fixed';
      actor.initElement(this.elementY(), this);
    }
  }

  override interceptY(y: number, params: MotionParams): number {
    if (params.scrollPosOnScene < 0) {
      return y - params.scrollPosOnScene;
    }

    if (params.scrollPosOnScene > this.elementHeight() - this.platformHeightValue()) {
      return y - this.platformHeightValue() + this.elementHeight() + this.elementY();
    }

    return super.interceptY(y, params);
  }

}
