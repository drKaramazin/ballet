import { MotionFixture } from '../motion.fixture';
import { TimeFrame, OpacityMotion } from '../../lib';
import { ChangeStage } from '../test-tools';

export class OpacityFixture extends MotionFixture {

  static timeFrame(): TimeFrame {
    return new TimeFrame(new OpacityMotion({
      start: () => 1,
      end: () => 0,
    }), (w, h) => h, (w, h) => 3 * h);
  };

  static changeOpacity = {
    timeFrame: OpacityFixture.timeFrame,
    stages: (): ChangeStage[] => {
      return [{
        scrollTo: this.stages()[0],
        opacity: { value: 1 },
      }, {
        scrollTo: this.stages()[1],
        opacity: { value: 1 },
      }, {
        scrollTo: this.stages()[2],
        opacity: { value: 1 },
      }, {
        scrollTo: this.stages()[3],
        opacity: { value: 1 },
      }, {
        scrollTo: this.stages()[4],
        opacity: { value: 1 },
      }, {
        scrollTo: this.stages()[5],
        opacity: { value: 1 },
      }, {
        scrollTo: this.stages()[6],
        opacity: { value: 1 },
      }, {
        scrollTo: this.stages()[7],
        opacity: { value: 1 / 4 * 3, margin: 0.05 },
      }, {
        scrollTo: this.stages()[8],
        opacity: { value: 1 / 2, margin: 0.05 },
      }, {
        scrollTo: this.stages()[9],
        opacity: { value: 1 / 4, margin: 0.05 },
      }, {
        scrollTo: this.stages()[10],
        opacity: { value: 0 },
      }, {
        scrollTo: this.stages()[11],
        opacity: { value: 0 },
      }, {
        scrollTo: this.stages()[12],
        opacity: { value: 0 },
      }, {
        scrollTo: this.stages()[13],
        opacity: { value: 0 },
      }, {
        scrollTo: this.stages()[14],
        opacity: { value: 0 },
      }, {
        scrollTo: this.stages()[15],
        opacity: { value: 0 },
      }, {
        scrollTo: this.stages()[16],
        opacity: { value: 0 },
      }];
    },
  };

}
