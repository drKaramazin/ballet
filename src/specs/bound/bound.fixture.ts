import { MotionFixture } from '../motion.fixture';
import { TimeFrame, BoundMotion } from '../../lib';
import { ChangeStage } from '../test-tools';

export class BoundFixture extends MotionFixture {

  static timeFrame(): TimeFrame {
    return new TimeFrame(new BoundMotion({
      before: () => ({ opacity: '1' }),
      after: () => ({ opacity: '0.3' }),
    }), (w, h) => h, (w, h) => h);
  };

  static changes = {
    timeFrame: BoundFixture.timeFrame,
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
        opacity: { value: 0.3 },
      }, {
        scrollTo: this.stages()[7],
        opacity: { value: 0.3 },
      }, {
        scrollTo: this.stages()[8],
        opacity: { value: 0.3 },
      }, {
        scrollTo: this.stages()[9],
        opacity: { value: 0.3 },
      }, {
        scrollTo: this.stages()[10],
        opacity: { value: 0.3 },
      }, {
        scrollTo: this.stages()[11],
        opacity: { value: 0.3 },
      }, {
        scrollTo: this.stages()[12],
        opacity: { value: 0.3 },
      }, {
        scrollTo: this.stages()[13],
        opacity: { value: 0.3 },
      }, {
        scrollTo: this.stages()[14],
        opacity: { value: 0.3 },
      }, {
        scrollTo: this.stages()[15],
        opacity: { value: 0.3 },
      }, {
        scrollTo: this.stages()[16],
        opacity: { value: 0.3 },
      }];
    },
  };

}
