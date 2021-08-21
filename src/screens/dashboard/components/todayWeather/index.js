import React, { useEffect } from 'react';
import {Weather} from '../../../../data/weather.js';

function TodayWeather() {

    useEffect(async ()=>{
        const weatherAPI = new Weather(); 
        const response = await weatherAPI.getTodayWeather();

        console.log(response)
    },[]);
    
  return <div />;
}

export default TodayWeather;