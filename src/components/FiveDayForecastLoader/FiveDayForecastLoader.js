import React, { Component } from "react";
import FiveDayForecastContent from "../FiveDayForecastContent/FiveDayForecastContent";

class FiveDayForecastLoader extends Component {
  state = {
    fiveDayForecast: []
  };

  componentWillReceiveProps(newProps) {
    if (this.props.lat === newProps.lat && this.props.lng === newProps.lng) {
      return;
    }
    //this.executeGetFiveDay(newProps);
  }
  componentDidMount() {
    //this.executeGetFiveDay(this.props);
  }
  executeGetFiveDay = loadFromProps => {
    this.setState({ fiveDayForecast: [] });
    var fiveDayForecastRetreval = this.get5dayForecastFromAPI(loadFromProps);
    fiveDayForecastRetreval.then(fiveDayForecast =>
      this.setState({ fiveDayForecast })
    ); // Short hand for setting state of the same name.
  };

  get5dayForecastFromAPI = loadFromProps => {
    var lat = loadFromProps.lat;
    var long = loadFromProps.lng;

    let forecast = 
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05`; 
    //`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05` | eb3bc19f92d9df047f452e1230df445c
    return fetch(forecast)
      .then(response => response.json())
      .then(data =>
        data.list.reduce((aggregate, listItem) => {
          if (new Date(listItem.dt_txt).getHours() === 12) {
            aggregate.push(listItem);
          }
          return aggregate;
        }, [])
      )
      .catch(error => console.log(error));
  };

  render() {
    return this.state.fiveDayForecast.map((five, i) => (
      <FiveDayForecastContent
        key={i}
        dt_txt={five.dt_txt}
        description={five.weather[0].description}
        temp={five.main.temp}
        humidity={five.main.humidity}
        windSpeed={five.wind.speed}
        windDeg={five.wind.deg}
        wicon={five.weather[0].id}
      />
    ));
  }
}

export default FiveDayForecastLoader;
