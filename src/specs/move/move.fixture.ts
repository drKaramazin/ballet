import { MotionFixture } from '../motion.fixture';
import { TimeFrame, MoveMotion, Util } from '../../lib';
import { ChangeStage } from '../test-tools';

export abstract class MoveFixture extends MotionFixture {

  static changeXTimeFrame(): TimeFrame {
    return new TimeFrame(new MoveMotion({
      startX: () => 0,
      startY: () => 0,
      endX: (w: number) => w - MotionFixture.block.width,
      endY: () => 0,
    }), (w: number, h: number) => h, (w: number, h: number) => 3 * h);
  };

  static changeYTimeFrame(): TimeFrame {
    return new TimeFrame(new MoveMotion({
      startX: () => 0,
      startY: () => 0,
      endX: () => 0,
      endY: (w: number, h: number) => h - MotionFixture.block.height,
    }), (w: number, h: number) => h, (w: number, h: number) => 3 * h);
  }

  static changeXYTimeFrame(): TimeFrame {
    return new TimeFrame(new MoveMotion({
      startX: () => 0,
      startY: () => 0,
      endX: (w: number) => w - MotionFixture.block.width,
      endY: (w: number, h: number) => h - MotionFixture.block.height,
    }), (w: number, h: number) => h, (w: number, h: number) => 3 * h);
  }

  static changeX = {
    timeFrame: MoveFixture.changeXTimeFrame,
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
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[5],
        coords: {
          x: { value: 0 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[6],
        coords: {
          x: { value: 0 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[7],
        coords: {
          x: { value: Math.round((Util.clientWidth() - MoveFixture.block.width) / 4), margin: 1 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[8],
        coords: {
          x: { value: Math.round((Util.clientWidth() - MoveFixture.block.width) / 2), margin: 1 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[9],
        coords: {
          x: { value: Math.round((Util.clientWidth() - MoveFixture.block.width) / 4) * 3, margin: 1 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[10],
        coords: {
          x: { value: Util.clientWidth() - MoveFixture.block.width },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[11],
        coords: {
          x: { value: Util.clientWidth() - MoveFixture.block.width },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[12],
        coords: {
          x: { value: Util.clientWidth() - MoveFixture.block.width },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[13],
        coords: {
          x: { value: Util.clientWidth() - MoveFixture.block.width },
          y: { value: -Util.clientHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[14],
        coords: {
          x: { value: Util.clientWidth() - MoveFixture.block.width },
          y: { value: -Util.clientHeight() },
        },
      }, {
        scrollTo: this.stages()[15],
        coords: {
          x: { value: Util.clientWidth() - MoveFixture.block.width },
          y: { value: -Util.innerHeight() / 2 - Util.clientHeight(), margin: 1 },
        },
      }, {
        scrollTo: this.stages()[16],
        coords: {
          x: { value: Util.clientWidth() - MoveFixture.block.width },
          y: { value: -Util.innerHeight() - Util.clientHeight() },
        },
      }];
    },
  };

  static changeY = {
    timeFrame: MoveFixture.changeYTimeFrame,
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
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[5],
        coords: {
          x: { value: 0 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[6],
        coords: {
          x: { value: 0 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[7],
        coords: {
          x: { value: 0 },
          y: { value: Math.round((Util.clientHeight() - MoveFixture.block.height) / 4), margin: 1 },
        },
      }, {
        scrollTo: this.stages()[8],
        coords: {
          x: { value: 0 },
          y: { value: Math.round((Util.clientHeight() - MoveFixture.block.height) / 2), margin: 1 },
        },
      }, {
        scrollTo: this.stages()[9],
        coords: {
          x: { value: 0 },
          y: { value: Math.round((Util.clientHeight() - MoveFixture.block.height) / 4) * 3, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[10],
        coords: {
          x: { value: 0 },
          y: { value: Util.clientHeight() - MoveFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[11],
        coords: {
          x: { value: 0 },
          y: { value: Util.clientHeight() - MoveFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[12],
        coords: {
          x: { value: 0 },
          y: { value: Util.clientHeight() - MoveFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[13],
        coords: {
          x: { value: 0 },
          y: { value: Util.clientHeight() / 2 - MoveFixture.block.height, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[14],
        coords: {
          x: { value: 0 },
          y: { value: -MoveFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[15],
        coords: {
          x: { value: 0 },
          y: { value: -(Util.innerHeight() / 2) - MoveFixture.block.height, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[16],
        coords: {
          x: { value: 0 },
          y: { value: -Util.innerHeight() - MoveFixture.block.height },
        },
      }];
    },
  };

  static changeXY = {
    timeFrame: MoveFixture.changeXYTimeFrame,
    stages: (): ChangeStage[] => {
      const stagesX = this.changeX.stages();
      const stagesY = this.changeY.stages();
      return stagesX.map((stage, index) => ({
        scrollTo: stagesX[index].scrollTo,
        coords: {
          x: stagesX[index].coords!.x,
          y: stagesY[index].coords!.y,
        },
      }));
    },
  };

}
