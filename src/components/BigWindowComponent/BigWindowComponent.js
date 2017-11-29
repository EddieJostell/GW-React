import React, { Component } from "react";
import ForecastContent from "../ForecastContent/ForecastContent";
import FiveDayForecastLoader from "../FiveDayForecastLoader/FiveDayForecastLoader";
import CapitalDropDown from "../CapitalDropDown/CapitalDropDown";

class BigWindowComponent extends Component {
  state = {};

  renderDailyContent = () => {
    console.log(this.props);
    return this.props.dailyForecast.map((day, i) => (
      <ForecastContent
        key={i}
        name={this.props.title}
        temp={day.main.temp}
        windSpeed={day.wind.speed}
        windDeg={day.wind.deg}
        humidity={day.main.humidity}
        weather={day.weather[0].main}
        wicon={day.weather[0].id}
      />
    ));
  };

  render() {
    return (
      <div className="addInfo" id="capital">
        <div className="flexme">
          <CapitalDropDown selected={this.props.selected} />

          <div className="btnDiv">
            <a
              aria-label="Close"
              onClick={this.props.hideWindow}
              className="backBtn"
            >
              <h5>[&times;]</h5>
            </a>
          </div>
        </div>

        <div className="weatherDiv">{this.renderDailyContent()}</div>

        <div className="forecastDiv">
          <FiveDayForecastLoader lat={this.props.lat} lng={this.props.lng} />
        </div>
      </div>
    );
  }
}

export default BigWindowComponent;
