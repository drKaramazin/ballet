import { ElementRecognition } from '../models/element-recognition';
import { Actor, ActorOptions } from '../actors/actor';
import { TimeFrame } from '../time-frame';
import { timeFrame, TimeFrameFactoryParams } from './time-frame.factory';
import { Klass } from '../models/rootKlassGuard';
import { KlassHelper } from '../helpers/klass.helper';

export interface ActorFactoryParams {
  element: ElementRecognition;
  options?: ActorOptions;
  frames?: TimeFrame | TimeFrameFactoryParams | Array<TimeFrame | TimeFrameFactoryParams>;
}

function prepareTimeFrame(frames: Array<TimeFrame | TimeFrameFactoryParams>): TimeFrame[] {
  return frames.reduce((acc: TimeFrame[], frame: TimeFrame | TimeFrameFactoryParams) => {
    if (KlassHelper.rootIs(frame, Klass.TimeFrame)) {
      return [...acc, frame] as TimeFrame[];
    }
    return [...acc, ...timeFrame(frame)];
  }, []);
}

export function actor(params: ActorFactoryParams): Actor<ActorOptions> {
  const at = new Actor(params.element, params.options);
  if (params.frames) {
    at.add(prepareTimeFrame(Array.isArray(params.frames) ? params.frames : [params.frames]));
  }

  return at;
}
