import React from 'react';
import styles from './login.module.css'
import GoBack from "../../../components/buttons/goBack/goBack.jsx";
import LoginForm from "../../../components/auth/loginForm/loginForm.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useActions} from "../../../hook/useActions.jsx";
import CustomAlert from "../../../components/ui/customAlert/customAlert.jsx";
import Hero from "../../../components/ui/hero/hero.jsx";


function Login(props) {

    const user = useSelector(state => state.user)
    const {LoginUser} = useActions();
    const navigate = useNavigate();

    async function submit(data){
        try {
            const result = await LoginUser(data);
            if (result?.error?.message) {
                throw new Error('Ошибка при входе');
            }
            if(!result.data.verificated) navigate('/verification')
            else  navigate('/');

        } catch (error) {
            console.error('Ошибка входа:', error);
        }
    }
    return (
        <>
            {user.error && <CustomAlert message={user.error} duration={2000}/>}
            <div className={styles.container}>
                <GoBack />
                <div className={styles.wrapper}>
                    <Hero />
                    <div className={styles.registerContainer}>
                        <h2 className={styles.registerTitle}>Вэлком бэк!</h2>
                        <LoginForm submit={submit}/>
                        <Link to={'/register'}>
                            <span className={styles.goRegister}>У меня еще нет аккаунта</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Login;