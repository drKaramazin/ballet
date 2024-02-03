import { Ballet, StaticActor, StickyPlatformScene } from '../../lib';
import { FramesOrderFixture } from '../frames-order/frames-order.fixture';
import { TestMeasuringGrid } from '../test-measuring-grid';
import { TestTools } from '../test-tools';
import { customMatchers } from '../custom-matchers';
import { generateExamples } from '../generate-examples';
import { OffsetShortFixture } from './offset-short.fixture';

describe('Sticky Platforms Scene: offset test (short)', function() {
  let sceneElement: HTMLElement;
  let scene: StickyPlatformScene;
  let blockElement: HTMLElement;
  let block: StaticActor;
  let sr: Ballet;

  generateExamples([
    'should have correct X, Y coords in changing X',
    'should have correct X, Y coords in changing Y',
    'should have correct X, Y coords in changing both X and Y',
  ]);

  beforeEach(function() {
    jasmine.addMatchers(customMatchers);

    document.body.insertAdjacentHTML('afterbegin', FramesOrderFixture.htmlTemplate());

    sceneElement = document.getElementById('scene')!;

    scene = new StickyPlatformScene(
      sceneElement,
      (w: number, h: number) => 2 * h,
      {
        offset: (w, h) => -h / 2,
        measuringGrid: TestMeasuringGrid,
      },
    );

    sr = new Ballet(scene);

    blockElement = document.getElementById('block')!;

    block = new StaticActor(blockElement, {
      initOpacity: false,
      initSize: false,
    });
  });

  afterEach(function() {
    sr.stop();
    document.body.removeChild(document.getElementById('test-body')!);
  });

  it('should have correct X, Y coords in changing X', function() {
    block.addFrames([
      OffsetShortFixture.changeX.timeFrame(),
    ]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      OffsetShortFixture.changeX.stages(),
    );
  });

  it('should have correct X, Y coords in changing Y', function() {
    block.addFrames([
      OffsetShortFixture.changeY.timeFrame(),
    ]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      OffsetShortFixture.changeY.stages(),
    );
  });

  it('should have correct X, Y coords in changing both X and Y', function() {
    block.addFrames([
      OffsetShortFixture.changeXY.timeFrame(),
    ]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      OffsetShortFixture.changeXY.stages(),
    );
  });
});
