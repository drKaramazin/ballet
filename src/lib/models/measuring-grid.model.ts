import { Color } from './color.model';
import { Value } from './value.model';

export interface MeasuringSubgrid {
  width?: (gridWidth: number) => number;
  height?: (gridHeight: number) => number;
  color: Color;
  borderStyle: string;
}

export interface MeasuringGridModel {
  width?: Value;
  height?: (deviceWidth: number, deviceHeight: number, sceneHeight: number) => number;
  color: Color;
  subgrid?: MeasuringSubgrid;
  label?: {
    startWith?: number;
    top: number;
    left: number;
    fontSize: string;
  };
}

export type HorizontalMeasuringGrid = Required<Omit<MeasuringGridModel, 'width'>>;
export type VerticalMeasuringGrid = Required<Omit<MeasuringGridModel, 'height'>>;

export type VerticalMeasuringSubgrid = Required<Omit<MeasuringSubgrid, 'height'>>;
