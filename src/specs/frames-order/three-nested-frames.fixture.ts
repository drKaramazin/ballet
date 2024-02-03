import { OrderChanges } from './order-changes.model';
import { FramesOrderFixture } from './frames-order.fixture';
import { DummyMotion } from './dummy.motion';
import { TimeFrame } from '../../lib';
import { ChangeStage } from '../test-tools';

export class ThreeNestedFramesFixture {

  static directChanges(spyOne: jasmine.Spy, spyTwo: jasmine.Spy, spyThree: jasmine.Spy): OrderChanges {
    const stages = FramesOrderFixture.stages();

    return {
      timeFrames: [
        (motion: DummyMotion) => new TimeFrame(
          motion,
          (w, h) => h,
          (w, h) => 4 * h,
        ),
        (motion: DummyMotion) => new TimeFrame(
          motion,
          (w, h) => 2 * h,
          (w, h) => 4 * h,
        ),
        (motion: DummyMotion) => new TimeFrame(
          motion,
          (w, h) => 3 * h,
          (w, h) => 4 * h,
        ),
      ],
      stages: (): ChangeStage[] => {
        return [{
          scrollTo: stages[0],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 1,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[1],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 2,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[2],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 3,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[3],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 4,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[4],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 5,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[5],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 6,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[6],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 7,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[7],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 8,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[8],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 8,
          }, {
            spy: spyTwo,
            times: 1,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[9],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 8,
          }, {
            spy: spyTwo,
            times: 2,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[10],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 8,
          }, {
            spy: spyTwo,
            times: 2,
          }, {
            spy: spyThree,
            times: 1,
          }],
        }, {
          scrollTo: stages[11],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 8,
          }, {
            spy: spyTwo,
            times: 2,
          }, {
            spy: spyThree,
            times: 2,
          }],
        }, {
          scrollTo: stages[12],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 8,
          }, {
            spy: spyTwo,
            times: 2,
          }, {
            spy: spyThree,
            times: 3,
          }],
        }, {
          scrollTo: stages[13],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 8,
          }, {
            spy: spyTwo,
            times: 2,
          }, {
            spy: spyThree,
            times: 4,
          }],
        }, {
          scrollTo: stages[14],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 8,
          }, {
            spy: spyTwo,
            times: 2,
          }, {
            spy: spyThree,
            times: 5,
          }],
        }, {
          scrollTo: stages[15],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 8,
          }, {
            spy: spyTwo,
            times: 2,
          }, {
            spy: spyThree,
            times: 6,
          }],
        }, {
          scrollTo: stages[16],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 8,
          }, {
            spy: spyTwo,
            times: 2,
          }, {
            spy: spyThree,
            times: 7,
          }],
        }];
      },
    };
  }

  static reverseChanges(spyOne: jasmine.Spy, spyTwo: jasmine.Spy, spyThree: jasmine.Spy): OrderChanges {
    const stages = FramesOrderFixture.stages();

    return {
      timeFrames: [
        (motion: DummyMotion) => new TimeFrame(
          motion,
          (w, h) => h,
          (w, h) => 4 * h,
        ),
        (motion: DummyMotion) => new TimeFrame(
          motion,
          (w, h) => h,
          (w, h) => 3 * h,
        ),
        (motion: DummyMotion) => new TimeFrame(
          motion,
          (w, h) => h,
          (w, h) => 2 * h,
        ),
      ],
      stages: (): ChangeStage[] => {
        return [{
          scrollTo: stages[0],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 1,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[1],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 2,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[2],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 3,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[3],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 4,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[4],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 5,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[5],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 6,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[6],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 7,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[7],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 8,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[8],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 9,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[9],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 10,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[10],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 11,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[11],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 12,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[12],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 13,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[13],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 14,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[14],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 15,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[15],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 16,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }, {
          scrollTo: stages[16],
          toHaveBeenCalledTimes: [{
            spy: spyOne,
            times: 17,
          }, {
            spy: spyTwo,
            times: 0,
          }, {
            spy: spyThree,
            times: 0,
          }],
        }];
      },
    };
  }

}
