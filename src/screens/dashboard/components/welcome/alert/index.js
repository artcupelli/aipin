import React from 'react';
import styles from './Alert.module.scss';
import { AiFillAlert, AiOutlineClose } from 'react-icons/ai';

function Alert({ text, id, close }) {

    return (
        <div className={styles['container']}>
            <div className={styles['alert']}>
                <AiFillAlert size={20} color="#E26E6E" />
                <h2>
                    {text}
                </h2>
            </div>
            <AiOutlineClose color="#E26E6E" onClick={()=>{close(id);}}/>
        </div>
    );
}

export default Alert;