import React from 'react';
import {useNavigate} from "react-router-dom";
import leftIcon from '../../../../assets/icon/arrowleft.svg'
import styles from './goBack.module.css';
function GoBack(props) {
    const navigate = useNavigate()
    function handleNavigate(){
        navigate(-1);
    }
    return (
        <button onClick={handleNavigate} className={styles.button}>
            <span className={styles.imgContainer}>
                <img src={leftIcon} alt="left icon"/>
            </span>

            Назад
        </button>
    );
}

export default GoBack;