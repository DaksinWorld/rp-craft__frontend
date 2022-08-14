import React, {useRef} from 'react';
import styles from './main.module.css'
import cn from "classnames";
import Count from "../Count/count";
import {useIntersectionObserver} from "usehooks-ts";
import Donut from "../../Charts/Donut/donut";

const Main = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(ref, {})
    const isVisible = !!entry?.isIntersecting

    return (
        <main className={styles.main}>
            <div id={'steps'} className={cn(styles.main__container, "container pt-10 flex justify-between items-center")}>
                <div className={cn({
                    ['leftAnimation']: isVisible
                })}>
                    <h2 className={'text-[160px] ml-[-10px] font-bold text-white md:text-[120px] sm:text-[100px]'}>How</h2>
                    <h3 className={'text-[96px] mt-[-60px] font-bold text-white md:text-[80px] sm:text-[70px]'}>To earn?</h3>
                    <span
                        className={cn('text-[28px] font-medium', styles.main__subtitle)}>Get closer to your financial <br/> independence.</span>
                    <div ref={ref} className={cn(styles.main__steps)}>
                        <div className={'flex items-center mt-10'}>
                            <Count text={1}/>
                            <span className={styles.step__text}>Register your account.</span>
                        </div>
                        <div className={'flex items-center mt-10'}>
                            <Count text={2}/>
                            <span className={styles.step__text}>Buy an entrance, it is needed to protect you against dishonest players</span>
                        </div>
                        <div className={'flex items-center mt-10'}>
                            <Count text={3}/>
                            <span className={styles.step__text}>Then activate an pass and you can enjoy the game.</span>
                        </div>
                    </div>
                </div>
                <div className={cn({
                    ['rightAnimation']: isVisible
                })}>
                    <img className={styles.main__phone} width={420} src="/Iphone.png" alt="iphone"/>
                </div>
            </div>
            <div className="container mt-5">
                <h2 className={'font-bold text-[120px]'}>
                    Token
                </h2>
                <div className="flex justify-between">
                    <div className="span">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <img src="/Huge_logo.png" alt="huge_logo"/>
                </div>
                <Donut/>
            </div>
        </main>
    );
};

export default Main;