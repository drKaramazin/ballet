import { Ballet, BalletOptions } from '../ballet';
import { scene, SceneFactoryParams } from './scene.factory';

export function ballet(
  sceneParams: SceneFactoryParams | SceneFactoryParams[],
  options?: BalletOptions,
): Ballet {
  if (Array.isArray(sceneParams)) {
    return new Ballet(sceneParams.map(options => scene(options)), options);
  } else {
    return new Ballet(scene(sceneParams), options);
  }
}
