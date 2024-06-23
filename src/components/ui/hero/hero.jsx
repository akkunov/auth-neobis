import React from 'react';
import styles from "./hero.module.css";
import HeroIC from '../../../assets/svg/hero.svg';

function Hero() {
    return (
        <div className={styles.imgContainer}>
            <img src={HeroIC} alt="hero image"/>
            <h1 className={styles.title}>Lorby</h1>
            <span className={styles.subTitle}>Твой личный репетитор</span>
        </div>
    );
}

export default Hero;