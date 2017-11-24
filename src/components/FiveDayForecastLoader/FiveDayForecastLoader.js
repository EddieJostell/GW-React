import React, { Component } from 'react';
import FiveDayForecastContent from '../FiveDayForecastContent/FiveDayForecastContent';


class FiveDayForecastLoader extends Component {

    state = {
        fiveDayForecast: []
    }

    componentWillReceiveProps(newProps) {
        if (this.props.lat === newProps.lat && this.props.lng === newProps.lng) {
            return
        }
        this.get5dayForecastFromAPI();
    }

    get5dayForecastFromAPI = () => {
        var lat = this.props.lat;
        var long = this.props.lng;
        var fData = [];

        let forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05`; //`forecast-sthlm.json` `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05` | eb3bc19f92d9df047f452e1230df445c
        fetch(forecast)
            .then(response => response.json())
            .then(data => {
                //console.log(data);

                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        var element = data[key];
                        var fiver = element.list;

                        for (var akey in fiver) {
                            if (fiver.hasOwnProperty(akey)) {
                                var FIVE = fiver[akey];
                                fData.push(FIVE);
                            }
                        }
                    }
                }
                this.setState({ showInfo: false }, () => this.setState({ showInfo: true, fiveDayForecast: fData }));

            })
            .catch(error => console.log(error))
    }


    render() {

        var fiveDay = [];
        for (var i = 0; i < this.state.fiveDayForecast.length; i += 8) {
            var five = this.state.fiveDayForecast[i];
            fiveDay.push(
                <FiveDayForecastContent key={i}
                    dt_txt={five.dt_txt}
                    description={five.weather[0].description}
                    temp={five.main.temp}
                    humidity={five.main.humidity}
                    windSpeed={five.wind.speed}
                    windDeg={five.wind.deg}
                    wicon={five.weather[0].id}
                />)
        }


        return(
            fiveDay
        )

    }
}

export default FiveDayForecastLoader;