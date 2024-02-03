import { MotionFixture } from '../motion.fixture';
import { ChangeStage } from '../test-tools';
import { TimeFrame, SizeMotion, Util } from '../../lib';

export class SizeFixture extends MotionFixture {

  static changeWidthTimeFrame(): TimeFrame {
    return new TimeFrame(new SizeMotion({
      startWidth: () => MotionFixture.block.width,
      startHeight: () => MotionFixture.block.height,
      endWidth: (w) => w / 2,
      endHeight: () => MotionFixture.block.height,
    }), (w, h) => h, (w, h) => 3 * h);
  };

  static changeHeightTimeFrame(): TimeFrame {
    return new TimeFrame(new SizeMotion({
      startWidth: () => MotionFixture.block.width,
      startHeight: () => MotionFixture.block.height,
      endWidth: () => MotionFixture.block.width,
      endHeight: (w, h) => h / 2,
    }), (w, h) => h, (w, h) => 3 * h);
  };

  static changeWidthHeightTimeFrame(): TimeFrame {
    return new TimeFrame(new SizeMotion({
      startWidth: () => MotionFixture.block.width,
      startHeight: () => MotionFixture.block.height,
      endWidth: (w) => w / 2,
      endHeight: (w, h) => h / 2,
    }), (w, h) => h, (w, h) => 3 * h);
  };

  static changeWidth = {
    timeFrame: SizeFixture.changeWidthTimeFrame,
    stages: (): ChangeStage[] => {
      return [{
        scrollTo: this.stages()[0],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[1],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[2],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[3],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[4],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[5],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[6],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[7],
        size: {
          width: { value: MotionFixture.block.width + (Util.clientWidth() / 2 - MotionFixture.block.width) / 4, margin: 1 },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[8],
        size: {
          width: { value: MotionFixture.block.width + (Util.clientWidth() / 2 - MotionFixture.block.width) / 2, margin: 1 },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[9],
        size: {
          width: { value: MotionFixture.block.width + (Util.clientWidth() / 2 - MotionFixture.block.width) / 4 * 3, margin: 1 },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[10],
        size: {
          width: { value: Util.clientWidth() / 2, margin: 1 },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[11],
        size: {
          width: { value: Util.clientWidth() / 2, margin: 1 },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[12],
        size: {
          width: { value: Util.clientWidth() / 2, margin: 1 },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[13],
        size: {
          width: { value: Util.clientWidth() / 2, margin: 1 },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[14],
        size: {
          width: { value: Util.clientWidth() / 2, margin: 1 },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[15],
        size: {
          width: { value: Util.clientWidth() / 2, margin: 1 },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[16],
        size: {
          width: { value: Util.clientWidth() / 2, margin: 1 },
          height: { value: MotionFixture.block.height },
        },
      }];
    },
  };

  static changeHeight = {
    timeFrame: SizeFixture.changeHeightTimeFrame,
    stages: (): ChangeStage[] => {
      return [{
        scrollTo: this.stages()[0],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[1],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[2],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[3],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[4],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[5],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[6],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height },
        },
      }, {
        scrollTo: this.stages()[7],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height + (Util.clientHeight() / 2 - MotionFixture.block.height) / 4, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[8],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height + (Util.clientHeight() / 2 - MotionFixture.block.height) / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[9],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: MotionFixture.block.height + (Util.clientHeight() / 2 - MotionFixture.block.height) / 4 * 3, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[10],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: Util.clientHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[11],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: Util.clientHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[12],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: Util.clientHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[13],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: Util.clientHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[14],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: Util.clientHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[15],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: Util.clientHeight() / 2, margin: 1 },
        },
      }, {
        scrollTo: this.stages()[16],
        size: {
          width: { value: MotionFixture.block.width },
          height: { value: Util.clientHeight() / 2, margin: 1 },
        },
      }];
    },
  };

  static changeWidthHeight = {
    timeFrame: SizeFixture.changeWidthHeightTimeFrame,
    stages: (): ChangeStage[] => {
      return this.changeWidth.stages().map((stage, index) => ({
        scrollTo: this.changeWidth.stages()[index].scrollTo,
        size: {
          width: this.changeWidth.stages()[index].size!.width,
          height: this.changeHeight.stages()[index].size!.height,
        },
      }));
    },
  };

}
