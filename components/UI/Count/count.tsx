import React from 'react';
import styles from './count.module.css'
import {CountProps} from "./count.props";

const Count = ({text, ...props}: CountProps) => {
    return (
        <div className={styles.count} {...props}>
            {text}
        </div>
    );
};

export default Count;