import React from 'react';
import styles from './Generic.module.scss';

function GenericList({title, list}) {
    return (
        <div className={styles['container']}>
            <div className={styles['title']}>
                {title}
            </div>

            <div className={styles['list']}>
                {Array.from(list).map((e)=>{return e})}
            </div>
        </div>
    )
}

export default GenericList;