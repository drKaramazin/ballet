export enum Klass {
  Scene = 'scene',
  Actor = 'actor',
  TimeFrame = 'time-frame',
  Motion = 'motion',
  Lib = 'lib',
}

export interface RootKlassGuard {
  rootKlass: string;
}
