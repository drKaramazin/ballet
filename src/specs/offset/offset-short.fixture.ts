import { ChangeStage } from '../test-tools';
import { MoveMotion, TimeFrame, Util } from '../../lib';
import { MoveFixture } from '../move/move.fixture';
import { MotionFixture } from '../motion.fixture';
import { MotionShortFixture } from '../motion-short.fixture';

export class OffsetShortFixture extends MotionShortFixture {

  static changeX = {
    timeFrame: () => new TimeFrame(new MoveMotion({
      startX: () => 0,
      startY: () => 0,
      endX: (w: number) => w - MotionFixture.block.width,
      endY: () => 0,
    }), () => 0, (w: number, h: number) => 2 * h),
    stages: (): ChangeStage[] => {
      return [{
        scrollTo: this.stages()[0],
        coords: {
          x: { value: 0 },
          y: { value: 2 * Util.innerHeight() },
        },
      }, {
        scrollTo: this.stages()[1],
        coords: {
          x: { value: 0 },
          y: { value: Util.innerHeight() + Util.innerHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[2],
        coords: {
          x: { value: 0 },
          y: { value: Util.innerHeight() },
        },
      }, {
        scrollTo: this.stages()[3],
        coords: {
          x: { value: 0 },
          y: { value: Util.innerHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[4],
        coords: {
          x: { value: Math.round((Util.clientWidth() - MoveFixture.block.width) / 4), margin: 1 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[5],
        coords: {
          x: { value: Math.round((Util.clientWidth() - MoveFixture.block.width) / 2), margin: 1 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[6],
        coords: {
          x: { value: Math.round((Util.clientWidth() - MoveFixture.block.width) / 4) * 3, margin: 1 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[7],
        coords: {
          x: { value: Util.clientWidth() - MoveFixture.block.width },
          y: { value: -Util.clientHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[8],
        coords: {
          x: { value: Util.clientWidth() - MoveFixture.block.width },
          y: { value: -Util.clientHeight() },
        },
      }, {
        scrollTo: this.stages()[9],
        coords: {
          x: { value: Util.clientWidth() - MoveFixture.block.width },
          y: { value: -Util.clientHeight() - Util.innerHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[10],
        coords: {
          x: { value: Util.clientWidth() - MoveFixture.block.width },
          y: { value: -Util.clientHeight() - Util.innerHeight() },
        },
      }];
    },
  };

  static changeY = {
    timeFrame: () => new TimeFrame(new MoveMotion({
      startX: () => 0,
      startY: () => 0,
      endX: () => 0,
      endY: (w: number, h: number) => h - MotionFixture.block.height,
    }), () => 0, (w: number, h: number) => 2 * h),
    stages: (): ChangeStage[] => {
      return [{
        scrollTo: this.stages()[0],
        coords: {
          x: { value: 0 },
          y: { value: 2 * Util.innerHeight() },
        },
      }, {
        scrollTo: this.stages()[1],
        coords: {
          x: { value: 0 },
          y: { value: Util.innerHeight() + Util.innerHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[2],
        coords: {
          x: { value: 0 },
          y: { value: Util.innerHeight() },
        },
      }, {
        scrollTo: this.stages()[3],
        coords: {
          x: { value: 0 },
          y: { value: Util.innerHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[4],
        coords: {
          x: { value: 0 },
          y: { value: Math.round((Util.clientHeight() - MoveFixture.block.height) / 4), margin: 1 },
        },
      }, {
        scrollTo: this.stages()[5],
        coords: {
          x: { value: 0 },
          y: { value: Math.round((Util.clientHeight() - MoveFixture.block.height) / 2), margin: 1 },
        },
      }, {
        scrollTo: this.stages()[6],
        coords: {
          x: { value: 0 },
          y: { value: Math.round((Util.clientHeight() - MoveFixture.block.height) / 4) * 3, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[7],
        coords: {
          x: { value: 0 },
          y: { value: Util.clientHeight() / 2 - MoveFixture.block.height, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[8],
        coords: {
          x: { value: 0 },
          y: { value: -MoveFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[9],
        coords: {
          x: { value: 0 },
          y: { value: -(Util.innerHeight() / 2) - MoveFixture.block.height, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[10],
        coords: {
          x: { value: 0 },
          y: { value: -Util.innerHeight() - MoveFixture.block.height },
        },
      }];
    },
  };

  static changeXY = {
    timeFrame: () => new TimeFrame(new MoveMotion({
      startX: () => 0,
      startY: () => 0,
      endX: (w: number) => w - MotionFixture.block.width,
      endY: (w: number, h: number) => h - MotionFixture.block.height,
    }), () => 0, (w: number, h: number) => 2 * h),
    stages: (): ChangeStage[] => {
      return this.changeX.stages().map((stage, index) => ({
        scrollTo: this.changeX.stages()[index].scrollTo,
        coords: {
          x: this.changeX.stages()[index].coords!.x,
          y: this.changeY.stages()[index].coords!.y,
        },
      }));
    },
  };

}
