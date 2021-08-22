import React from 'react';
import styles from './Alert.module.scss';
import { AiFillAlert, AiOutlineClose } from 'react-icons/ai';

function Alert({ text, id, close }) {

    return (
        <div className={styles['container']}>
            <div className={styles['alert']}>
                <div className={styles['icon']}>
                    <AiFillAlert size={20} color="#E26E6E" />
                </div>
                <h2>
                    {text}
                </h2>
            </div>

            <div className={styles['icon']}>
                <AiOutlineClose color="#E26E6E" onClick={() => { close(id); }} />
            </div>
        </div>
    );
}

export default Alert;