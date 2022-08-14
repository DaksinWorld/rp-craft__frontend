import {DetailedHTMLProps, HTMLAttributes} from "react";


export interface CountProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: number;
}