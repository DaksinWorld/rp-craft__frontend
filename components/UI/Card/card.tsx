import React from 'react';
import styles from './card.module.css'
import {CardProps} from "./card.props";
import cn from "classnames";

const Card = ({children, className, ...props}: CardProps) => {
    return (
        <div className={cn(styles.card, className)} {...props}>
            {children}
        </div>
    );
};

export default Card;