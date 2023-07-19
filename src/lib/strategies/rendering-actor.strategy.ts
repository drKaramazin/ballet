import { TimeFrame } from '../time-frame';

interface FrameGroups {
  [key: string]: TimeFrame[];
}

export class RenderingActorStrategy {

  private frameGroups: FrameGroups = {};

  startFrame: { [key: string]: TimeFrame } = {};
  endFrame: { [key: string]: TimeFrame } = {};

  private groupFramesByMotion(frames: TimeFrame[]): FrameGroups {
    return frames.reduce(
      (acc: FrameGroups, frame) => {
        const motionName = frame.motion.motionName();
        acc[motionName] = acc[motionName] ? [frame, ...acc[motionName]] : [frame];

        return acc;
      },
      {},
    );
  }

  prerender(frames: TimeFrame[]): void {
    this.frameGroups = this.groupFramesByMotion(frames);

    for (const key of Object.keys(this.frameGroups)) {
      const group = this.frameGroups[key];
      if (group.length) {
        this.startFrame[key] = group[0];
        this.endFrame[key] = group[0];

        for (const frame of group) {
          if (frame.getStartPos() < this.startFrame[key].getStartPos()) {
            this.startFrame[key] = frame;
          }
          if (frame.getEndPos() > this.endFrame[key].getEndPos()) {
            this.endFrame[key] = frame;
          }
        }
      }
    }
  }

  private findFirstHit(group: TimeFrame[], scrollPos: number): TimeFrame | undefined {
    return group.find(frame => scrollPos >= frame.getStartPos() && scrollPos <= frame.getEndPos());
  }

  private findNearestFrameForHole(group: TimeFrame[], scrollPos: number): TimeFrame | undefined {
    const previousFrames = group.filter(frame => frame.getEndPos() <= scrollPos);
    if (previousFrames.length) {
      let nearest: TimeFrame | undefined = previousFrames[0];
      for (const frame of previousFrames) {
        if (frame.getEndPos() > nearest.getEndPos()) {
          nearest = frame;
        }
      }

      return nearest;
    }
  }

  private lookIntoHoles(group: TimeFrame[], scrollPos: number, key: string): TimeFrame | undefined {
    if (scrollPos <= this.startFrame[key].getStartPos()) {
      return this.startFrame[key];
    }
    if (scrollPos >= this.endFrame[key].getEndPos()) {
      return this.endFrame[key];
    }

    return this.findNearestFrameForHole(group, scrollPos);
  }

  takeRenderFrame(scrollPos: number): TimeFrame[] {
    const result: TimeFrame[] = [];

    for (const key of Object.keys(this.frameGroups)) {
      const group = this.frameGroups[key];
      if (group?.length) {
        const frame = this.findFirstHit(group, scrollPos) ?? this.lookIntoHoles(group, scrollPos, key);
        if (frame) {
          result.push(frame);
        }
      }
    }

    return result;
  }

}
