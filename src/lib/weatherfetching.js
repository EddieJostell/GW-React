

export const getWeatherFromAPI = (lat, lng) => {

  let weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05`;
  // https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05 | eb3bc19f92d9df047f452e1230df445c
  return fetch(weather)
    .then(response => response.json())
    .then(data => {
      return [data];
    })
};

