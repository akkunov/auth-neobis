import React, {useEffect} from 'react';
import useAuth from "../../hook/useAuth.js";
import {useNavigate} from "react-router-dom";
import styles from './main.module.css'
import Hero from "../../assets/svg/hero.svg";
import Logout from "../../components/ui/buttons/logout/logout.jsx";


function Main(props) {
    const {isAuth} = useAuth()
    const navigate = useNavigate()
    // useEffect(() =>{
    //     if (!isAuth) {
    //         navigate('/login')
    //     }
    // },[])

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>С возвращением!</h1>
            <span className={styles.subTitle}>Lorby - твой личный репетитор</span>
            <img src={Hero} alt="hero image" className={styles.img}/>
            <Logout />
        </div>
    );
}

export default Main;