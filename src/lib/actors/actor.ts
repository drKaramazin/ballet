import { TimeFrame } from '../time-frame';
import { Scene, SceneOptions } from '../scenes/scene';
import { Wrapped } from '../decorators/wrapped.decorator';
import { RenderingActorStrategy } from '../strategies/rendering-actor.strategy';
import { Util } from '../util';
import { ElementRecognition } from '../models/element-recognition';
import { Once } from '../decorators/once.decorator';
import { ElementHelper } from '../helpers/element.helper';
import { Klass, RootKlassGuard } from '../models/rootKlassGuard';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ActorOptions {}

export class Actor<Options extends ActorOptions> implements RootKlassGuard {

  rootKlass = Klass.Actor;

  public element?: HTMLElement;
  protected frames: TimeFrame[] = [];

  renderActorStrategy = new RenderingActorStrategy();

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

  bindElement(scrollPosOnScene: number, scene: Scene<SceneOptions>): void {}

  beforeRender: () => void;
  afterRender: () => void;
  @Wrapped({ before: 'beforeRender', after: 'afterRender' })
  render(scrollPosOnScene: number, scene: Scene<SceneOptions>): void {
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

  add(frame: TimeFrame | TimeFrame[]): void {
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
  addFrame(frame: TimeFrame | TimeFrame[]): void {
    this.add(frame);
  }

  /**
   * @deprecated since version 0.0.4
   */
  addFrames(frames: TimeFrame[]): void {
    this.add(frames);
  }

  afterBindElement(): void {}
  @Wrapped({ after: 'afterBindElement' })
  initElement(scrollPosOnScene: number, scene: Scene<SceneOptions>): void {
    this.bindElement(scrollPosOnScene, scene);
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
