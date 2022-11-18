const myLocation = document.getElementById("myLocation");
const ville = document.getElementById("Ville");
const country = document.getElementById("country");
const temperatureWeather = document.getElementById("temperature");
const feelslikeWeather = document.getElementById("feelslike");
const form = document.querySelector(".form");
const imgLogo = document.getElementById("logoWeather");
const blockWeather = document.getElementById("weather");
const enterLocation = document.getElementById("enterLocation");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`http://localhost:3000/jsonweather?location=${myLocation.value}`)
    .then((res) => res.json())
    .then((data) => {
      const { pays, location, temperature, feelslike, logo } = data;
      country.innerHTML = pays;
      ville.innerHTML = location;
      temperatureWeather.innerHTML = `${temperature}°C`;
      feelslikeWeather.innerHTML = `${feelslike}°C`;
      imgLogo.src = logo;
    });
  blockWeather.style.display = "block";
  blockWeather.style.display = "flex";
  enterLocation.style.animation = "fondu 0.5s ease-in-out";
});
