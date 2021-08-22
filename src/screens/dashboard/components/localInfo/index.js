import React, { useEffect } from 'react';
import styles from './Info.module.scss';
import InfoItem from './infoItem';
import {IoBulbOutline} from 'react-icons/io5';

function LocalInfo({localInfo}) {
  

  const mapNumberToWeather = (id) => {
    const weathers = new Map();

    weathers.set(1, "Tropical");
    weathers.set(2, "Árido");
    weathers.set(3, "Temperado");
    weathers.set(4, "Continental");
    weathers.set(5, "Polar");

    return weathers.get(id);
  }


  return (
      <div className={styles['container']} style={{border: "1px solid", borderColor: localInfo?.led}}>
          <h2 className={styles['main_title']}> <IoBulbOutline color={localInfo?.led} />{"  "}Informações dos Sensores</h2>
          <InfoItem title="Temperatura" info={localInfo?.temperature+ "°C"}/>
          <hr/>
          <InfoItem title="Resistência da plantação" info={localInfo?.plant_resistance+" / 5"}/>
          <hr/>
          <InfoItem title="Umidade" info={localInfo?.humidity+"%"}/>
          <hr/>
          <InfoItem title="Índice de Luminosidade" info={localInfo?.photoresistor }/>
          <hr/>
          <InfoItem title="Tipo Climático" info={mapNumberToWeather(localInfo?.climate_type) }/>
          <hr/>
          <InfoItem title="Objeto mais Próximo" info={localInfo?.distance+"cm" }/>

      </div>
  );
}

export default LocalInfo;