import { Util } from './util';
import { Scene, SceneOptions } from './scenes/scene';
import { Wrapped } from './decorators/wrapped.decorator';
import { Once } from './decorators/once.decorator';
import { Klass, RootKlassGuard } from './models/rootKlassGuard';

declare const VERSION: string;

export interface BalletOptions {
  optimizeResizing: boolean;
}

export class Ballet implements RootKlassGuard {

  rootKlass = Klass.Lib;

  private initialized = false;
  private ticking = false;
  private scrollListener?: (() => void);
  private resizeListener?: (() => void);

  private clientWidth: number;
  private clientHeight: number;

  protected scenes: Array<Scene<SceneOptions>>;

  constructor(
    scene: Array<Scene<SceneOptions>> | Scene<SceneOptions>,
    protected options?: BalletOptions,
  ) {
    if (Array.isArray(scene)) {
      this.scenes = scene;
    } else {
      this.scenes = [scene];
    }
    this.setDefaults();
    this.saveDisplaySize();
    this.init();
    this.tick();
  }

  @Once()
  protected setDefaults(): void {
    this.options = {
      ...this.defaults(),
      ...this.options,
    } as BalletOptions;
  }

  protected defaults(): BalletOptions {
    return {
      optimizeResizing: false,
    };
  }

  saveDisplaySize(): void {
    this.clientWidth = Util.clientWidth();
    this.clientHeight = Util.clientHeight();
  }

  isNeedResize(): boolean {
    if (this.options?.optimizeResizing) {
      if (Util.clientWidth() !== this.clientWidth || Util.clientHeight() !== this.clientHeight) {
        this.saveDisplaySize();
        return true;
      }

      return false;
    }

    return true;
  }

  tick(): void {
    if (!this.ticking) {
      window?.requestAnimationFrame(() => {
        this.render();
        this.ticking = false;
      });

      this.ticking = true;
    }
  }

  scroll(): void {
    this.tick();
  }

  resize(): void {
    if (this.isNeedResize()) {
      this.scenes.forEach(scene => scene.resize());
      this.tick();
    }
  }

  @Once()
  private init(): void {
    if (!this.initialized) {
      this.initialized = true;
      this.scrollListener = this.scroll.bind(this);
      window?.addEventListener('scroll', this.scrollListener!);
      this.resizeListener = this.resize.bind(this);
      window?.addEventListener('resize', this.resizeListener!);
      this.tick();
    } else {
      throw new Error('Ballet has already been initialized');
    }
  }

  stop(): void {
    if (this.initialized) {
      this.initialized = false;
      if (this.scrollListener !== undefined) {
        window?.removeEventListener('scroll', this.scrollListener);
      }
      if (this.resizeListener !== undefined) {
        window?.removeEventListener('resize', this.resizeListener);
      }
      this.scenes.forEach(scene => scene.turnOffScene());
    } else {
      throw new Error('Ballet hasn\'t yet been initialized');
    }
  }

  afterRender: () => void;
  beforeRender: () => void;
  @Wrapped({ before: 'beforeRender', after: 'afterRender' })
  render(): void {
    this.scenes.forEach(scene => scene.render());
  }

  static version(): string {
    return VERSION;
  }

}
