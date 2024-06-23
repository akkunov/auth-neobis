import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './loginForm.module.css';

function LoginForm({submit}) {
    const { register, handleSubmit, formState:{errors} } = useForm({
        mode: "onChange"
    });


    const onSubmit = data => {
        submit(data)
    };
    return (
        <>
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
