import React from 'react';
import styles from './logout.module.css'
function Logout(props) {
    return (
        <button className={styles.logout}>
            Выйти
        </button>
    );
}

export default Logout;