import {DetailedHTMLProps} from "react";
import {HTMLAttributes} from "react";


export interface RoadmapProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string;
    url: string;
    title: string;
}