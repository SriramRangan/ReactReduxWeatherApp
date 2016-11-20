import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather_data';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
