import { IMoveMotion, MoveMotion } from '../motions/move.motion';
import { Value } from '../models/value.model';
import { TimeFrame } from '../time-frame';

export interface TimeFrameFactoryParams {
  move?: IMoveMotion;
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

  return result;
}
