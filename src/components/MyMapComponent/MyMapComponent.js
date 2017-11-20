import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import country_capitals from '../../country_capitals.json';
import MyMapMarker from '../MyMapMarker/MyMapMarker';


class MyMapComponent extends Component {

    state = {
        showInfo: false,
        worldCapitals: []
    }

    componentDidMount() {
        //this.getLatLng();
        this.setState({ worldCapitals: country_capitals })
    }



 


    render() {
        const worldMarkers = this.state.worldCapitals.map((marker, i) => {
            const mark = {
                position: {
                    lat: parseFloat(marker.CapitalLatitude),
                    lng: parseFloat(marker.CapitalLongitude)
                },
                country: marker.CountryName,
                title: marker.CapitalName,
                showInfo: this.state.showInfo,
                id: i,
            }
            return <MyMapMarker key={i}
            {...mark}
                 />
        });
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
                

                   /* onMarkerClick(mark, i) {
        console.log("CLICK ON MARKER");
        console.log("Here showInfo is:", mark.showInfo);

        if (mark.showInfo === false) {
            console.log("mark.id", mark.id)
            console.log("i", i)
            console.log("IM IN HERE!")
            console.log("Before set to true:", mark.showInfo);
            if(mark.id === i) {
                this.setState({ showInfo: !this.state.showInfo })
            }
            //this.setState({ showInfo: !this.state.showInfo })
            console.log(mark);
            //mark.showInfo = true;
            console.log("After set to true:", mark.showInfo);
        }
        else if (mark.showInfo === true) {
            console.log("mark.id", mark.id)
            console.log("i", i)
            console.log("AND IM IN HERE ASWELL AT SOME POINT")
            console.log("Before set to false:", mark.showInfo);
            if(mark.id === i){
                this.setState({ showInfo: !this.state.showInfo })
            }
            //this.setState({ showInfo: !this.state.showInfo })
            //mark.showInfo = false;
            console.log("After set to false:", mark.showInfo);
        }
    } */