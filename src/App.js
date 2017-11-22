import React, { Component } from 'react';
import MyMapComponent from './components/MyMapComponent/MyMapComponent.js';
import country_capitals from './country_capitals.json';
/* import {compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'; */
import './sass/App.css';

class App extends Component {

  state = {
    worldCap: [],
    isOpen: false,
  }


  componentDidMount() {
    this.setState({ worldCap: country_capitals })

  }

  render() {

    return (
      <div className="App">
          <MyMapComponent
            center={{ lat: 52.520007, lng: 13.404954 }}
            zoom={5}
            containerElement={<div style={{ height: '100vh', width: 'auto' }} />}
            mapElement={<div style={{ height: '100vh', width: '100vw' }} />}
          />
      </div>
    );
  }
}

export default App;
