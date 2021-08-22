import React from 'react';
import styles from './Info.module.scss';
import InfoItem from './infoItem';
import {IoBulbOutline} from 'react-icons/io5';

function CityInfo({weatherInfo}) {

  return weatherInfo != undefined && (
      <div className={styles['container']}>
          <h2 className={styles['main_title']}><IoBulbOutline color="gray"/>{" "}Informações da sua cidade</h2>
          <InfoItem title="Nascer do Sol" info={weatherInfo?.sunrise}/>
          <hr/>
          <InfoItem title="Pôr do Sol" info={weatherInfo?.sunset}/>
          <hr/>
          <InfoItem title="Velocidade do Vento" info={weatherInfo?.wind_speedy}/>
          <hr/>
          <InfoItem title="Umidade do Ar" info={weatherInfo?.humidity+"%"}/>
          <hr/>
          <InfoItem title="Atualizado" info={weatherInfo?.time}/>
          <hr/>
          <InfoItem title="Condição" info={weatherInfo?.description}/>
      </div>
  );
}

export default CityInfo;