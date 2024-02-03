import { Util } from '../../lib';
import { TestStage } from '../motion.fixture';

export class FramesOrderFixture {

  static block = {
    width: 17,
    height: 12,
  };

  static htmlTemplate(): string {
    return `
      <div id="test-body">
        <div class="display"></div>
        <div class="display"></div>
        <div id="scene">
            <div id="block" style="width: ${FramesOrderFixture.block.width}px; height: ${FramesOrderFixture.block.height}px;"></div>
        </div>
        <div class="display"></div>
        <div class="display"></div>
      </div>
    `;
  }

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
      y: 2 * Util.innerHeight() + 2 * Util.clientHeight() + Util.castToInt(Util.clientHeight() / 2),
    }, {
      x: 0,
      y: 2 * Util.innerHeight() + 3 * Util.clientHeight(),
    }, {
      x: 0,
      y: 2 * Util.innerHeight() + 3 * Util.clientHeight() + Util.castToInt(Util.clientHeight() / 2),
    }, {
      x: 0,
      y: 2 * Util.innerHeight() + 4 * Util.clientHeight(),
    }, {
      x: 0,
      y: 2 * Util.innerHeight() + 4 * Util.clientHeight() + Util.castToInt(Util.clientHeight() / 2),
    }, {
      x: 0,
      y: 2 * Util.innerHeight() + 5 * Util.clientHeight(),
    }, {
      x: 0,
      y: 2 * Util.innerHeight() + 5 * Util.clientHeight() + Util.castToInt(Util.innerHeight() / 2),
    }, {
      x: 0,
      y: 3 * Util.innerHeight() + 5 * Util.clientHeight(),
    }];
  };

}
