

export const getWeatherFromAPI = (lat, lng) => {

  let weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05`;
  // https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05 | eb3bc19f92d9df047f452e1230df445c
    fetch(weather)
    .then(response => response.json())
    .then(data => {
      return [data];

      //We need to create a new InfoWindow because of this https://github.com/tomchentw/react-google-maps/issues/696
   /*    this.setState({ showInfo: false }, () =>
        this.setState({
          showInfo: true,
          currentWeather: wData,
          dailyForecast: wData
        })
      ); */
    })
};