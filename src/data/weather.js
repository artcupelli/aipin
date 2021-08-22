import axios from 'axios';
import proxy from 'http-proxy-middleware';

export class Weather {

    async getTodayWeather(city = "455903"){

      const api = axios.create()

      // var response = await api.get("/weather?woeid=455903");

      // return response.data

      return {
        "by": "woeid",
        "valid_key": false,
        "results": {
          "temp": 20,
          "date": "22/08/2021",
          "time": "01:46",
          "condition_code": "27",
          "description": "Tempo limpo",
          "currently": "noite",
          "cid": "",
          "city": "Ribeirão Preto, SP",
          "img_id": "27n",
          "humidity": 40,
          "wind_speedy": "3.09 km/h",
          "sunrise": "06:28 am",
          "sunset": "05:59 pm",
          "condition_slug": "clear_night",
          "city_name": "Ribeirão Preto",
          "forecast": [
            {
              "date": "08-22",
              "weekday": "Sun",
              "max": 32,
              "min": 16,
              "description": "Night Mostly cloudy",
              "condition": "clear_day"
            },
            {
              "date": "08-23",
              "weekday": "Mon",
              "max": 35,
              "min": 17,
              "description": "Night Mostly cloudy",
              "condition": "clear_day"
            },
            {
              "date": "08-24",
              "weekday": "Tue",
              "max": 37,
              "min": 19,
              "description": "Night Mostly cloudy",
              "condition": "clear_day"
            },
            {
              "date": "08-25",
              "weekday": "Wed",
              "max": 37,
              "min": 20,
              "description": "Night Mostly cloudy",
              "condition": "clear_day"
            },
            {
              "date": "08-26",
              "weekday": "Thu",
              "max": 37,
              "min": 22,
              "description": "Night partly cloudy",
              "condition": "cloudly_day"
            },
            {
              "date": "08-27",
              "weekday": "Fri",
              "max": 35,
              "min": 17,
              "description": "Scattered showers",
              "condition": "rain"
            },
            {
              "date": "08-28",
              "weekday": "Sat",
              "max": 33,
              "min": 20,
              "description": "Day mostly cloudy",
              "condition": "cloudly_day"
            },
            {
              "date": "08-29",
              "weekday": "Sun",
              "max": 26,
              "min": 18,
              "description": "Day mostly cloudy",
              "condition": "cloudly_day"
            },
            {
              "date": "08-30",
              "weekday": "Mon",
              "max": 20,
              "min": 17,
              "description": "Thundershowers",
              "condition": "rain"
            },
            {
              "date": "08-31",
              "weekday": "Tue",
              "max": 30,
              "min": 15,
              "description": "Scattered showers",
              "condition": "rain"
            }
          ]
        },
        "execution_time": 0.0,
        "from_cache": true
      }
    }
}
