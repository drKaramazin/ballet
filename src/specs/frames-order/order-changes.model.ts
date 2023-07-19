import { Motion, TimeFrame } from '../../lib';
import { ChangeStage } from '../test-tools';

export interface OrderChanges {
  timeFrames: Array<(motion: Motion) => TimeFrame>;
  stages: () => ChangeStage[];
}
