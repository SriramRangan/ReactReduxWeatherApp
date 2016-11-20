import React, { Component } from 'react';
import SearchBar from '../container/view_search_bar';
import WeatherDetails from '../container/view_weather_details';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherDetails />
      </div>
    );
  }
}
