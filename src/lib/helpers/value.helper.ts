import { Value } from '../models/value.model';
import { NumOrFn } from '../models/num-or-fn';

export class ValueHelper {

  static prepare(value: NumOrFn): Value {
    if (typeof value === 'function') {
      return value;
    }
    return () => value;
  }

}
