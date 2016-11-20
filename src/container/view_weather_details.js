/**
 * Created by SriramRanganathan on 11/20/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/view_chart';

class WeatherDetails extends Component {

    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temperatureArray = cityData.list.map(weather => weather.main.temp);
        const pressureArray = cityData.list.map(weather => weather.main.pressure);
        const humidityArray = cityData.list.map(weather => weather.main.humidity);

        return (
          <tr key={cityName}>
              <td>{cityName}</td>
              <td>
                  <Chart data={temperatureArray} color="orange"/>
              </td>
              <td>
                  <Chart data={pressureArray} color="purple"/>
              </td>
              <td>
                 <Chart data={humidityArray} color="pink"/>
              </td>
          </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weatherData.map(this.renderWeather)}
                </tbody>
            </table>

        );
    }
}

function mapStateToProps(state) {
    return {
        weatherData : state.weather
    }
}

export default connect(mapStateToProps)(WeatherDetails);
