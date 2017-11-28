import React, { Component } from 'react';
import country_capitals from '../../country_capitals.json';
import weatherfeatching, { getWeatherFromAPI } from '../../lib/weatherfeatching.js';

class CapitalDropDown extends Component {

    state = {
        
    }

    componentWillMount() {
     this.setState({ allMyMarkers: country_capitals })
    }

    populateDropDown = () => { 
        let marks = [];
        //console.log(this.state.allMyMarkers)
        var sortedMarkers = this.state.allMyMarkers.sort(function(a,b) {
            return a.CapitalName.localeCompare(b.CapitalName);
        });
        console.log(sortedMarkers);
       
            sortedMarkers.map((m, i) => 
            marks.push(<option key={i} value={m.CapitalName}>{m.CapitalName} - {m.CountryName}</option>)
        );
        return marks;
    }

    onChange = (event) => {
     var currentMarker = this.state.allMyMarkers.find(marker => marker.CapitalName === event.currentTarget.value);
        this.props.selected(currentMarker.CapitalName, currentMarker.CapitalLatitude, currentMarker.CapitalLongitude)
        getWeatherFromAPI(currentMarker.CapitalLatitude, currentMarker.CapitalLongitude).then(this.props.selected(currentMarker.CapitalName, currentMarker.CapitalLatitude, currentMarker.CapitalLongitude));
    }

    /* onDropDownSelected = (e) => {
        e.preventDefault();
        console.log("THE VAL", e.target.value)
    } */

    render() {

        return (
            <div id="dropDown">
              <label htmlFor="selectCity">Select another capital</label>
              <select id="selectCity" onChange={this.onChange}>
                <option value="0">* World Capitals *</option>
                {this.populateDropDown()}
              </select>
            </div>
        )
    }
}

export default CapitalDropDown;