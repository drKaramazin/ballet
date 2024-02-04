import { TimeFrame } from '../time-frame';
import { Scene } from '../scenes/scene';
import { Wrapped } from '../decorators/wrapped';
import { RenderingActorStrategy } from '../strategies/rendering-actor.strategy';
import { Util } from '../util';

export abstract class Actor {

  public element?: HTMLElement;
  abstract bindElement(scrollPosOnFrame: number, scene: Scene<any>): HTMLElement | undefined;

  protected frames: TimeFrame[] = [];

  abstract findFirstMoveMotionFrame(): TimeFrame;

  afterBindElement(): void {}

  renderActorStrategy = new RenderingActorStrategy();

  beforeRender: () => void;
  afterRender: () => void;
  @Wrapped({ before: 'beforeRender', after: 'afterRender' })
  render(scrollPosOnScene: number, scene: Scene<any>): void {
    if (this.element) {
      const frames = this.renderActorStrategy.takeRenderFrame(scrollPosOnScene);
      frames.forEach(frame => frame.motion.make(Util.prepareMotionParams(
        scrollPosOnScene,
        this.element!,
        frame,
        scene,
      )));
    } else {
      throw new Error('Here isn\'t an element');
    }
  }

  addFrame(frame: TimeFrame): void {
    this.addFrames([frame]);
  }

  addFrames(frames: TimeFrame[]): void {
    this.frames = this.frames.concat(frames);
    this.renderActorStrategy.prerender(this.frames);
  }

  initElement(scrollPosOnScene: number, scene: Scene<any>): void {
    this.element = this.bindElement(scrollPosOnScene, scene);
    this.afterBindElement();
  }

  turnOff(): void {
    this.frames.forEach(frame => {
      if (this.element) {
        frame.motion.turnOff(this.element);
      }
    });
  }

}
