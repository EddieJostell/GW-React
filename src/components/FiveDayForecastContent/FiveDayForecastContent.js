import React from 'react';
import prototypes from '../../prototypes';

function FiveDayForecastContent(props) {
    return(
        <div className="siteDiv">
            <h4 className="">{props.dt_txt.getDay()}: 12:00 </h4>
            <h4 className=""><i className="owf owf-{props.wicon}"></i> {props.description.capitalize()}</h4> 
            <h4 className=""><img className="img1" src="../../img/thermo-light.png" alt="Temperature" /> {props.temp.toFixed(0)} °C</h4>
            <h4 className=""><img className="img1" src="../../img/humidity-light.png" alt="Humidity:" /> {props.humidity} %</h4>
            <h4 className=""><img className="img1" src="../../img/wind-lines-light.png" alt="Wind:" /> {props.windSpeed.toFixed(0)} m/s | {props.windDeg.toFixed(0)} degrees</h4>
        </div>
    )
}

export default FiveDayForecastContent;

