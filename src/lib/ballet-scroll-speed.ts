export class BalletScrollSpeed {

  private mouseupListener?: () => void;
  private mousedownListener?: () => void;
  private mousewheelListener?: (e: any) => void;

  constructor(
    public container: HTMLElement,
    protected options?: {
      deltaY?: number;
      limitY?: number;
      excludeIds?: string[];
    },
  ) {}

  handleScrollReset(): void {
    // eslint-disable-next-line no-global-assign
    scrollY = this.container.scrollTop;
  }

  exclude(e: any): any {
    if (this.options?.excludeIds?.length) {
      return document.elementsFromPoint(e.clientX, e.clientY).find(element => this.options?.excludeIds?.includes(element.id));
    }
  }

  handleMouseWheel(e: any): void {
    if (!this.exclude(e)) {
      e.preventDefault();
      let delta: number = e.deltaY;
      delta = this.options?.deltaY ? delta * this.options.deltaY : delta;
      if (this.options?.limitY && Math.abs(delta) > this.options.limitY) {
        delta = delta > 0 ? this.options.limitY : -this.options.limitY;
      }
      // eslint-disable-next-line no-global-assign
      scrollY += delta;
      if (scrollY > 0) {
        const limitY = this.container.scrollHeight - this.container.clientHeight;
        if (scrollY > limitY) {
          // eslint-disable-next-line no-global-assign
          scrollY = limitY;
        }
      } else {
        // eslint-disable-next-line no-global-assign
        scrollY = 0;
      }
      window?.scrollTo(0, scrollY);
    }
  }

  init(): void {
    this.mouseupListener = this.handleScrollReset.bind(this);
    this.mousedownListener = this.handleScrollReset.bind(this);
    this.mousewheelListener = this.handleMouseWheel.bind(this);
    this.container.addEventListener('mouseup', this.mouseupListener!, false);
    this.container.addEventListener('mousedown', this.mousedownListener!, false);
    this.container.addEventListener('mousewheel', this.mousewheelListener!, {
      passive: false,
    });
    this.container.addEventListener('DOMMouseScroll', this.mousewheelListener!, {
      passive: false,
    });
    this.container.addEventListener('wheel', this.mousewheelListener!, {
      passive: false,
    });
  }

  stop(): void {
    if (this.mouseupListener) {
      this.container.removeEventListener('mouseup', this.mouseupListener);
    }
    if (this.mousedownListener) {
      this.container.removeEventListener('mousedown', this.mousedownListener);
    }
    if (this.mousewheelListener) {
      this.container.removeEventListener('mousewheel', this.mousewheelListener);
      this.container.removeEventListener('DOMMouseScroll', this.mousewheelListener);
      this.container.removeEventListener('wheel', this.mousewheelListener);
    }
  }

}
