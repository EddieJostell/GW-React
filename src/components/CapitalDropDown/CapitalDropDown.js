import React, { Component } from "react";
import country_capitals from "../../country_capitals.json";
import weatherfetching, { getWeatherFromAPI } from "../../lib/weatherfetching.js";

class CapitalDropDown extends Component {
  state = {};

  componentWillMount() {
    this.setState({ allMyMarkers: country_capitals });
  }

  populateDropDown = () => {
    let marks = [];
    var sortedMarkers = this.state.allMyMarkers.sort(function(a, b) {
      return a.CapitalName.localeCompare(b.CapitalName);
    });
   
    sortedMarkers.map((m, i) =>
      marks.push(
        <option key={i} value={m.CapitalName}>
          {m.CapitalName} - {m.CountryName}
        </option>
      )
    );
    return marks;
  };

  onChange = event => {
    var currentMarker = this.state.allMyMarkers.find(
      marker => marker.CapitalName === event.currentTarget.value
    );

    this.props.selected(
      currentMarker.CapitalName,
      parseFloat(currentMarker.CapitalLatitude),
      parseFloat(currentMarker.CapitalLongitude)
    ,[]);

    var daily = getWeatherFromAPI(
      currentMarker.CapitalLatitude,
      currentMarker.CapitalLongitude
    );
    daily.then(data => {
      this.props.selected(
        currentMarker.CapitalName,
        parseFloat(currentMarker.CapitalLatitude),
        parseFloat(currentMarker.CapitalLongitude),
        data
      );
    });
  };

  render() {
    return (
      <div id="dropDown">
        <label htmlFor="selectCity">Select another capital</label>
        <select id="selectCity" onChange={this.onChange}>
          <option value="0">* World Capitals *</option>
          {this.populateDropDown()}
        </select>
      </div>
    );
  }
}

export default CapitalDropDown;
