import axios from 'axios';

export class Weather {

    async getTodayWeather(city = "455903"){

      const api = axios.create({baseURL: "https://api.hgbrasil.com/weather?woeid=455903"})

      var response = await api.get();

      console.log(response)

      // response = await {
      //       "by": "woeid",
      //       "valid_key": false,
      //       "results": {
      //         "temp": 30,
      //         "date": "21/08/2021",
      //         "time": "12:18",
      //         "condition_code": "27",
      //         "description": "Tempo limpo",
      //         "currently": "dia",
      //         "cid": "",
      //         "city": "Ribeirão Preto, SP",
      //         "img_id": "27",
      //         "humidity": 19,
      //         "wind_speedy": "2.06 km/h",
      //         "sunrise": "06:29 am",
      //         "sunset": "05:59 pm",
      //         "condition_slug": "clear_day",
      //         "city_name": "Ribeirão Preto",
      //         "forecast": [
      //           {
      //             "date": "21/08",
      //             "weekday": "Sáb",
      //             "max": 33,
      //             "min": 16,
      //             "description": "Tempo limpo",
      //             "condition": "clear_day"
      //           },
      //           {
      //             "date": "22/08",
      //             "weekday": "Dom",
      //             "max": 33,
      //             "min": 17,
      //             "description": "Tempo limpo",
      //             "condition": "clear_day"
      //           },
      //           {
      //             "date": "23/08",
      //             "weekday": "Seg",
      //             "max": 35,
      //             "min": 18,
      //             "description": "Tempo limpo",
      //             "condition": "clear_day"
      //           },
      //           {
      //             "date": "24/08",
      //             "weekday": "Ter",
      //             "max": 37,
      //             "min": 19,
      //             "description": "Tempo limpo",
      //             "condition": "clear_day"
      //           },
      //           {
      //             "date": "25/08",
      //             "weekday": "Qua",
      //             "max": 37,
      //             "min": 20,
      //             "description": "Tempo limpo",
      //             "condition": "clear_day"
      //           },
      //           {
      //             "date": "26/08",
      //             "weekday": "Qui",
      //             "max": 37,
      //             "min": 22,
      //             "description": "Tempo nublado",
      //             "condition": "cloudly_day"
      //           },
      //           {
      //             "date": "27/08",
      //             "weekday": "Sex",
      //             "max": 33,
      //             "min": 18,
      //             "description": "Tempo nublado",
      //             "condition": "cloudly_day"
      //           },
      //           {
      //             "date": "28/08",
      //             "weekday": "Sáb",
      //             "max": 31,
      //             "min": 18,
      //             "description": "Tempo nublado",
      //             "condition": "cloudly_day"
      //           },
      //           {
      //             "date": "29/08",
      //             "weekday": "Dom",
      //             "max": 30,
      //             "min": 19,
      //             "description": "Tempo nublado",
      //             "condition": "cloudly_day"
      //           },
      //           {
      //             "date": "30/08",
      //             "weekday": "Seg",
      //             "max": 28,
      //             "min": 16,
      //             "description": "Chuva",
      //             "condition": "rain"
      //           }
      //         ]
      //       },
      //       "execution_time": 0.0,
      //       "from_cache": true
      //     };



        return response.data
    }
}

