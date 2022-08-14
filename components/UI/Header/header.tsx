import React, {useRef} from 'react';
import styles from "./header.module.css";
import Nav from "../Nav/nav";
import {HeaderProps} from "./header.props";
import cn from "classnames";
import {useIntersectionObserver} from "usehooks-ts";

const Header = ({children, ...props}: HeaderProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(ref, {})
    const isVisible = !!entry?.isIntersecting


    return (
        <header className={styles.header} {...props}>
            <Nav/>
            <div className="container">
                <div className={cn(styles.header__content, 'flex justify-between')}>
                    <div className={cn(styles.header__content_left, {
                        ['leftAnimation']: isVisible
                    })} ref={ref}>
                        <h1 className={cn(styles.header_title, 'font-extrabold')}>EARNCRAFT</h1>
                        <h2 className={cn(styles.header_subtitle, 'mt-[-30px] font-bold text-[48px]')}>START PLAY
                            TODAY!</h2>
                        <div className={styles.header__statistic}>
                            <ul className={'flex'}>
                                <li className={cn(styles.header_li, 'font-regular leading-15 text-[29px]')}>
                                    <span className={'font-semibold md:text-[23px] text-[33px]'}>Current Online:</span> <br/>
                                    1000
                                </li>
                                <li className={cn(styles.header_li, 'font-regular leading-15 text-[29px]')}>
                                    <span className={'font-semibold md:text-[23px] text-[33px]'}>Total Users: </span><br/>
                                    1000
                                </li>
                                <li className={cn(styles.header_li, 'font-regular leading-15 text-[29px]')}>
                                    <span className={'font-semibold md:text-[23px] text-[33px]'}>Token Price: </span><br/>
                                    0.03$
                                </li>
                            </ul>
                        </div>
                        <button className={cn(styles.header__play_button)}>
                            Play
                        </button>
                    </div>
                    <div
                        className={cn(styles.header__content_right, {
                            ['rightAnimation']: isVisible
                        })}>
                        <img className={'w-full'} src="/right-column.png" alt="right-image"/>
                    </div>
                </div>
                <a href="#steps">
                    <img className={'mt-[60px]'} src="/icons/arrow-down.svg" alt="arrow-down"/>
                </a>
            </div>
        </header>
    );
};

export default Header;