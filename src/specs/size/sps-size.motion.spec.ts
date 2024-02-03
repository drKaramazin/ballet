import { StickyPlatformScene, Ballet, StaticActor } from '../../lib';
import { SizeFixture } from './size.fixture';
import { TestTools } from '../test-tools';
import { customMatchers } from '../custom-matchers';
import { generateExamples } from '../generate-examples';
import { TestMeasuringGrid } from '../test-measuring-grid';

describe('Sticky Platforms Scene: size motion test', function() {
  let sceneElement: HTMLElement;
  let scene: StickyPlatformScene;
  let blockElement: HTMLElement;
  let block: StaticActor;
  let sr: Ballet;

  generateExamples([
    'should have a correct size in changing width',
    'should have a correct size in changing height',
    'should have a correct size in changing width and height',
  ]);

  beforeEach(function() {
    jasmine.addMatchers(customMatchers);

    document.body.insertAdjacentHTML('afterbegin', SizeFixture.htmlTemplate());

    sceneElement = document.getElementById('scene')!;

    scene = new StickyPlatformScene(
      sceneElement,
      (w: number, h: number) => 5 * h,
      {
        measuringGrid: TestMeasuringGrid,
      },
    );

    sr = new Ballet(scene);

    blockElement = document.getElementById('block')!;

    block = new StaticActor(blockElement, {
      initOpacity: false,
      initPosition: false,
    });
  });

  afterEach(function() {
    sr.stop();
    document.body.removeChild(document.getElementById('test-body')!);
  });

  it('should have a correct size in changing width', function() {
    block.addFrames([
      SizeFixture.changeWidth.timeFrame(),
    ]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      SizeFixture.changeWidth.stages(),
    );
  });

  it('should have a correct size in changing height', function() {
    block.addFrames([
      SizeFixture.changeHeight.timeFrame(),
    ]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      SizeFixture.changeHeight.stages(),
    );
  });

  it('should have a correct size in changing width and height', function() {
    block.addFrames([
      SizeFixture.changeWidthHeight.timeFrame(),
    ]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      SizeFixture.changeWidthHeight.stages(),
    );
  });
});
