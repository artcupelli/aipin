import React, { useEffect, useState } from 'react';
import { Weather } from '../../../../data/weather.js';
import styles from './TodayWeather.module.scss';
import { FiSun } from 'react-icons/fi'
import { BiMap } from 'react-icons/bi'

function TodayWeather({weatherInfo}) {

    return (
        <div className={styles['container']}>
            <div className={styles['left_square']}>
                <FiSun size={75} color="#A8D2C0" />
            </div>
            <div className={styles['info_container']}>
                <h3 className={styles['today']}>Hoje</h3>
                <h2 className={styles['temp']}>{weatherInfo?.temp + "°C"}</h2>
                <h3 className={styles['city']}><BiMap />{" " + weatherInfo?.city}</h3>
            </div>
        </div>
    );
}

export default TodayWeather;