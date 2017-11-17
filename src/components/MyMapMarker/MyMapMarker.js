import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import country_capitals from '../../country_capitals.json';



class MyMapMarker extends Component {

    state = {
        showInfo: false,
    }

    toggleShowInfo = () => {
        this.setState({ showInfo: !this.state.showInfo });
    }

    closeInfo = () => {
        this.setState({ showInfo: false })
    }

    render() {
        return(
            <Marker
                onClick={this.toggleShowInfo}
                {...this.props}
            >
                {this.state.showInfo && (
                    <InfoWindow
                        onCloseClick={this.closeInfo}
                    >
                        <div>
                            <h2>{this.props.title}</h2>
                        </div>
                    </InfoWindow>
                )}
            </Marker>

        )
    }
}

export default MyMapMarker;