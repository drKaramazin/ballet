import { StaticActor, Ballet, FixedActorsScene, TimeFrame, MoveMotion } from '../../lib';
import { TestMeasuringGrid } from '../test-measuring-grid';
import { OpacityFixture } from './opacity.fixture';
import { TestTools } from '../test-tools';
import { generateExamples } from '../generate-examples';
import { customMatchers } from '../custom-matchers';

describe('Fixed Actors Scene: opacity motion test', function() {
  let sceneElement: HTMLElement;
  let scene: FixedActorsScene;
  let blockElement: HTMLElement;
  let block: StaticActor;
  let sr: Ballet;

  generateExamples([
    'should have a correct opacity',
  ]);

  beforeEach(function() {
    jasmine.addMatchers(customMatchers);

    document.body.insertAdjacentHTML('afterbegin', OpacityFixture.htmlTemplate());

    sceneElement = document.getElementById('scene')!;

    scene = new FixedActorsScene(
      sceneElement,
      (w: number, h: number) => 5 * h,
      {
        measuringGrid: TestMeasuringGrid,
      },
    );

    sr = new Ballet(scene);

    blockElement = document.getElementById('block')!;

    block = new StaticActor(blockElement, {
      initSize: false,
    });

    // To show an actor in docs
    block.addFrames([
      new TimeFrame(new MoveMotion({
        startX: () => 0,
        endX: () => 0,
        startY: () => 0,
        endY: () => 0,
      }), () => 0, () => 0),
    ]);
  });

  afterEach(function() {
    sr.stop();
    document.body.removeChild(document.getElementById('test-body')!);
  });

  it('should have a correct opacity', function() {
    block.addFrames([
      OpacityFixture.changeOpacity.timeFrame(),
    ]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      OpacityFixture.changeOpacity.stages(),
    );
  });
});
