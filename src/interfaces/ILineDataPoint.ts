import { IFigureDataPoint } from "./IFigureDataPoint";

export interface ILineDataPoint extends IFigureDataPoint {
    x: Date
    y: number | undefined | null
}