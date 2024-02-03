import { FramesOrderFixture } from './frames-order.fixture';
import { Ballet, StaticActor, StickyPlatformScene } from '../../lib';
import { TestMeasuringGrid } from '../test-measuring-grid';
import { DummyMotion } from './dummy.motion';
import { TestTools } from '../test-tools';
import { SimpleOrderFixture } from './simple-order.fixture';
import { ApartFramesFixture } from './apart-frames.fixture';
import { OneAfterAnotherFixture } from './one-after-another.fixture';
import { IntersectingFixture } from './intersecting.fixture';
import { ParallelFixture } from './parallel.fixture';
import { NestedFixture } from './nested.fixture';
import { ThreeParallelFramesFixture } from './three-parallel-frames.fixture';
import { ThreeNestedFramesFixture } from './three-nested-frames.fixture';

describe('Frames order test', function() {
  let sceneElement: HTMLElement;
  let scene: StickyPlatformScene;
  let blockElement: HTMLElement;
  let block: StaticActor;
  let sr: Ballet;

  beforeEach(function() {
    document.body.insertAdjacentHTML('afterbegin', FramesOrderFixture.htmlTemplate());

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
      initSize: false,
    });
  });

  afterEach(function() {
    sr.stop();
    document.body.removeChild(document.getElementById('test-body')!);
  });

  it('should have a correct order with only one frame', function() {
    const motion = new DummyMotion('Single motion');

    const spy = spyOn(motion, 'make').and.callThrough();

    const changes = SimpleOrderFixture.changes(spy);

    const timeframe = changes.timeFrames[0](motion);

    block.addFrames([timeframe]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });

  it('should have a correct order with two frames apart (direct)', function() {
    const motionOne = new DummyMotion('motion One');
    const motionTwo = new DummyMotion('motion Two');

    const spyOne = spyOn(motionOne, 'make').and.callThrough();
    const spyTwo = spyOn(motionTwo, 'make').and.callThrough();

    const changes = ApartFramesFixture.changes(spyOne, spyTwo);

    const timeframeOne = changes.timeFrames[0](motionOne);
    const timeframeTwo = changes.timeFrames[1](motionTwo);

    block.addFrames([timeframeOne, timeframeTwo]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });

  it('should have a correct order with two frames apart (reverse)', function() {
    const motionOne = new DummyMotion('motion One');
    const motionTwo = new DummyMotion('motion Two');

    const spyOne = spyOn(motionOne, 'make').and.callThrough();
    const spyTwo = spyOn(motionTwo, 'make').and.callThrough();

    const changes = ApartFramesFixture.changes(spyOne, spyTwo);

    const timeframeOne = changes.timeFrames[0](motionOne);
    const timeframeTwo = changes.timeFrames[1](motionTwo);

    block.addFrames([timeframeTwo, timeframeOne]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });

  it('should have a correct order with two frames one after another (direct)', function() {
    const motionOne = new DummyMotion('motion One');
    const motionTwo = new DummyMotion('motion Two');

    const spyOne = spyOn(motionOne, 'make').and.callThrough();
    const spyTwo = spyOn(motionTwo, 'make').and.callThrough();

    const changes = OneAfterAnotherFixture.changes(spyOne, spyTwo);

    const timeframeOne = changes.timeFrames[0](motionOne);
    const timeframeTwo = changes.timeFrames[1](motionTwo);

    block.addFrames([timeframeOne, timeframeTwo]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });

  it('should have a correct order with two frames one after another (reverse)', function() {
    const motionOne = new DummyMotion('motion One');
    const motionTwo = new DummyMotion('motion Two');

    const spyOne = spyOn(motionOne, 'make').and.callThrough();
    const spyTwo = spyOn(motionTwo, 'make').and.callThrough();

    const changes = OneAfterAnotherFixture.changes(spyOne, spyTwo);

    const timeframeOne = changes.timeFrames[0](motionOne);
    const timeframeTwo = changes.timeFrames[1](motionTwo);

    block.addFrames([timeframeTwo, timeframeOne]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });

  it('should have a correct order with two intersecting frames (direct)', function() {
    const motionOne = new DummyMotion('motion One');
    const motionTwo = new DummyMotion('motion Two');

    const spyOne = spyOn(motionOne, 'make').and.callThrough();
    const spyTwo = spyOn(motionTwo, 'make').and.callThrough();

    const changes = IntersectingFixture.changes(spyOne, spyTwo);

    const timeframeOne = changes.timeFrames[0](motionOne);
    const timeframeTwo = changes.timeFrames[1](motionTwo);

    block.addFrames([timeframeOne, timeframeTwo]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });

  it('should have a correct order with two intersecting frames (reverse)', function() {
    const motionOne = new DummyMotion('motion One');
    const motionTwo = new DummyMotion('motion Two');

    const spyOne = spyOn(motionOne, 'make').and.callThrough();
    const spyTwo = spyOn(motionTwo, 'make').and.callThrough();

    const changes = IntersectingFixture.changes(spyTwo, spyOne);

    const timeframeOne = changes.timeFrames[1](motionOne);
    const timeframeTwo = changes.timeFrames[0](motionTwo);

    block.addFrames([timeframeTwo, timeframeOne]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });

  it('should have a correct order with two parallel frames', function() {
    const motionOne = new DummyMotion('motion One');
    const motionTwo = new DummyMotion('motion Two');

    const spyOne = spyOn(motionOne, 'make').and.callThrough();
    const spyTwo = spyOn(motionTwo, 'make').and.callThrough();

    const changes = ParallelFixture.changes(spyOne, spyTwo);

    const timeframeOne = changes.timeFrames[0](motionOne);
    const timeframeTwo = changes.timeFrames[1](motionTwo);

    block.addFrames([timeframeOne, timeframeTwo]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });

  it('should have a correct order with two nested frames (direct)', function() {
    const motionOne = new DummyMotion('motion One');
    const motionTwo = new DummyMotion('motion Two');

    const spyOne = spyOn(motionOne, 'make').and.callThrough();
    const spyTwo = spyOn(motionTwo, 'make').and.callThrough();

    const changes = NestedFixture.changes(spyOne, spyTwo);

    const timeframeOne = changes.timeFrames[0](motionOne);
    const timeframeTwo = changes.timeFrames[1](motionTwo);

    block.addFrames([timeframeOne, timeframeTwo]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });

  it('should have a correct order with two nested frames (reverse)', function() {
    const motionOne = new DummyMotion('motion One');
    const motionTwo = new DummyMotion('motion Two');

    const spyOne = spyOn(motionOne, 'make').and.callThrough();
    const spyTwo = spyOn(motionTwo, 'make').and.callThrough();

    const changes = NestedFixture.changes(spyTwo, spyOne);

    const timeframeOne = changes.timeFrames[1](motionOne);
    const timeframeTwo = changes.timeFrames[0](motionTwo);

    block.addFrames([timeframeTwo, timeframeOne]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });

  it('should have a correct order with three parallel frames', function() {
    const motionOne = new DummyMotion('motion One');
    const motionTwo = new DummyMotion('motion Two');
    const motionThree = new DummyMotion('motion Three');

    const spyOne = spyOn(motionOne, 'make').and.callThrough();
    const spyTwo = spyOn(motionTwo, 'make').and.callThrough();
    const spyThree = spyOn(motionThree, 'make').and.callThrough();

    const changes = ThreeParallelFramesFixture.changes(spyOne, spyTwo, spyThree);

    const timeframeOne = changes.timeFrames[0](motionOne);
    const timeframeTwo = changes.timeFrames[1](motionTwo);
    const timeframeThree = changes.timeFrames[2](motionThree);

    block.addFrames([timeframeOne, timeframeTwo, timeframeThree]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });

  it('should have a correct order with three nested frames (direct)', function() {
    const motionOne = new DummyMotion('motion One');
    const motionTwo = new DummyMotion('motion Two');
    const motionThree = new DummyMotion('motion Three');

    const spyOne = spyOn(motionOne, 'make').and.callThrough();
    const spyTwo = spyOn(motionTwo, 'make').and.callThrough();
    const spyThree = spyOn(motionThree, 'make').and.callThrough();

    const changes = ThreeNestedFramesFixture.directChanges(spyOne, spyTwo, spyThree);

    const timeframeOne = changes.timeFrames[0](motionOne);
    const timeframeTwo = changes.timeFrames[1](motionTwo);
    const timeframeThree = changes.timeFrames[2](motionThree);

    block.addFrames([timeframeOne, timeframeTwo, timeframeThree]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });

  it('should have a correct order with three nested frames (reverse)', function() {
    const motionOne = new DummyMotion('motion One');
    const motionTwo = new DummyMotion('motion Two');
    const motionThree = new DummyMotion('motion Three');

    const spyOne = spyOn(motionOne, 'make').and.callThrough();
    const spyTwo = spyOn(motionTwo, 'make').and.callThrough();
    const spyThree = spyOn(motionThree, 'make').and.callThrough();

    const changes = ThreeNestedFramesFixture.reverseChanges(spyOne, spyTwo, spyThree);

    const timeframeOne = changes.timeFrames[0](motionOne);
    const timeframeTwo = changes.timeFrames[1](motionTwo);
    const timeframeThree = changes.timeFrames[2](motionThree);

    block.addFrames([timeframeThree, timeframeTwo, timeframeOne]);

    scene.add(block);

    return TestTools.testGoingStages(
      block,
      blockElement,
      changes.stages(),
    );
  });
});
