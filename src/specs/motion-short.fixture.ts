import { Util } from '../lib';
import { MotionFixture, TestStage } from './motion.fixture';

export abstract class MotionShortFixture extends MotionFixture {

  static stages: () => TestStage[] = function() {
    return [{
      x: 0,
      y: 0,
    }, {
      x: 0,
      y: Util.castToInt(Util.viewportHeight() / 2),
    }, {
      x: 0,
      y: Util.viewportHeight(),
    }, {
      x: 0,
      y: Util.viewportHeight() + Util.castToInt(Util.viewportHeight() / 2),
    }, {
      x: 0,
      y: 2 * Util.viewportHeight(),
    }, {
      x: 0,
      y: 2 * Util.viewportHeight() + Util.castToInt(Util.clientHeight() / 2),
    }, {
      x: 0,
      y: 2 * Util.viewportHeight() + Util.clientHeight(),
    }, {
      x: 0,
      y: 2 * Util.viewportHeight() + Util.clientHeight() + Util.castToInt(Util.clientHeight() / 2),
    }, {
      x: 0,
      y: 2 * Util.viewportHeight() + 2 * Util.clientHeight(),
    }, {
      x: 0,
      y: 2 * Util.viewportHeight() + 2 * Util.clientHeight() + Util.castToInt(Util.viewportHeight() / 2),
    }, {
      x: 0,
      y: 3 * Util.viewportHeight() + 2 * Util.clientHeight(),
    }];
  };

}
