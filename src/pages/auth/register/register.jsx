import React from 'react';
import styles from './register.module.css'
import Hero from '../../../assets/svg/hero.svg'
import RegisterForm from "../../../components/auth/registerForm/registerForm.jsx";
import GoBack from "../../../components/buttons/goBack/goBack.jsx";
function Register(props) {
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
                <h2 className={styles.registerTitle}>Создать аккаунт Lorby</h2>
                <RegisterForm />
            </div>
            </div>
        </div>

    );
}

export default Register;