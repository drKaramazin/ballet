import { WindowSizesModel } from './models/window-sizes.model';
import { MotionParams } from './models/motion-params.model';
import { TimeFrame } from './time-frame';
import { Scene } from './scenes/scene';

export class Util {

  static castToInt(num: number): number {
    return Math.round(num);
  }

  /**
   * @returns The interior width of the browser window in pixels. This doesn't include the width of the vertical scrollbar.
   */
  static clientWidth(): number {
    return document.documentElement.clientWidth;
  }

  /**
   * @returns The interior height of the browser window in pixels. This doesn't include the height of the horizontal scrollbar.
   */
  static clientHeight(): number {
    return document.documentElement.clientHeight;
  }

  /**
   * @returns The interior width of the browser window in pixels. This includes the width of the vertical scrollbar, if one is present.
   */
  static innerWidth(): number {
    return window.innerWidth;
  }

  /**
   * @returns The interior height of the browser window in pixels. This includes the height of the horizontal scrollbar, if one is present.
   */
  static innerHeight(): number {
    return window.innerHeight;
  }

  /**
   * @returns Full document height, with scrolled out part in pixels.
   */
  static documentHeight(): number {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight,
    );
  }

  static prepareMotionParams(scrollPosOnScene: number, element: HTMLElement, frame: TimeFrame, scene: Scene<any>): MotionParams {
    const scrollPosOnFrame = scrollPosOnScene - frame.getStartPos();
    const delta = (scrollPosOnFrame - scene.offset()) / frame.length();

    return {
      scrollPosOnScene,
      scrollPosOnFrame,
      delta,
      element,
      frame,
      scene,
    };
  }

  static windowSizes(): WindowSizesModel {
    return {
      clientWidth: this.clientWidth(),
      clientHeight: this.clientHeight(),
      innerWidth: this.innerWidth(),
      innerHeight: this.innerHeight(),
      documentHeight: this.documentHeight(),
    };
  }

  static logWindowSizes(): void {
    console.log('Window size:');
    if (typeof document !== 'undefined') {
      console.log('document.documentElement.clientWidth, clientHeight', document.documentElement.clientWidth, document.documentElement.clientHeight);
      console.log('document.documentElement.scrollWidth, scrollHeight', document.documentElement.scrollWidth, document.documentElement.scrollHeight);
      console.log('document.body.scrollWidth, scrollHeight', document.body.scrollWidth, document.body.scrollHeight);
      console.log('document.body.offsetWidth, offsetHeight', document.body.offsetWidth, document.body.offsetHeight);
      console.log('document.documentElement.offsetWidth, offsetHeight', document.documentElement.offsetWidth, document.documentElement.offsetHeight);
      console.log('document.body.clientWidth, clientHeight', document.body.clientWidth, document.body.clientHeight);
    } else {
      console.log('document is not defined');
    }
    if (typeof window !== 'undefined') {
      console.log('window.innerWidth, innerHeight', window.innerWidth, window.innerHeight);
    } else {
      console.log('window is not defined');
    }
  }

}
