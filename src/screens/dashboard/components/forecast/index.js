import React from 'react';
import styles from './Forecast.module.scss';
import {AiFillCloud} from 'react-icons/ai';


function Forecast({forecast}) {
  return (
      <div className={styles['container']}>
          <AiFillCloud size={60} color="A8D2C0"/>
            <h1 className={styles['date']}>{forecast?.date}</h1>
            <h3 className={styles['temp']}>{"min "+forecast?.min + " | máx " + forecast?.max}</h3>
            <h3 className={styles['description']}>{forecast?.description}</h3>
      </div>
  );
}

export default Forecast;