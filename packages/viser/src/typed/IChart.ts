type eventFunc = (ev: any) => void;

interface IBackground {
  stroke?: string;
  strokeOpacity?: number;
  lineWidth?: number;
  fill?: string;
  fillOpactiy?: number;
  radius?: number
}

export interface IChart {
  id?: any;
  container?: any;
  height: number;
  width?: number;
  animate?: boolean | object;
  forceFit?: boolean;
  background?: IBackground;
  plotBackground?: IBackground;
  padding?: number | object | number[];
  onMouseDown?: eventFunc;
  onMouseMove?: eventFunc;
  onMouseLeave?: eventFunc;
  onMouseUp?: eventFunc;
  onClick?: eventFunc;
  onDbClick?: eventFunc;
  onTouchStart?: eventFunc;
  onTouchMove?: eventFunc;
  onTouchEnd?: eventFunc;
  onPlotEnter?: eventFunc;
  onPlotMove?: eventFunc;
  onPlotLeave?: eventFunc;
  onPlotClick?: eventFunc;
  onPlotDbClick?: eventFunc;
}

export default IChart;
