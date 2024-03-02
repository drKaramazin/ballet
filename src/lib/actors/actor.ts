import { TimeFrame } from '../time-frame';
import { Scene } from '../scenes/scene';
import { Wrapped } from '../decorators/wrapped.decorator';
import { RenderingActorStrategy } from '../strategies/rendering-actor.strategy';
import { Util } from '../util';
import { ElementRecognition } from '../models/element-recognition';
import { Once } from '../decorators/once.decorator';
import { ElementHelper } from '../helpers/element.helper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ActorOptions {}

export abstract class Actor<Options extends ActorOptions> {

  public element?: HTMLElement;

  abstract bindElement(scrollPosOnFrame: number, scene: Scene<any>): HTMLElement | undefined;

  protected frames: TimeFrame[] = [];

  abstract findFirstMoveMotionFrame(): TimeFrame;

  constructor(
    element: ElementRecognition,
    public options?: Options,
  ) {
    this.recognizeElement(element);
  }

  @Once()
  private recognizeElement(element: ElementRecognition): void {
    this.element = ElementHelper.init(element);
  }

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

  addFrame(frame: TimeFrame | TimeFrame[]): void {
    if (Array.isArray(frame)) {
      this.frames = this.frames.concat(frame);
    } else {
      this.frames.push(frame);
    }
    this.renderActorStrategy.prerender(this.frames);
  }

  /**
   * @deprecated since version 0.0.4
   */
  addFrames(frames: TimeFrame[]): void {
    this.addFrame(frames);
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
