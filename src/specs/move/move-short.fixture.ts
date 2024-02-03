import { MoveMotion, TimeFrame, Util } from '../../lib';
import { ChangeStage } from '../test-tools';
import { MotionShortFixture } from '../motion-short.fixture';

export abstract class MoveShortFixture extends MotionShortFixture {

  static changeXTimeFrame(): TimeFrame {
    return new TimeFrame(new MoveMotion({
      startX: () => 0,
      startY: () => 0,
      endX: (w: number) => w - MoveShortFixture.block.width,
      endY: () => 0,
    }), () => 0, (w: number, h: number) => 2 * h);
  };

  static changeYTimeFrame(): TimeFrame {
    return new TimeFrame(new MoveMotion({
      startX: () => 0,
      startY: () => 0,
      endX: () => 0,
      endY: (w: number, h: number) => h - MoveShortFixture.block.height,
    }), () => 0, (w: number, h: number) => 2 * h);
  }

  static changeXYTimeFrame(): TimeFrame {
    return new TimeFrame(new MoveMotion({
      startX: () => 0,
      startY: () => 0,
      endX: (w: number) => w - MoveShortFixture.block.width,
      endY: (w: number, h: number) => h - MoveShortFixture.block.height,
    }), () => 0, (w: number, h: number) => 2 * h);
  }

  static changeX = {
    timeFrame: this.changeXTimeFrame,
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
          x: { value: Math.round((Util.clientWidth() - this.block.width) / 4), margin: 1 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[6],
        coords: {
          x: { value: Math.round((Util.clientWidth() - this.block.width) / 2), margin: 1 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[7],
        coords: {
          x: { value: Math.round((Util.clientWidth() - this.block.width) / 4) * 3, margin: 1 },
          y: { value: -Util.clientHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[8],
        coords: {
          x: { value: Util.clientWidth() - this.block.width },
          y: { value: -Util.clientHeight() },
        },
      }, {
        scrollTo: this.stages()[9],
        coords: {
          x: { value: Util.clientWidth() - this.block.width },
          y: { value: -Util.clientHeight() - Util.innerHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[10],
        coords: {
          x: { value: Util.clientWidth() - this.block.width },
          y: { value: -Util.clientHeight() - Util.innerHeight() },
        },
      }];
    },
  };

  static changeY = {
    timeFrame: this.changeYTimeFrame,
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
          y: { value: Math.round((Util.clientHeight() - this.block.height) / 4), margin: 1 },
        },
      }, {
        scrollTo: this.stages()[6],
        coords: {
          x: { value: 0 },
          y: { value: Math.round((Util.clientHeight() - this.block.height) / 2), margin: 1 },
        },
      }, {
        scrollTo: this.stages()[7],
        coords: {
          x: { value: 0 },
          y: { value: Math.round(Util.clientHeight() / 4) - this.block.height, margin: 3 },
        },
      }, {
        scrollTo: this.stages()[8],
        coords: {
          x: { value: 0 },
          y: { value: -this.block.height },
        },
      }, {
        scrollTo: this.stages()[9],
        coords: {
          x: { value: 0 },
          y: { value: -(Util.innerHeight() / 2) - this.block.height, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[10],
        coords: {
          x: { value: 0 },
          y: { value: -Util.innerHeight() - this.block.height },
        },
      }];
    },
  };

  static changeXY = {
    timeFrame: this.changeXYTimeFrame,
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
