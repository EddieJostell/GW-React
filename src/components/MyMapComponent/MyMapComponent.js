import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import country_capitals from '../../country_capitals.json';


class MyMapComponent extends Component {

    state = {
        //isOpen: false,
        worldCapitals: []
    }

    componentDidMount() {
        //this.getLatLng();
        this.setState({ worldCapitals: country_capitals })
    }



    onMarkerClick(mark) {
        console.log(mark.showInfo);
        console.log("WORKING?!?!");
        if (mark.showInfo === false) {
            console.log("IM IN HERE!")
            mark.showInfo = true;
        } else if (mark.showInfo === true) {
            console.log("AND IM IN HERE ASWELL AT SOME POINT")
            mark.showInfo = false;
        }
    } 


    render() {

        const worldMarkers = this.state.worldCapitals.map((marker, i) => {
            const mark = {
                position: { lat: parseFloat(marker.CapitalLatitude), 
                lng: parseFloat(marker.CapitalLongitude)
                },
                country: marker.CountryName,
                title: marker.CapitalName,
                showInfo: false,
                id: marker.CapitalName
            }
            return <Marker key={i}
            onClick={() => this.onMarkerClick(mark)}
            {...mark}
            >
                {mark.showInfo && (
                    <InfoWindow
                    onCloseClick={() => this.onMarkerClick(mark)}
                    >
                        <div>
                            <h2>{mark.title}</h2>

                        </div>
                    </InfoWindow>
                )}
            </Marker>
        })

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
                {/* {markers} */}
            </GoogleMap>
        )
    }
}

export default withGoogleMap(MyMapComponent);

/* position={{ lat: parseFloat(marker.CapitalLatitude), lng: parseFloat(marker.CapitalLongitude) }} */
                /* onClick={this.onMarkerClick} */
/*  {this.state.isOpen && <InfoWindow onCloseClick={this.onMarkerClick}> marker.i </InfoWindow>} */ 


       /* 
                const markers = this.props.markers.map((mark, i) => {
                    const marker = {
                        position: {
                            lat: 52.520007,
                            lng: 13.404954 
                        },
                        title: "MY MARKER!",
                    }
                    return <Marker key={i} {...marker}/>
                }) */