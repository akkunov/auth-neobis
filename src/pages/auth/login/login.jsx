import React from 'react';
import styles from './login.module.css'
import Hero from '../../../assets/svg/hero.svg'
import GoBack from "../../../components/buttons/goBack/goBack.jsx";
import LoginForm from "../../../components/auth/loginForm/loginForm.jsx";
import {Link} from "react-router-dom";
function Login(props) {

    return (
        <div className={styles.container}>
            <GoBack />
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    <img src={Hero} alt="hero image"/>
                    <h1 className={styles.title}>Lorby</h1>
                    <span className={styles.subTitle}>Твой личный репетитор</span>
                </div>
                <div className={styles.registerContainer}>
                    <h2 className={styles.registerTitle}>Вэлком бэк!</h2>
                    <LoginForm />
                    <Link to={'/register'}>
                        <span className={styles.goRegister}>У меня еще нет аккаунта</span>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Login;