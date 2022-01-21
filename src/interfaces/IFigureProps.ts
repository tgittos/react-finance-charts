import { IChartDimensions } from "./IChartDimensions";
import { IFigureDataPoint } from "./IFigureDataPoint";

export interface IFigureProps {
    name?: string;
    data: IFigureDataPoint[];
    xScale?: any;
    yScale?: any;
    colorScale?: any;
    dimensions: IChartDimensions
}
