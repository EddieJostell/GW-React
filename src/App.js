import React, { Component } from 'react';
import MyMapComponent from './components/MyMapComponent/MyMapComponent.js';
import ForecastContent from './components/ForecastContent/ForecastContent';
import FiveDayForecastLoader from './components/FiveDayForecastLoader/FiveDayForecastLoader';
import './sass/App.css';

class App extends Component {

  state = {
    dailyForecast: [],
    showMoreWeather: false,
    //fiveDayForecast: [],
    allMyMarkers: []
  }


  componentDidMount() {
   
  }

  showMeMore = (dayForeCast, lat, lng) => {
    console.log(lat, lng)
    console.log("I REACHED HERE FROM ANOTHER COMPONENT!!");

    this.setState({
      dailyForecast: dayForeCast,
      lat: lat,
      lng: lng,
      showMoreWeather: true
    })
    
  }

  hideWindow = () => {
    this.setState({ showMoreWeather: false })
  }

  render() {
    
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

/*     var fiveDay = [];
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
    } */

    return (
      <div className="App">
        <MyMapComponent
          center={{ lat: 52.520007, lng: 13.404954 }}
          zoom={5}
          containerElement={<div style={{ height: 'auto', width: '100%' }} />}
          mapElement={<div style={{ height: '100vh', width: '100vw' }} />}
          displayContent={this.showMeMore}
          allMyMarkers={this.state.allMyMarkers}
        />

        {this.state.showMoreWeather ? <div className="addInfo" id="capital">
          <div className="flexme">

            <div id="dropDown">
              <label htmlFor="selectCity">Select another capital</label>
              <select id="selectCity">
                <option value="0">* World Capitals *</option>
              </select>
            </div>

            <div className="btnDiv">
              <a aria-label="Close" onClick={this.hideWindow} className="backBtn"><h5>[&times;]</h5></a>
            </div>

          </div>

          <div className="weatherDiv">
            {extendedContent}
          </div>

          <div className="forecastDiv">
           <FiveDayForecastLoader
           lat={this.state.lat}
           lng={this.state.lng}
           />
          </div>
        </div> : null}

      </div>
    );
  }
}

export default App;

  /*    leCallback = (dayCast, fiveDayCast) => {
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
     } */


/* this.state.showMoreWeather ? null : <div className="box">
          <h1>THE BOX</h1>
        </div> */

/*   <div className="box1">
          <h1>BLUE BOX</h1>
          <button className="boxBtn" onClick={this.RedBoxFun}> HEAL OR KILL THE BOX</button>
        </div> */

          /*   RedBoxFun = () => {
      if (this.state.showMoreWeather === true) {
        this.setState({ showMoreWeather: false })
        //console.log("ShowMoreWeather State changed to: ", this.state.showMoreWeather);
      }
      else {
        this.setState({ showMoreWeather: true })
        //console.log("ShowMoreWeather State changed to: ", this.state.showMoreWeather);
      }
  
    } */