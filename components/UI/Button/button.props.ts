import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    color: string,
    type: 'submit' | 'button',
    text: string,
    disabled?: boolean
}