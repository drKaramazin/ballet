import { ElementRecognition } from '../models/element-recognition';
import { Scene, SceneOptions } from '../scenes/scene';
import { Actor, ActorOptions } from '../actors/actor';
import { StickyPlatformScene } from '../scenes/sticky-platform.scene';
import { FixedActorsScene } from '../scenes/fixed-actors.scene';
import { actor, ActorFactoryParams } from './actor.factory';
import { Klass } from '../models/rootKlassGuard';
import { KlassHelper } from '../helpers/klass.helper';
import { Value } from '../models/value.model';

export type SceneType = 'sticky-platform' | 'fixed-actors';
export interface SceneFactoryParams {
  element: ElementRecognition;
  height: Value;
  options?: SceneOptions;
  type?: SceneType;
  actors?: ActorFactoryParams | Array<ActorFactoryParams | Actor<ActorOptions>> | Actor<ActorOptions>;
}

function prepareActor(actors: Array<ActorFactoryParams | Actor<ActorOptions>>): Array<Actor<ActorOptions>> {
  return actors.map(item => {
    if (KlassHelper.rootIs(item, Klass.Actor)) {
      return item as Actor<ActorOptions>;
    }
    return actor(item as ActorFactoryParams);
  });
}

export function scene(
  params: SceneFactoryParams,
): Scene<SceneOptions> {
  const sc = params.type === undefined || params.type === 'sticky-platform' ? (
    new StickyPlatformScene(params.element, params.height, params.options)
  ) : (
    params.type === 'fixed-actors' ? (
      new FixedActorsScene(params.element, params.height, params.options)
    ) : undefined
  );

  if (!sc) {
    throw new Error('There is no this type of scene');
  }

  if (params.actors) {
    sc.add(prepareActor(Array.isArray(params.actors) ? params.actors : [params.actors]));
  }

  return sc;
}
