import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './loginForm.module.css';
import {useActions} from "../../../hook/useActions.jsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import CustomAlert from "../../customAlert/customAlert.jsx";

function LoginForm(props) {
    const { register, handleSubmit, formState:{errors} } = useForm({
        mode: "onChange"
    });
    const {user} = useSelector(state => state)
    const {LoginUser} = useActions();
    const navigate = useNavigate();

    const onSubmit = data => {
        LoginUser(data)
            .then((result) => {
                console.log(result)
                if(result?.error?.message){
                    throw Error('Ошибка при входе')
                    return
                }
                navigate('/')
            })
            .catch((error) => {
                console.error('Ошибка входа:', error, );
            });
    };
    return (
        <>
            {user.error && <CustomAlert message={user.error} duration={2000}/>}
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <input
                    type="text"
                    {...register('name', {
                        required: "Поле обязательно",})}
                    className={styles.login}
                    placeholder={'Придумай логин'}
                />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}'

                <input
                    type="password"
                    {...register('password', {
                        required: "Поле обязательно",
                    })}
                    className={styles.password}
                    placeholder={'Создай пароль'}
                />
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}

                <input
                    type="submit"
                    value={'Далее'}
                    className={styles.submit}
                />
            </div>
        </form>

        </>

    );
}

export default LoginForm;
