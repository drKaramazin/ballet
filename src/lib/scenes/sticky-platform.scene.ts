import { Actor } from '../actors/actor';
import { Util } from '../util';
import { Scene, SceneOptions } from './scene';

export interface StickyPlatformSceneOptions extends SceneOptions {
  stickyPlatformHeight?: (deviceWidth: number, deviceHeight: number) => number;
}

export class StickyPlatformScene extends Scene<StickyPlatformSceneOptions> {

  public override name = 'StickyPlatformScene';

  public platform: HTMLElement;

  protected platformHeight(deviceWidth: number, deviceHeight: number): number {
    return this.options!.stickyPlatformHeight!(deviceWidth, deviceHeight);
  }

  override defaults(): StickyPlatformSceneOptions {
    return {
      ...super.defaults(),
      stickyPlatformHeight: (deviceWidth: number, deviceHeight: number) => deviceHeight,
    };
  }

  override resizeHeight(): void {
    if (this.checkResolution()) {
      this.element.style.height = `${this.height(Util.clientWidth(), Util.clientHeight())}px`;
      this.resizePlatform();
    }
  }

  resizePlatform(): void {
    this.platform.style.height = `${this.platformHeightValue()}px`;
  }

  protected override turnOn(): void {
    this.element.style.position = 'relative';
    this.element.style.overflow = 'visible';

    this.platform = document.createElement('div');
    this.platform.style.position = 'sticky';
    this.platform.style.top = '0';
    this.platform.style.left = '0';
    this.platform.style.width = '100%';
    this.platform.style.overflow = 'hidden';

    this.element.appendChild(this.platform);

    this.placeAllActors();
  }

  protected override turnOff(): void {
    this.actors.forEach(actor => {
      actor.turnOff();

      if (actor.element?.parentElement === this.platform) {
        this.element.appendChild(actor.element);
        actor.element?.style.removeProperty('position');
      }
    });

    this.platform.parentNode!.removeChild(this.platform);

    this.element.style.removeProperty('height');
    this.element.style.removeProperty('position');
    this.element.style.removeProperty('overflow');
  }

  protected placeActor(actor: Actor): void {
    if (this.checkResolution()) {
      if (this.element === actor.element?.parentElement) {
        this.platform.appendChild(actor.element);
        actor.element.style.position = 'absolute';
      }
      actor.initElement(this.elementY(), this);
    }
  }

}
