import React from 'react';

function FiveDayForecastContent(props) {
    return(
        <div class="siteDiv">
            <h4 class="">{props.dt_txt.getDay()}: 12:00 </h4>
            <h4 class=""><i class="owf owf-{props.wicon}"></i> {props.description.capitalize()}</h4>
            <h4 class=""><img class="img" src="../../img/thermo-light.png" alt="Temperature" />{props.main.temp.toFixed(0)} °C</h4>
            <h4 class=""><img class="img" src="../../img/humidity-light.png" alt="Humidity:" />{props.main.humidity} %</h4>
            <h4 class=""><img class="img" src="../../img/wind-lines-light.png" alt="Wind:" />{props.wind.speed.toFixed(0)} m/s | ${props.wind.deg} degrees</h4>
        </div>
    )
}

export default FiveDayForecastContent;