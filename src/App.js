import React, { Component } from 'react';
import MyMapComponent from './components/MyMapComponent/MyMapComponent.js';
import country_capitals from './country_capitals.json';
/* import {compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'; */
import './sass/App.css';

class App extends Component {

  state = {
    markers: [{
      position: {
        lat: 52.520007,
        lng: 13.404954,
      }
    }]
  }

  render() {

   
    return (
      <div className="App">
        <div style={{ width: "auto", height: 1000 }}>
          <MyMapComponent
            center={{ lat: 52.520007, lng: 13.404954 }}
            zoom={5}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            markers={this.state.markers} 
          />
        </div>
      </div>
    );
  }
}

export default App;
