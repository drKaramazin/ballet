import { Actor } from '../actors/actor';
import { Util } from '../util';
import { MeasuringGrid } from '../measuring-grid';
import { MeasuringGridModel } from '../models/measuring-grid.model';
import { MotionParams } from '../models/motion-params.model';
import { Wrapped } from '../decorators/wrapped';
import { ResolutionModel } from '../models/resolution.model';

export interface SceneOptions {
  offset?: (deviceWidth: number, deviceHeight: number, sceneHeight: number) => number;
  measuringGrid?: MeasuringGridModel;
  checkResolution?: (resolution: ResolutionModel) => boolean;
}

export abstract class Scene<Options extends SceneOptions> {

  protected _actors: Actor[] = [];
  public abstract name: string;

  protected turnedOn = false;

  protected abstract turnOn(): void;
  protected abstract turnOff(): void;
  public abstract resizeHeight(): void;
  protected abstract platformHeight(deviceWidth: number, deviceHeight: number): number;
  protected abstract placeActor(actor: Actor): void;

  protected grid: MeasuringGrid;

  constructor(
    protected element: HTMLElement,
    protected height: (deviceWidth: number, deviceHeight: number) => number,
    protected options?: Options,
  ) {
    this.setDefaults();
    this.turnOnScene();
    this.resizeHeight();
    this.initMeasuringGrid();
    this.redrawMeasuringGrid();
  }

  protected setDefaults(): void {
    this.options = {
      ...this.defaults(),
      ...this.options,
    } as Options;
  }

  defaults(): SceneOptions {
    return {
      offset: () => 0,
      checkResolution: () => true,
    };
  }

  offset(): number {
    return this.options!.offset!(
      Util.clientWidth(),
      Util.clientHeight(),
      this.elementHeight(),
    );
  }

  initMeasuringGrid(): void {
    if (this.options?.measuringGrid) {
      this.grid = new MeasuringGrid(this.element, this.options.measuringGrid);
    }
  }

  elementY(): number {
    return this.element.getBoundingClientRect().y;
  }

  platformHeightValue(): number {
    return this.platformHeight(Util.clientWidth(), Util.clientHeight());
  }

  scrollPos(): number {
    return -this.elementY();
  }

  elementHeight(): number {
    return this.height(Util.clientWidth(), Util.clientHeight());
  }

  add(actor: Actor): void {
    this._actors.push(actor);
    this.placeActor(actor);
  }

  protected placeAllActors(): void {
    this.actors.forEach(actor => this.placeActor(actor));
  }

  get actors(): Actor[] {
    return this._actors;
  }

  public interceptY(y: number, params: MotionParams): number {
    return y;
  }

  public redrawMeasuringGrid(): void {
    if (this.grid) {
      this.grid.redrawMeasuringGrid();
    }
  }

  resize(): void {
    if (this.checkResolution()) {
      if (!this.turnedOn) {
        this.turnOnScene();
      }
      this.resizeHeight();
      this.redrawMeasuringGrid();
    } else if (this.turnedOn) {
      this.turnOffScene();
    }
  }

  afterRender: () => void;
  beforeRender: () => void;
  @Wrapped({ before: 'beforeRender', after: 'afterRender' })
  render(): void {
    if (this.checkResolution()) {
      for (const actor of this.actors) {
        actor.render(this.scrollPos(), this);
      }
    }
  }

  checkResolution(): boolean {
    return this.options!.checkResolution!({ viewportWidth: Util.viewportWidth(), viewportHeight: Util.viewportHeight() });
  }

  private turnOnScene(): void {
    if (!this.turnedOn && this.checkResolution()) {
      this.turnOn();
      this.turnedOn = true;
    }
  }

  turnOffScene(): void {
    if (this.turnedOn) {
      this.turnOff();
      this.turnedOn = false;
    }
  }

}
