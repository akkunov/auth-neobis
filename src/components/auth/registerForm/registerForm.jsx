import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './registerForm.module.css';

function RegisterForm(props) {
    const { register, handleSubmit, formState: { errors }, watch, setError } = useForm({
        mode: "onChange"
    });

    const [criteria, setCriteria] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
    });

    const password = watch('password', '');
    const repeatPass = watch('repeatPass', '');

    // Валидация пароля
    const validatePassword = (password) => {
        const length = password.length >= 8 && password.length <= 15;
        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        const number = /[0-9]/.test(password);
        const specialChar = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(password);

        setCriteria({
            length,
            uppercase,
            lowercase,
            number,
            specialChar,
        });

        return length && uppercase && lowercase && number && specialChar;
    };

    // Обработчик отправки формы
    const onSubmit = data => {
        if (data.password !== data.repeatPass) {
            setError('repeatPass', { type: 'manual', message: 'Пароли не совпадают' });
            return;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <input
                    type="email"
                    {...register('email', { required: "Поле обязательно" })}
                    className={styles.email}
                    placeholder={'Введи адрес почты'}
                />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}

                <input
                    type="text"
                    {...register('name', {
                        required: "Поле обязательно",
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: 'Только латинские буквы'
                        }
                    })}
                    className={styles.login}
                    placeholder={'Придумай логин'}
                />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}

                <input
                    type="password"
                    {...register('password', {
                        required: "Поле обязательно",
                        validate: validatePassword
                    })}
                    className={styles.password}
                    placeholder={'Создай пароль'}
                />
                <ol>
                    <li className={criteria.length ? styles.success : ''}>От 8 до 15 символов</li>
                    <li className={criteria.uppercase ? styles.success : ''}>Строчные и прописные буквы</li>
                    <li className={criteria.number ? styles.success : ''}>Минимум 1 цифра</li>
                    <li className={criteria.specialChar ? styles.success : ''}>Минимум 1 спецсимвол (!, ", #, $...)</li>
                </ol>

                <input
                    type="password"
                    {...register('repeatPass', { required: "Поле обязательно" })}
                    className={styles.password}
                    placeholder={"Повтори пароль"}
                />
                {errors.repeatPass && <p className={styles.error}>{errors.repeatPass.message}</p>}

                <input
                    type="submit"
                    value={'Далее'}
                    className={styles.submit}
                />
            </div>
        </form>
    );
}

export default RegisterForm;
