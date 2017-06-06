import React, { Component } from 'react';
import './App.css';

const APPID = '9de3faeca88c17887b1c8ba5b63ac99f';
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const options= '&units=metric&APPID=';

class App extends Component {
  constructor() {
    super()
      this.handleSelect = this.handleSelect.bind(this);
      this.fetchWeather = this.fetchWeather.bind(this);
      this.state = {
        city: 'london',
        temperature: null
      }
  }

  componentDidMount() {
    this.fetchWeather(this.state.city);
  }

  fetchWeather(city) {
    fetch(baseUrl+ city + options + APPID)
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data)
        this.setState({temperature:data.main.temp})
      });
  }
  handleSelect(e) {
  //  console.log(e.target.value);
   this.setState({city:e.target.value});
   this.fetchWeather(e.target.value);
  }

  render() {
    //console.log(this.state.city, this.state.temperature);
    return (
      <div className="App">
        <span>Temperature for </span>
        <select onChange={this.handleSelect}>
          <option value='london'>London</option>
          <option value='rio'>Rio</option>
          <option value='lagos'>Lagos</option>
          <option value='gdansk'>Gdansk</option>
          <option value='miami'>Miami</option>
        </select>
        {this.state.temperature}
      </div>
    );
  }
}

export default App;
