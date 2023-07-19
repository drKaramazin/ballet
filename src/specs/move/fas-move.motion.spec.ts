import { StaticActor, Ballet, FixedActorsScene } from '../../lib';
import { TestTools } from '../test-tools';
import { MoveFixture } from './move.fixture';
import { customMatchers } from '../custom-matchers';
import { generateExamples } from '../generate-examples';
import { TestMeasuringGrid } from '../test-measuring-grid';

describe('Fixed Actors Scene: move motion test', function() {
  let sceneElement: HTMLElement;
  let scene: FixedActorsScene;
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

    document.body.insertAdjacentHTML('afterbegin', MoveFixture.htmlTemplate());

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
      initOpacity: false,
    });
  });

  afterEach(function() {
    sr.stop();
    document.body.removeChild(document.getElementById('test-body')!);
  });

  it('should have correct X, Y coords in changing X', function() {
    block.addFrames([
      MoveFixture.changeX.timeFrame(),
    ]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      MoveFixture.changeX.stages(),
    );
  });

  it('should have correct X, Y coords in changing Y', function() {
    block.addFrames([
      MoveFixture.changeY.timeFrame(),
    ]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      MoveFixture.changeY.stages(),
    );
  });

  it('should have correct X, Y coords in changing both X and Y', function() {
    block.addFrames([
      MoveFixture.changeXY.timeFrame(),
    ]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      MoveFixture.changeXY.stages(),
    );
  });
});
