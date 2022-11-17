const weather = (location, unit, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=68a8ac8a781e1fb0991437b7939c6a9d&query=${encodeURIComponent(
    location
  )}&units=${unit}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.success === false) {
        callback(
          `Impossible de renvoyer vos informations. Erreur ${data.error.code}: ${data.error.info}`,
          undefined
        );
      } else {
        const { location, current } = data;
        callback(undefined, {
          location: location.name,
          temperature: current.temperature,
          feelslike: current.feelslike,
          logo: current.weather_icons[0],
        });
      }
    });
};

module.exports = { weather };
