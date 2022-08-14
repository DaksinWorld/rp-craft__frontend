import React from 'react';
import styles from '../../styles/Roadmap.module.css'
import RoadmapSection from "../../components/RoadmapSection/roadmap";

const Roadmap = () => {
    return (
        <div className={styles.roadmapContainer}>
            <RoadmapSection url={'/minecraft-bg.webm'} title={'titke'} text={'sdsadsadsad'}/>
        </div>
    );
};

export default Roadmap;