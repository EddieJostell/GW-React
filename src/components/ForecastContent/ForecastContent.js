import React from 'react';
import prototypes from '../../prototypes';

function ForecastContent(props) {
    return(
        <div className="forecast">
            <div className="townNtemp">
                <h1 className="">{props.name} </h1>
                <h2>{new Date().getDayFromDate()}</h2>
                <h1 className=""><img className="img" src="../../img/thermo-light.png" alt="Temperature:" />{props.temp.toFixed(0)} °C</h1>
            </div>
            <div className="humNwind">
                <h2 className=""><i className="owf owf-{props.wicon}"></i> {props.weather}</h2>
                <h2 className=""><img className="img" src="../../img/humidity-light.png" alt="Humidity:" /> {props.humidity}%</h2>
                <h2 className=""><img className="img" src="../../img/wind-lines-light.png" alt="Wind:" /> {props.windSpeed.toFixed(0)} m/s | {props.windDeg} degrees</h2>
            </div>
        </div>
    )
}

export default ForecastContent;