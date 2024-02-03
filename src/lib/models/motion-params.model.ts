import { TimeFrame } from '../time-frame';
import { Scene } from '../scenes/scene';

export interface MotionParams {
  scrollPosOnScene: number;
  scrollPosOnFrame: number;
  delta: number;
  element: HTMLElement;
  frame: TimeFrame;
  scene: Scene<any>;
}
