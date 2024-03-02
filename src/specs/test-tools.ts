import { Actor } from '../lib/actors/actor';
import { TestStage } from './motion.fixture';
import { DocsSpecsGlobalEnv } from './docs-specs-global-env';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      approximatelyEqualTo(expected: number, margin: number): boolean;
    }
  }
}

export type StageContextFn = (stage: number, label?: string) => string;
export const DefaultContextFn: StageContextFn = (stage: number, label?: string) => `stage ${stage}` + (label ? ` (${label})` : '');
export interface StageValue {
  value: number;
  withContext?: StageContextFn;
  margin?: number;
}

export interface ChangeStage {
  scrollTo: TestStage;
  coords?: {
    x: StageValue;
    y: StageValue;
  };
  size?: {
    width: StageValue;
    height: StageValue;
  };
  opacity?: StageValue;
  toHaveBeenCalledTimes?: Array<{
    spy: jasmine.Spy;
    times: number;
  }>;
}

export class TestTools {

  static testGoingStages(block: Actor<any>, blockElement: HTMLElement, stages: ChangeStage[]): Promise<void> {
    if (typeof window !== 'undefined' && (window as DocsSpecsGlobalEnv).skipTesting) {
      return Promise.resolve();
    }

    let promise: Promise<void> = Promise.resolve();

    for (let i = 0; i < stages.length; i++) {
      const stage = stages[i];
      promise = promise.then(() => {
        return new Promise(resolve => {
          block.afterRender = () => {
            if (stage.coords) {
              const contextX = stage.coords.x.withContext ? stage.coords.x.withContext(i, 'x') : DefaultContextFn(i, 'x');
              const contextY = stage.coords.y.withContext ? stage.coords.y.withContext(i, 'y') : DefaultContextFn(i, 'y');

              if (stage.coords.x.margin) {
                expect(blockElement.getBoundingClientRect().x)
                  .withContext(contextX)
                  .approximatelyEqualTo(stage.coords.x.value, stage.coords.x.margin);
              } else {
                expect(blockElement.getBoundingClientRect().x)
                  .withContext(contextX)
                  .toEqual(stage.coords.x.value);
              }

              if (stage.coords.y.margin) {
                expect(blockElement.getBoundingClientRect().y)
                  .withContext(contextY)
                  .approximatelyEqualTo(stage.coords.y.value, stage.coords.y.margin);
              } else {
                expect(blockElement.getBoundingClientRect().y)
                  .withContext(contextY)
                  .toEqual(stage.coords.y.value);
              }
            }

            if (stage.size) {
              const contextWidth = stage.size.width.withContext ? stage.size.width.withContext(i, 'width') : DefaultContextFn(i, 'width');
              const contextHeight = stage.size.height.withContext ? stage.size.height.withContext(i, 'height') : DefaultContextFn(i, 'height');

              if (stage.size.width.margin) {
                expect(blockElement.clientWidth)
                  .withContext(contextWidth)
                  .approximatelyEqualTo(stage.size.width.value, stage.size.width.margin);
              } else {
                expect(blockElement.clientWidth)
                  .withContext(contextWidth)
                  .toEqual(stage.size.width.value);
              }

              if (stage.size.height.margin) {
                expect(blockElement.clientHeight)
                  .withContext(contextHeight)
                  .approximatelyEqualTo(stage.size.height.value, stage.size.height.margin);
              } else {
                expect(blockElement.clientHeight)
                  .withContext(contextHeight)
                  .toEqual(stage.size.height.value);
              }
            }

            if (stage.opacity) {
              const context = stage.opacity.withContext ? stage.opacity.withContext(i) : DefaultContextFn(i);
              const actualOpacity = parseFloat(window.getComputedStyle(blockElement).getPropertyValue('opacity'));
              if (stage.opacity.margin) {
                expect(actualOpacity)
                  .withContext(context)
                  .approximatelyEqualTo(stage.opacity.value, stage.opacity.margin);
              } else {
                expect(actualOpacity)
                  .withContext(context)
                  .toEqual(stage.opacity.value);
              }
            }

            if (stage.toHaveBeenCalledTimes) {
              const context = DefaultContextFn(i);
              for (const spyItem of stage.toHaveBeenCalledTimes) {
                expect(spyItem.spy)
                  .withContext(context)
                  .toHaveBeenCalledTimes(spyItem.times);
              }
            }

            resolve();
          };

          window.scrollTo(stage.scrollTo.x, stage.scrollTo.y);
        });
      });
    }

    return promise;
  }

}
