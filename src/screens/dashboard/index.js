import React, { useState, useEffect } from 'react';
import { Forecast, Info, SideMenu, TodayWeather, Welcome, LocalInfo } from './components';
import styles from './Dashboard.module.scss';
import { Weather } from '../../data/weather';
import { Sensors } from '../../data/sensors';

function Dashboard() {

  const [weatherInfo, setWeatherInfo] = useState(undefined);
  const [localInfo, setLocalInfo] = useState(undefined);
  const [changes, setChanges] = useState(false);

  const getTodayWeatherInfo = async () => {
    const sensors = new Sensors();
    setLocalInfo(sensors.getAllVariables());

    setChanges(!changes);

    const weatherAPI = new Weather();
    const response = await weatherAPI.getTodayWeather();

    setWeatherInfo(response?.results);

    setChanges(!changes);
  }

  useEffect(async () => {
    await getTodayWeatherInfo();
  }, []);

  return (
    <div className={styles['container']}>
      <SideMenu />
      <div className={styles['right_col']}>

        <Welcome />
        <div className={styles['row1']}>
          <TodayWeather weatherInfo={weatherInfo} />
          <div className={styles['forecast']}>
            {
              weatherInfo != undefined &&
              Array.from(weatherInfo?.forecast)?.splice(1, 3)?.map((i) => { return <Forecast forecast={i} /> }
              )
            }
          </div>
        </div>

        <div className={styles['row2']}>
          {
            changes || true &&
            <>
              <Info weatherInfo={weatherInfo} />
              <LocalInfo localInfo={localInfo} />
            </>
          }
        </div>
      </div>


    </div>
  );
}

export default Dashboard;