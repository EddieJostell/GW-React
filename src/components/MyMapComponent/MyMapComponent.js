import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import country_capitals from '../../country_capitals.json';
import MyMapMarker from '../MyMapMarker/MyMapMarker';
import ForecastContent from '../ForecastContent/ForecastContent';


class MyMapComponent extends Component {

    state = {
        showInfo: false,
        worldCapitals: [],
        showMore: false,
        dailyForecast: [],
        showAddWeather: false
    }

    componentDidMount() {
        this.setState({ worldCapitals: country_capitals });
    }


    leCallback = (datafromMarker) => {
        this.setState({ dailyForecast: datafromMarker });
    }

    onClick = () => {
        console.log("I REACHED HERE FROM ANOTHER COMPONENT!!");
        
    }

    render() {
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
                showBigWindow={this.onClick}
               callbackFromMap={this.leCallback}
            />
        });

        const extendedContent = this.state.dailyForecast.map((day, i ) => 
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

        return (
            <GoogleMap
                defaultZoom={this.props.zoom}
                defaultCenter={this.props.center}
                defaultOptions={{ styles: darkStyle }}

            >
                {worldMarkers}
                {extendedContent}
            </GoogleMap>
        )
    }
}

export default withGoogleMap(MyMapComponent);

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