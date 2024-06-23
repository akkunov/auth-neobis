import React from 'react';
import styles from "./verification.module.css";
import GoBack from "../../components/buttons/goBack/goBack.jsx";
import Hero from "../../assets/svg/hero.svg";
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "375px",
        height:"300px",
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: "border-box",
        borderRadius: '3.2rem'
    },
};


function Verification({email}) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let subtitle;

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className={styles.container}>
            <GoBack />
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    <img src={Hero} alt="hero image"/>
                    <h1 className={styles.title}>Lorby</h1>
                    <span className={styles.subTitle}>Твой личный репетитор</span>
                </div>
                <div className={styles.verifContainer}>
                    <p className={styles.verifTitle}>
                        Выслали письмо со
                        ссылкой для завершения регистрации на
                        {email}
                    </p>
                    <p className={styles.verifInfo}>
                        Если письмо не пришло, не спеши ждать совиную почту - лучше проверь ящик “Спам”
                    </p>
                    <span className={styles.smile}>(´｡• ω •｡`)</span>
                    <button onClick={openModal} className={styles.newLink}>
                        Письмо не пришло
                    </button>
                    <Modal
                        isOpen={modalIsOpen}
                        contentLabel="Example Modal"
                        style={customStyles}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                    >
                        <p className={styles.modalTitle}>
                            Мы выслали еще одно письмо на указанную тобой почту example@gmail.com
                        </p>
                        <span className={styles.spam}>
                            Не забудь проверить
                            ящик “Спам”!11!!!!
                        </span>
                        <button  className={styles.closeModal} onClick={closeModal}>Понятно!!1!</button>
                    </Modal>

                </div>
            </div>
        </div>
    );
}

export default Verification;
