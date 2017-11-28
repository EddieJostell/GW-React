import React, { Component } from 'react';
import country_capitals from './country_capitals.json'
import MyMapComponent from './components/MyMapComponent/MyMapComponent.js';
import BigWindowComponent from './components/BigWindowComponent/BigWindowComponent';
import './sass/App.css';

class App extends Component {
  state = {
    bigWindow: { dailyForecast: [] },
    showMoreWeather: false,
    allMyMarkers: []
  };

  componentDidMount() {
    this.setState({ allMyMarkers: country_capitals });
  }

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

  onDropDownSelected = (name, lat, lng, dayCast) => {
    this.showMeMore([dayCast], name, lat, lng);
  }

  render() {
   
    return (
      <div className="App">
        <MyMapComponent
          center={{ lat: 52.520007, lng: 13.404954 }}
          zoom={5}
          containerElement={<div style={{ height: "auto", width: "100%" }} />}
          mapElement={<div style={{ height: "100vh", width: "100vw" }} />}
          displayContent={this.showMeMore}
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