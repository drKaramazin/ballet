import { ElementRecognition } from '../models/element-recognition';
import { ActorOptions } from '../actors/actor';
import { TimeFrame } from '../time-frame';
import { StaticActor } from '../actors/static.actor';
import { RefActor } from '../actors/ref.actor';
import { timeFrame, TimeFrameFactoryParams } from './time-frame.factory';

export type ActorType = 'ref-actor' | 'static-actor';
export interface ActorFactoryParams {
  element: ElementRecognition;
  options?: ActorOptions;
  frames?: TimeFrame | TimeFrameFactoryParams | Array<TimeFrame | TimeFrameFactoryParams>;
}

function prepareTimeFrame(frames: Array<TimeFrame | TimeFrameFactoryParams>): TimeFrame[] {
  return frames.map(frame => {
    if (frame instanceof TimeFrame) {
      return frame;
    }
    return timeFrame(frame)[0];
  });
}

export function actor(params: ActorFactoryParams, type?: ActorType): StaticActor | RefActor {
  const at = !type || type === 'static-actor' ? (
    new StaticActor(params.element, params.options)
  ) : (
    type === 'ref-actor' ? (
      new RefActor(params.element, params.options)
    ) : undefined
  );
  if (!at) {
    throw new Error('There is no this type of actor');
  }
  if (params.frames) {
    at.addFrame(prepareTimeFrame(Array.isArray(params.frames) ? params.frames : [params.frames]));
  }

  return at;
}
