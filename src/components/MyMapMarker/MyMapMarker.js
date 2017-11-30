import sweden from "../../sweden.json";
import React, { Component } from "react";
import forecast_sthlm from "../../forecast_sthlm.json";
import { Marker, InfoWindow } from "react-google-maps";
import InfoWindowContent from "../InfoWindowContent/InfoWindowContent";
import weatherfetching, {
  getWeatherFromAPI
} from "../../lib/weatherfetching.js";

class MyMapMarker extends Component {
  state = {
    showInfo: false,
    currentWeather: [],
    dailyForecast: []
  };

  componentWillReceiveProps(newProps) {
    if (this.state.showInfo) {
      this.setState({ showInfo: false }, () =>
        this.setState({ showInfo: true })
      );
    }
  }

  componentDidMount() {
    this.setState({
      currentWeather: sweden,
      dailyForecast: sweden
    });
  }

  getWeatherFromAPI = () => {
    var lat = this.props.position.lat;
    var lng = this.props.position.lng;
    getWeatherFromAPI(lat, lng)
      .then(wData => {
        //We need to create a new InfoWindow because of this https://github.com/tomchentw/react-google-maps/issues/696
        this.setState({ showInfo: false }, () =>
          this.setState({
            showInfo: true,
            currentWeather: wData,
            dailyForecast: wData
          })
        );
      })
      .catch(error => console.log(error));
  };

  toggleShowInfo = () => {
    //this.getWeatherFromAPI();
    console.log("toggledOn");
    if(this.props.noInfoWindows === true) {
       this.setState({ showInfo: !this.state.showInfo });
    }
    this.setState({ showInfo: !this.state.showInfo });
  };

  closeInfo = () => {
    console.log("toggledOff");
    this.setState({ showInfo: false });
  };

  render() {
      console.log(this.props.noInfoWindows)
    const weather = this.state.currentWeather.map((w, i) => (
      <InfoWindowContent
        key={i}
        name={w.name}
        temp={w.main.temp}
        windSpeed={w.wind.speed}
        windDeg={w.wind.deg}
        humidity={w.main.humidity}
        weather={w.weather[0].main}
        wicon={w.weather[0].id}
      />
    ));

    return (
      <Marker onClick={this.toggleShowInfo} {...this.props}>
        {!this.props.noInfoWindows &&
          this.state.showInfo && (
            <InfoWindow onCloseClick={this.closeInfo}>
              <div>
                <a
                  className="title"
                  onClick={() =>
                    this.props.displayContent(
                      this.state.dailyForecast,
                      this.props.title,
                      this.props.position.lat,
                      this.props.position.lng
                    )
                  }
                >
                  <h3>{this.props.title}</h3>
                </a>
                {weather}
              </div>
            </InfoWindow>
          )}
      </Marker>
    );
  }
}

export default MyMapMarker;
