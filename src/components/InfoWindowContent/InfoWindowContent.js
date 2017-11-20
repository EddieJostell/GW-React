import React from 'react';


function InfoWindowContent(props) {

    return (
        <div className="window">
            <a href="#" className="divBtn" id="button" onClick={props.showMore}> <h4 className="para">{props.name}</h4></a>
            <h4 className="title">Temperature: {props.temp.toFixed(0)} °C</h4>
            <h4 className="para">Wind: {props.windSpeed.toFixed(0)} m/s | {props.windDeg} degrees</h4>
            <h4 className="para">Humidity: {props.humidity}%</h4>
            <h4 className="para">THINGY: {props.weather} <i className="owf owf-{props.wicon}"></i></h4>
        </div>
    )
}

export default InfoWindowContent;

