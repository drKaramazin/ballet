import { Value } from '../models/value.model';
import { TimeFrame } from '../time-frame';
import { IMoveMotion, MoveMotion } from '../motions/move.motion';
import { ISizeMotion, SizeMotion } from '../motions/size.motion';
import { IOpacityMotion, OpacityMotion } from '../motions/opacity.motion';

export interface TimeFrameFactoryParams {
  move?: IMoveMotion;
  size?: ISizeMotion;
  opacity?: IOpacityMotion;
  start: Value;
  end?: Value;
}

export function timeFrame(params: TimeFrameFactoryParams): TimeFrame[] {
  const result: TimeFrame[] = [];

  if (params.move) {
    result.push(new TimeFrame(
      new MoveMotion(params.move),
      params.start,
      params.end,
    ));
  }

  if (params.size) {
    result.push(new TimeFrame(
      new SizeMotion(params.size),
      params.start,
      params.end,
    ));
  }

  if (params.opacity) {
    result.push(new TimeFrame(
      new OpacityMotion(params.opacity),
      params.start,
      params.end,
    ));
  }

  return result;
}
