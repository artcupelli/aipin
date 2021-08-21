import axios from 'axios';

export class Weather {

    async getTodayWeather(city = "455903"){
        const api = axios.create({
            baseURL: "https://api.hgbrasil.com",
            withCredentials: false,
            crossorigin: false,
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              }
          });


        const response = await api.get("/weather?woeid="+city );

        return response
    }
}

