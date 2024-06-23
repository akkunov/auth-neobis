import React, { useState, useEffect } from 'react';
import styles from './customAlert.module.css';

const CustomAlert = ({ message, duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

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
