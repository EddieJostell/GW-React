import React, { Component } from 'react';
import MyMapComponent from './components/MyMapComponent/MyMapComponent.js';
import ForecastContent from './components/ForecastContent/ForecastContent';
import FiveDayForecastLoader from './components/FiveDayForecastLoader/FiveDayForecastLoader';
import CapitalDropDown from './components/CapitalDropDown/CapitalDropDown';
import './sass/App.css';

class App extends Component {

  state = {
    dailyForecast: [],
    showMoreWeather: false,
    allMyMarkers: []
  }


  componentDidMount() {
   
  }

  showMeMore = (dayForeCast, title, lat, lng, country, id) => {
    console.log("I REACHED HERE FROM ANOTHER COMPONENT!!");

    this.setState({
      dailyForecast: dayForeCast,
      lat: lat,
      lng: lng,
      showMoreWeather: true,
      title: title,
      country: country,
      id: id
    })
    
  }

  hideWindow = () => {
    this.setState({ showMoreWeather: false })
  }

  render() {
    const extendedContent = this.state.dailyForecast.map((day, i) =>
      <ForecastContent key={i}
        name={this.state.title}
        temp={day.main.temp}
        windSpeed={day.wind.speed}
        windDeg={day.wind.deg}
        humidity={day.main.humidity}
        weather={day.weather[0].main}
        wicon={day.weather[0].id}
      />
    )

    return <div className="App">
        <MyMapComponent center={{ lat: 52.520007, lng: 13.404954 }} zoom={5} containerElement={<div style={{ height: "auto", width: "100%" }} />} mapElement={<div style={{ height: "100vh", width: "100vw" }} />} displayContent={this.showMeMore} allMyMarkers={this.state.allMyMarkers} />

        {this.state.showMoreWeather ? <div className="addInfo" id="capital">
            <div className="flexme">
              {/* <div id="dropDown">
              <label htmlFor="selectCity">Select another capital</label>
              <select id="selectCity">
                <option value="0">* World Capitals *</option>
              </select>
            </div> */}
              <CapitalDropDown 
              lat={this.state.lat}
              lng={this.state.lng} 
              title={this.state.title}
              country={this.state.country}
              id={this.state.id}
              />

              <div className="btnDiv">
                <a aria-label="Close" onClick={this.hideWindow} className="backBtn">
                  <h5>[&times;]</h5>
                </a>
              </div>
            </div>

            <div className="weatherDiv">{extendedContent}</div>

            <div className="forecastDiv">
              <FiveDayForecastLoader lat={this.state.lat} lng={this.state.lng} />
            </div>
          </div> : null}
      </div>;
  }
}

export default App;