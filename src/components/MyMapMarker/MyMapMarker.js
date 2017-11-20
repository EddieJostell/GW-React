import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import country_capitals from '../../country_capitals.json';
import sweden from '../../sweden.json';
import InfoWindowContent from '../InfoWindowContent/InfoWindowContent'


class MyMapMarker extends Component {

    state = {
        showInfo: false,
        currentWeather: [],
        fiveDayForecast: [],
        worldCapitals: []
    }

    componentDidMount() {
        this.setState({
            currentWeather: sweden,
            //worldCapitals: country_capitals
        })
    }

    getLatLong() {
        for (var cord in country_capitals) {
            if (country_capitals.hasOwnProperty(cord)) {
                let cordinates = country_capitals[cord];
               
                var lat = parseFloat(cordinates.CapitalLatitude);
                var long = parseFloat(cordinates.CapitalLongitude);
                //console.log(lat, long)
                this.getWeatherFromAPI(lat, long);
            }
        }
    }

    getWeatherFromAPI(lat, long) {
        console.log(lat, long);
      
        let weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05`; //`sweden.json` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05 | eb3bc19f92d9df047f452e1230df445c
        fetch(weather)
            .then(response => response.json())
            .then(data => {
 
                //console.log(data);
                this.setState({ currentWeather: data });
            })
 
            .catch(error => console.log(error))
    }

    toggleShowInfo = () => {
        //this.getLatLong();
        this.setState({ showInfo: !this.state.showInfo });
    }

    closeInfo = () => {
        this.setState({ showInfo: false })
    }

    render() {

        const weather = this.state.currentWeather.map((w, i) => {
            return <InfoWindowContent key={i}
                name={w.name}
                temp={w.main.temp}
                windSpeed={w.wind.speed}
                windDeg={w.wind.deg}
                humidity={w.main.humidity}
                weather={w.weather[0].main}
                wicon={w.weather[0].id}
            />
        });


        return(
            <Marker
                onClick={this.toggleShowInfo}
                {...this.props}
            >
                {this.state.showInfo && (
                    <InfoWindow
                        onCloseClick={this.closeInfo}
                    >
                        <div>
                            <h2>{this.props.title}</h2>
                            {weather}
                        </div>
                    </InfoWindow>
                )}
            </Marker>

        )
    }
}

export default MyMapMarker;