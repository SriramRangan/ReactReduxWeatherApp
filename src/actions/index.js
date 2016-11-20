import Axios from 'axios';
const API_KEY = '3513883cbae7d338fb2d341deb099b26';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const URL = `${ROOT_URL}&q=${city},US`;
    const request = Axios.get(URL);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}


