import { ElementRecognition } from '../models/element-recognition';

export class ElementHelper {

  static init(element: ElementRecognition): HTMLElement {
    if (typeof element === 'string') {
      const elementRes: HTMLElement | null = document.querySelector(element);
      if (!elementRes) {
        throw new Error(`Can't select element by "${element}" selector`);
      }
      return elementRes;
    } else if (element instanceof HTMLElement) {
      return element;
    }

    throw new Error('Invalid type of scene\'s element');
  }

}
