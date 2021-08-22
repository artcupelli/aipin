import React, { useState, useEffect } from 'react';
import { Forecast, Info, SideMenu, TodayWeather, Welcome, LocalInfo } from './components';
import styles from './Dashboard.module.scss';
import { Weather } from '../../data/weather';
import { Sensors } from '../../data/sensors';

function Dashboard() {

  const [weatherInfo, setWeatherInfo] = useState();
  const [localInfo, setLocalInfo] = useState();
  const [changes, setChanges] = useState(false);


  const getSensorsInfo = () => {
    var sensor = new Sensors();
    const database = sensor.getRealtimeDatabase()

    database.on('value', (snapshot) => {
      setLocalInfo(snapshot.val());
    })

  }

  const getTodayWeatherInfo = async () => {
    const weatherAPI = new Weather();
    const response = await weatherAPI.getTodayWeather();

    setWeatherInfo(response?.results);
  }

  useEffect(async () => {
    await getTodayWeatherInfo();
    getSensorsInfo();
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
            (changes || !changes) &&
            <>
              <Info weatherInfo={weatherInfo} />
              <LocalInfo localInfo={localInfo}/>
            </>
          }
        </div>
      </div>


    </div>
  );
}

export default Dashboard;