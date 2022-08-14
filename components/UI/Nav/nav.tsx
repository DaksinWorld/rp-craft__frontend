import React, {useRef} from 'react';
import styles from './nav.module.css'
import cn from "classnames";
import {useIntersectionObserver} from "usehooks-ts";

const Nav = () => {
    const ref = useRef<HTMLImageElement | null>(null)
    const entry = useIntersectionObserver(ref, {
        freezeOnceVisible: true
    })
    const isVisible = !!entry?.isIntersecting

    return (
        <nav className={cn(styles.nav)}>
            <div className="container flex flex-row justify-between">
                <img className={isVisible ? 'leftAnimation': ''} ref={ref} src="/logo.svg" alt="Logo"/>
                <div className={'flex flex-row items-center'}>
                    <a href={'#'} className={styles.nav__element}>Home</a>
                    <a href={'#'} className={styles.nav__element}>Token</a>
                    <a href={'#'} className={styles.nav__element}>Earn</a>
                    <a href={'#'} className={styles.nav__element}>Road map</a>
                    <a href={'#'} className={styles.nav__element}>Vote&Earn</a>
                    <button className={styles.nav__element_button}>
                        Start
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;