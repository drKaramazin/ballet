import { MeasuringGridModel } from '../lib/models/measuring-grid.model';

export const TestMeasuringGrid: MeasuringGridModel = {
  height: (deviceWidth, deviceHeight) => deviceHeight,
  width: deviceWidth => deviceWidth / 2,
  color: '#fff',
  subgrid: {
    height: gridHeight => gridHeight / 2,
    width: gridWidth => gridWidth / 2,
    color: '#637D8F',
    borderStyle: 'dashed',
  },
  label: {
    startWith: 4,
    top: 10,
    left: 10,
    fontSize: '16px',
  },
};
