import { OrderChanges } from './order-changes.model';
import { DummyMotion } from './dummy.motion';
import { TimeFrame } from '../../lib';
import { ChangeStage } from '../test-tools';
import { FramesOrderFixture } from './frames-order.fixture';

export class SimpleOrderFixture {

  static changes(spy: jasmine.Spy): OrderChanges {
    const stages = FramesOrderFixture.stages();

    return {
      timeFrames: [
        (motion: DummyMotion) => new TimeFrame(
          motion,
          (w, h) => h,
          (w, h) => 3 * h,
        ),
      ],
      stages: (): ChangeStage[] => {
        return [{
          scrollTo: stages[0],
          toHaveBeenCalledTimes: [{
            spy,
            times: 1,
          }],
        }, {
          scrollTo: stages[1],
          toHaveBeenCalledTimes: [{
            spy,
            times: 2,
          }],
        }, {
          scrollTo: stages[2],
          toHaveBeenCalledTimes: [{
            spy,
            times: 3,
          }],
        }, {
          scrollTo: stages[3],
          toHaveBeenCalledTimes: [{
            spy,
            times: 4,
          }],
        }, {
          scrollTo: stages[4],
          toHaveBeenCalledTimes: [{
            spy,
            times: 5,
          }],
        }, {
          scrollTo: stages[5],
          toHaveBeenCalledTimes: [{
            spy,
            times: 6,
          }],
        }, {
          scrollTo: stages[6],
          toHaveBeenCalledTimes: [{
            spy,
            times: 7,
          }],
        }, {
          scrollTo: stages[7],
          toHaveBeenCalledTimes: [{
            spy,
            times: 8,
          }],
        }, {
          scrollTo: stages[8],
          toHaveBeenCalledTimes: [{
            spy,
            times: 9,
          }],
        }, {
          scrollTo: stages[9],
          toHaveBeenCalledTimes: [{
            spy,
            times: 10,
          }],
        }, {
          scrollTo: stages[10],
          toHaveBeenCalledTimes: [{
            spy,
            times: 11,
          }],
        }, {
          scrollTo: stages[11],
          toHaveBeenCalledTimes: [{
            spy,
            times: 12,
          }],
        }, {
          scrollTo: stages[12],
          toHaveBeenCalledTimes: [{
            spy,
            times: 13,
          }],
        }, {
          scrollTo: stages[13],
          toHaveBeenCalledTimes: [{
            spy,
            times: 14,
          }],
        }, {
          scrollTo: stages[14],
          toHaveBeenCalledTimes: [{
            spy,
            times: 15,
          }],
        }, {
          scrollTo: stages[15],
          toHaveBeenCalledTimes: [{
            spy,
            times: 16,
          }],
        }, {
          scrollTo: stages[16],
          toHaveBeenCalledTimes: [{
            spy,
            times: 17,
          }],
        }];
      },
    };
  };

}
