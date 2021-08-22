import React, { useState, useEffect } from 'react';
import { Forecast, Info, SideMenu, TodayWeather, Welcome, LocalInfo, Plants } from './components';
import styles from './Dashboard.module.scss';
import { Weather } from '../../data/weather';
import { Sensors } from '../../data/sensors';
import { Plant } from '../../data/plants';

function Dashboard({ goToHome }) {

  const [weatherInfo, setWeatherInfo] = useState();
  const [localInfo, setLocalInfo] = useState();
  const [changes, setChanges] = useState(false);
  const [screen, setScreen] = useState("dashboard");


  const getSensorsInfo = () => {
    // var sensor = new Sensors();
    // const database = sensor.getRealtimeDatabase()

    // database.on('value', (snapshot) => {
    //   setLocalInfo(snapshot.val());
    // })
    setLocalInfo({
      climate_type: 5,
      distance: 250,
      humidity: 45,
      led: "#FF0000",
      photoresistor: "Alta",
      plant_resistance: 5,
      temperature: 22
    })

  }

  const getTodayWeatherInfo = async () => {
    const weatherAPI = new Weather();
    const response = await weatherAPI.getTodayWeather();

    setWeatherInfo(response?.results);
  }


  useEffect(async () => {
    getSensorsInfo();
    await getTodayWeatherInfo();
  }, []);

  return (
    <div className={styles['container']}>
      <SideMenu goToHome={setScreen} />
      {
        screen === "dashboard" &&
        (
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
            {
              (changes || !changes) &&
              <div className={styles['row2']}>

                <Info weatherInfo={weatherInfo} />
                <LocalInfo localInfo={localInfo} />

              </div>
            }
          </div>

        )
      }
      {
        screen === "plants" &&
        (
          (changes || !changes) &&
          <Plants />
        )
      }



    </div>
  );
}

export default Dashboard;