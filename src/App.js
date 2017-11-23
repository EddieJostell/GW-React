import React, { Component } from 'react';
import MyMapComponent from './components/MyMapComponent/MyMapComponent.js';
/* import {compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'; */
import ForecastContent from './components/ForecastContent/ForecastContent';
import FiveDayForecastContent from './components/FiveDayForecastContent/FiveDayForecastContent';
import './sass/App.css';

class App extends Component {

  state = {
    dailyForecast: [],
    showMoreWeather: false,
    fiveDayForecast: []
  }


  componentDidMount() {

  }
  
    leCallback = (dayCast, fiveDayCast) => {
      // console.log(fiveDayCast);
      var newFiverCast = [];
  
      for (var key in fiveDayCast) {
        if (fiveDayCast.hasOwnProperty(key)) {
          var element = fiveDayCast[key];
          var fiver = element.list;
          //newFiverCast.push(fiver);
        }
      }
      //console.log(newFiverCast)
      this.setState({
        dailyForecast: dayCast,
        fiveDayForecast: newFiverCast
  
      });
      //console.log(fiveDayCast);
    }

  showMeMore = (dayForeCast, fiverForecast) => {
    console.log("I REACHED HERE FROM ANOTHER COMPONENT!!");
      
  /*     for (var key in fiveForecast) {
        if (fiveForecast.hasOwnProperty(key)) {
          var element = fiveForecast[key];
          var fiver = element.list;
          //newFiverCast.push(fiver);
        }
      } */
   
    this.setState({ 
        dailyForecast: dayForeCast,
        fiveDayForecast: fiverForecast,
        showMoreWeather: true })

  }

  RedBoxFun = () => {
    if (this.state.showMoreWeather === true) {
      this.setState({ showMoreWeather: false })
      //console.log("ShowMoreWeather State changed to: ", this.state.showMoreWeather);
    }
    else {
      this.setState({ showMoreWeather: true })
      //console.log("ShowMoreWeather State changed to: ", this.state.showMoreWeather);
    }

  }

  render() {
    console.log(this.state.fiveDayForecast);

    const extendedContent = this.state.dailyForecast.map((day, i) =>
      <ForecastContent key={i}
        name={day.name}
        temp={day.main.temp}
        windSpeed={day.wind.speed}
        windDeg={day.wind.deg}
        humidity={day.main.humidity}
        weather={day.weather[0].main}
        wicon={day.weather[0].id}
      />
    )

    //console.log(this.state.fiveDayForecast);

  /*   const fiveDayContent = this.state.fiveDayForecast.map((five, i) =>
      <FiveDayForecastContent key={i}
        dt_txt={five.dt_txt}
        //description={five.weather[0].description} 
        temp={five.main.temp}
        humidity={five.main.humidity}
        windSpeed={five.wind.speed}
        windDeg={five.wind.deg}
      //wicon={five.weather[0].id} 
      />
    ) */


    return (
      <div className="App">
        <MyMapComponent
          center={{ lat: 52.520007, lng: 13.404954 }}
          zoom={5}
          containerElement={<div style={{ height: '100vh', width: 'auto', backgroundColor: 'black' }} />}
          mapElement={<div style={{ height: '100vh', width: '100vw' }} />}
          /* callbackFromMap={this.leCallback} */
          displayContent={this.showMeMore}
        />

        {/* this.state.showMoreWeather ? null : <div className="box">
          <h1>THE BOX</h1>
        </div> */}

        {/*   <div className="box1">
          <h1>BLUE BOX</h1>
          <button className="boxBtn" onClick={this.RedBoxFun}> HEAL OR KILL THE BOX</button>
        </div> */}

        {this.state.showMoreWeather ? <div className="addInfo" id="capital">
          <div className="flexme">

            <div id="dropDown">
              <label htmlFor="selectCity">Select another capital</label>
              <select id="selectCity">
                <option value="0">* World Capitals *</option>
              </select>
            </div>

            <div className="btnDiv">
              <a aria-label="Close" className="backBtn"><h5>[&times;]</h5></a>
            </div>

          </div>

          <div className="weatherDiv">
            {extendedContent}
          </div>

          <div className="forecastDiv">
            <h1>MORE CONTENT HERE!!</h1>
          </div>
        </div> : null}

      </div>
    );
  }
}

export default App;
