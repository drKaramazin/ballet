import { TimeFrame } from '../time-frame';
import { Scene, SceneOptions } from '../scenes/scene';

export interface MotionParams {
  scrollPosOnScene: number;
  scrollPosOnFrame: number;
  delta: number;
  element: HTMLElement;
  frame: TimeFrame;
  scene: Scene<SceneOptions>;
}
