import React, { useState, useEffect } from 'react';
import styles from './customAlert.module.css';
import {useSelector} from "react-redux";



const CustomAlert = ({ message, duration = 3000, onClose,deps }) => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration,deps]);

    if (!visible) {
        return null;
    }

    return (
        <div className={`${styles.alert} ${styles.show}`}>
            {message}
        </div>
    );
};

export default CustomAlert;
