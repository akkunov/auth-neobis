import React from 'react';
import styles from './register.module.css'
import RegisterForm from "../../../components/auth/registerForm/registerForm.jsx";
import GoBack from "../../../components/ui/buttons/goBack/goBack.jsx";
import {useSelector} from "react-redux";
import {useActions} from "../../../hook/useActions.jsx";
import {useNavigate} from "react-router-dom";
import CustomAlert from "../../../components/ui/customAlert/customAlert.jsx";
import Hero from "../../../components/ui/hero/hero.jsx";


function Register(props) {
    const user = useSelector(state => state.user)
    const {RegisterUser} = useActions();
    const navigate = useNavigate();

    async function submit(data){
        try {
            const result = await RegisterUser(data);
            if (result?.error?.message) {
                throw new Error('Ошибка при входе');
            }
            navigate('/verification');
        } catch (error) {
            console.error('Ошибка входа:', error);
        }
    }


    return (
        <>
            {user.status === 'error' && <CustomAlert message={user.error} duration={2000} deps={user.status}/>}
            <div className={styles.container}>
                <GoBack />
                <div className={styles.wrapper}>
                    <div className={styles.heroContainer}>
                        <Hero />
                    </div>

                    <div className={styles.registerContainer}>
                        <h2 className={styles.registerTitle}>Создать аккаунт Lorby</h2>
                        <RegisterForm submit={submit} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;