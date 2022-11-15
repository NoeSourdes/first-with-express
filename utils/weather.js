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
        callback(
          undefined,
          `La temperature à ${location.name}, est de ${current.temperature}°C et le resenti est de ${current.feelslike}°C`
        );
      }
    });
};

module.exports = { weather };
