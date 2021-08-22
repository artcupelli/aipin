import React from 'react';
import styles from './PestCard.module.scss';
import InfoItem from './infoItem';

function PestCard({ pest }) {

    return (
        <div className={styles['container']}>
            <div className={styles['name']}>{pest.name}</div>
            <InfoItem title="Agente" info={pest.who}/>
            <InfoItem title="Danos" info={pest.damage}/>
            <InfoItem title="Controle" info={pest.control}/>
        </div>
    );
}

export default PestCard;