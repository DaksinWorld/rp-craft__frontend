import React from 'react';
import styles from "./roadmap.module.css";
import {RoadmapProps} from "./roadmap.props";

const RoadmapSection = ({title,text, url, ...props}: RoadmapProps) => {
    return (
        <div className={styles.section} {...props}>
            <video autoPlay loop src={url}></video>
            <h1>text</h1>
            <h3>{text}</h3>
        </div>
    );
};

export default RoadmapSection;