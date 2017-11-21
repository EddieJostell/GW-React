import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import InfoWindowContent from '../InfoWindowContent/InfoWindowContent'
import sweden from '../../sweden.json';


class MyMapMarker extends Component {

    state = {
        showInfo: false,
        currentWeather: [],
        fiveDayForecast: [],
    }

    componentDidMount() {
        /* this.setState({
            currentWeather: sweden
        }) */
    }

    getWeatherFromAPI() {
      console.log("In here on marker click!");
       
        var lat = this.props.position.lat;
        var long = this.props.position.lng;
        var wData = [];

        let weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05`; // https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05 | eb3bc19f92d9df047f452e1230df445c
        fetch(weather)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                wData.push(data);
                console.log(wData);
                //We need to create a new InfoWindow because of this https://github.com/tomchentw/react-google-maps/issues/696
                this.setState({ showInfo: false }, () => this.setState({ showInfo: true, currentWeather: wData }) );
            })
            .catch(error => console.log(error))
            //this.renderWeather();
    }

   /*  renderWeather() {
        console.log("In here after marker click!")
       return this.state.currentWeather.map((w, i) =>
            <InfoWindowContent key={i}
                name={w.name}
                temp={w.main.temp}
                windSpeed={w.wind.speed}
                windDeg={w.wind.deg}
                humidity={w.main.humidity}
                weather={w.weather[0].main}
                wicon={w.weather[0].id}
            />
        );
        
    } */

    toggleShowInfo = () => {
        this.getWeatherFromAPI();
       
        this.setState({ showInfo: !this.state.showInfo });
    }

    closeInfo = () => {
        this.setState({ showInfo: false })
    }

    render() {
        
        const weather = this.state.currentWeather.map((w, i) => 
            <InfoWindowContent key={i}
                name={w.name}
                temp={w.main.temp}
                windSpeed={w.wind.speed}
                windDeg={w.wind.deg}
                humidity={w.main.humidity}
                weather={w.weather[0].main}
                wicon={w.weather[0].id}
            />
        );


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
                          {/*  {this.renderWeather(console.log("Rendering before being a callback!"))} */}
                        </div>
                    </InfoWindow>
                )}
            </Marker>

        )
    }
}

export default MyMapMarker;