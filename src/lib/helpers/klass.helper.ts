import { Klass, RootKlassGuard } from '../models/rootKlassGuard';

export class KlassHelper {

  static rootIs(instance: RootKlassGuard | any, klass: Klass): boolean {
    return 'rootKlass' in instance && instance.rootKlass === klass;
  }

}
