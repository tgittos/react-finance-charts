import { IChartDimensions } from "./IChartDimensions";
import {MutableRefObject} from "react";
import {IChartFactory} from "../lib/ChartFactory";

export interface IChartProps<T> {
    className?: string;
    chart: IChartFactory;
    svgRef?: MutableRefObject<null>;
    dimensions: IChartDimensions;
    data: T[];
    labelFormatter?: (val: T) => string;
    valueFormatter?: (val: T) => string;
}
