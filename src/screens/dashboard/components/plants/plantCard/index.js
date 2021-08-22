import React from 'react';
import styles from './PlantCard.module.scss';
import InfoItem from './infoItem';

function PlantCard({ plant }) {

    return (
        <div className={styles['container']}>
            <div className={styles['image_container']}></div>
            <div className={styles['name']}>{plant.name}</div>
            <InfoItem title="Resistência" info={plant.resistency}/>
            <InfoItem title="Estação" info={plant.season}/>
            <InfoItem title="Clima" info={plant.weather}/>
            <InfoItem title="Umidade" info={plant.humidity}/>
            <InfoItem title="Luminosidade" info={plant.luminosity}/>
        </div>
    );
}

export default PlantCard;