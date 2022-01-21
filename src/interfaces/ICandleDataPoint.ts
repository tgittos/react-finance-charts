import { IFigureDataPoint } from "./IFigureDataPoint";

export interface ICandleDataPoint extends IFigureDataPoint {
    date: Date;
    high: number;
    low: number;
    open: number;
    close: number;
}