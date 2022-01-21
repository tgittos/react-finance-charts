import * as d3 from "d3";
import IFigureDataPoint from "../../interfaces/IFigureDataPoint";
import IFigureProps from "../../interfaces/IFigureProps";

export interface ILabelProps {

}

export class Label {
    readonly props: IFigureProps;

    constructor(props: IFigureProps) {
        this.props = props;
    }

    draw(svg: d3.Selection<SVGElement, IFigureDataPoint[], HTMLElement, undefined>): void {

    }

}