
const location = "La Vega, DO";
const API_KEY = ``; // YOUR API KEY
const url_base_weather = `http://api.openweathermap.org/data/2.5/weather`;


export const api_weather = `${url_base_weather}?q=${location}&APPID=${API_KEY}`; //&units=metric;