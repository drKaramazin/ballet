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
      y: 2 * Util.viewportHeight() + 2 * Util.clientHeight() + Util.castToInt(Util.clientHeight() / 2),
    }, {
      x: 0,
      y: 2 * Util.viewportHeight() + 3 * Util.clientHeight(),
    }, {
      x: 0,
      y: 2 * Util.viewportHeight() + 3 * Util.clientHeight() + Util.castToInt(Util.clientHeight() / 2),
    }, {
      x: 0,
      y: 2 * Util.viewportHeight() + 4 * Util.clientHeight(),
    }, {
      x: 0,
      y: 2 * Util.viewportHeight() + 4 * Util.clientHeight() + Util.castToInt(Util.clientHeight() / 2),
    }, {
      x: 0,
      y: 2 * Util.viewportHeight() + 5 * Util.clientHeight(),
    }, {
      x: 0,
      y: 2 * Util.viewportHeight() + 5 * Util.clientHeight() + Util.castToInt(Util.viewportHeight() / 2),
    }, {
      x: 0,
      y: 3 * Util.viewportHeight() + 5 * Util.clientHeight(),
    }];
  };

}
