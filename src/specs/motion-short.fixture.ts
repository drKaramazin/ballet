import { Util } from '../lib';
import { MotionFixture, TestStage } from './motion.fixture';

export abstract class MotionShortFixture extends MotionFixture {

  static stages: () => TestStage[] = function() {
    return [{
      x: 0,
      y: 0,
    }, {
      x: 0,
      y: Util.castToInt(Util.innerHeight() / 2),
    }, {
      x: 0,
      y: Util.innerHeight(),
    }, {
      x: 0,
      y: Util.innerHeight() + Util.castToInt(Util.innerHeight() / 2),
    }, {
      x: 0,
      y: 2 * Util.innerHeight(),
    }, {
      x: 0,
      y: 2 * Util.innerHeight() + Util.castToInt(Util.clientHeight() / 2),
    }, {
      x: 0,
      y: 2 * Util.innerHeight() + Util.clientHeight(),
    }, {
      x: 0,
      y: 2 * Util.innerHeight() + Util.clientHeight() + Util.castToInt(Util.clientHeight() / 2),
    }, {
      x: 0,
      y: 2 * Util.innerHeight() + 2 * Util.clientHeight(),
    }, {
      x: 0,
      y: 2 * Util.innerHeight() + 2 * Util.clientHeight() + Util.castToInt(Util.innerHeight() / 2),
    }, {
      x: 0,
      y: 3 * Util.innerHeight() + 2 * Util.clientHeight(),
    }];
  };

}
