import { url_base_weather,API_KEY } from './../constants/api_url';

const getUrlWeatherByCity = city => {
    return `${url_base_weather}?q=${city}&APPID=${API_KEY}`; //&units=metric;
}

export default getUrlWeatherByCity;