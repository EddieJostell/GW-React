import React, { Component } from "react";
import MyMapMarker from "../MyMapMarker/MyMapMarker";
import country_capitals from "../../country_capitals.json";
import { withGoogleMap, GoogleMap } from "react-google-maps";
const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

class MyMapComponent extends Component {
  state = {
    showInfo: false,
    worldCapitals: [],
    showMore: false
  };

  componentDidMount() {
   
    this.setState({ worldCapitals: country_capitals });
  }

  render() {

    const darkStyle = [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36
          },
          {
            color: "#000000"
          },
          {
            lightness: 40
          }
        ]
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#000000"
          },
          {
            lightness: 16
          }
        ]
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 17
          },
          {
            weight: 1.2
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 21
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 17
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 29
          },
          {
            weight: 0.2
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 18
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 16
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 19
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 17
          }
        ]
      }
    ];

    const iconStyle = {
      path:
        "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
      fillColor: "#949FA0",
      fillOpacity: 0.5,
      strokeColor: "#949FA0",
      strokeWeight: 1,
      scale: 0.5
    };

    const worldMarkers = this.state.worldCapitals.map((marker, i) => {
      const mark = {
        position: {
          lat: parseFloat(marker.CapitalLatitude),
          lng: parseFloat(marker.CapitalLongitude)
        },
        country: marker.CountryName,
        title: marker.CapitalName,
        showInfo: this.state.showInfo,
        id: marker.CapitalName,
        icon: iconStyle,
        map_icon_label:
          '<span className="map-icon map-icon-postal-code"></span>'
      };
      return (
        <MyMapMarker
          key={i}
          {...mark}
          displayContent={this.props.displayContent}
          noInfoWindows={this.props.noInfoWindows}
        />
      );
    });

    return (
      <GoogleMap
        zoom={this.props.zoom}
        center={this.props.center}
        defaultOptions={{ styles: darkStyle }}
      >
        <MarkerClusterer
          onClick={this.props.onMarkerClustererClick}
          averageCenter
         /*  enableRetinaIcons */
          gridSize={40}
        >
          {worldMarkers}
        </MarkerClusterer>
      </GoogleMap>
    );
  }
}

export default withGoogleMap(MyMapComponent);
