import React, { Component } from 'react';
import { GoogleMapLoader, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import country_capitals from '../../country_capitals.json';

class MyMapComponent extends Component {

    state = {
        GoogleMap: '',
        worldCapital: [],
        
    }

    componentDidMount() {
       // this.getLatLng();
    }

    getLatLng() {
        console.log(country_capitals);

        for (var key in country_capitals) {
            if (country_capitals.hasOwnProperty(key)) {
                var element = country_capitals[key];
                var lat = parseFloat(element.CapitalLatitude);
                var lng = parseFloat(element.CapitalLongitude);
                /*  element.CapitalName, element.CountryName */
            }
            //console.log(lat, lng);
            this.setState({ worldCapital: country_capitals })
            
        }

        console.log(this.state.worldCapital);
       
    }


    render() {
        
         var worldMarkers =  country_capitals.map((marker, i) => { return <Marker key={i} 
         position={{ lat: parseFloat(marker.CapitalLatitude), lng: parseFloat(marker.CapitalLongitude) }} 
         name={{ title: marker.CapitalName}}
         >
         </Marker> })
        
        

        const darkStyle = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
        return (
            <GoogleMap
                defaultZoom={this.props.zoom}
                defaultCenter={this.props.center}
                defaultOptions={{ styles: darkStyle }}
    
            >
                {worldMarkers}
                
                {/* <Marker
                   
                    position={{ lat: 52.520007, lng: 13.404954 }} 
                    
                >

                </Marker> */}
            </GoogleMap>
        )
    }
}

export default withGoogleMap(MyMapComponent);