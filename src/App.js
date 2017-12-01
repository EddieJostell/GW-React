import "./sass/App.css";
import React, { Component } from "react";
import country_capitals from "./country_capitals.json";
import { WithGoogleMap, GoogleMap } from "react-google-maps";
import MyMapComponent from "./components/MyMapComponent/MyMapComponent.js";
import BigWindowComponent from "./components/BigWindowComponent/BigWindowComponent";

class App extends Component {
  state = {
    bigWindow: { dailyForecast: [] },
    showMoreWeather: false,
    zoomLevel: 5,
    center: { lat: 52.520007, lng: 13.404954 },
    noInfoWindows: false
  };

  componentDidMount() {}

  showMeMore = (dayForeCast, title, lat, lng) => {
    console.log("I REACHED HERE FROM ANOTHER COMPONENT!!");

    this.setState({
      showMoreWeather: true,
      bigWindow: {
        title: title,
        lat: lat,
        lng: lng,
        dailyForecast: dayForeCast
      }
    });
  };

  hideWindow = () => {
    this.setState({ showMoreWeather: false });
  };

  onDropDownSelected = (name, lat, lng, dayForeCast) => {
    this.showMeMore(dayForeCast, name, lat, lng);
    this.setState({
      noInfoWindows: true
    }),
      this.setState({
        center: { lat: lat, lng: lng },
        zoomLevel: 7,
        noInfoWindows: false
      });
  };

  render() {
    return (
      <div className="App">
        <MyMapComponent
          center={this.state.center}
          zoom={this.state.zoomLevel}
          containerElement={<div style={{ height: "auto", width: "100%" }} />}
          mapElement={<div style={{ height: "100vh", width: "100vw" }} />}
          displayContent={this.showMeMore}
          noInfoWindows={this.state.noInfoWindows}
        />
        {this.state.showMoreWeather ? (
          <BigWindowComponent
            {...this.state.bigWindow}
            hideWindow={this.hideWindow}
            selected={this.onDropDownSelected}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
