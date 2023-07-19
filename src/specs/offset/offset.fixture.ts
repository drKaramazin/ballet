import { ChangeStage } from '../test-tools';
import { Util } from '../../lib';
import { MoveFixture } from '../move/move.fixture';
import { MotionFixture } from '../motion.fixture';

export class OffsetFixture extends MotionFixture {

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
          x: { value: Math.round((Util.clientWidth() - MoveFixture.block.width) / 4), margin: 1 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[7],
        coords: {
          x: { value: Math.round((Util.clientWidth() - MoveFixture.block.width) / 2), margin: 1 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[8],
        coords: {
          x: { value: Math.round((Util.clientWidth() - MoveFixture.block.width) / 4) * 3, margin: 1 },
          y: { value: 0 },
        },
      }, {
        scrollTo: this.stages()[9],
        coords: {
          x: { value: Util.clientWidth() - MoveFixture.block.width },
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
          y: { value: Math.round((Util.clientHeight() - MoveFixture.block.height) / 4), margin: 1 },
        },
      }, {
        scrollTo: this.stages()[7],
        coords: {
          x: { value: 0 },
          y: { value: Math.round((Util.clientHeight() - MoveFixture.block.height) / 2), margin: 1 },
        },
      }, {
        scrollTo: this.stages()[8],
        coords: {
          x: { value: 0 },
          y: { value: Math.round((Util.clientHeight() - MoveFixture.block.height) / 4) * 3, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[9],
        coords: {
          x: { value: 0 },
          y: { value: Util.clientHeight() - MoveFixture.block.height },
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
