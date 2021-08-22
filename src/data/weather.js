import axios from 'axios';

export class Weather {

    async getTodayWeather(city = "455903"){

      const api = axios.create({baseURL: "https://api.hgbrasil.com"})

      var response = await api.get("/weather?woeid=455903");

        return response.data
    }
}

