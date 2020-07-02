// select the elements
const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');
const notificationElement = document.querySelector('.notification');

// app data
const weather = {};
// define temperature unit
weather.temperature = {
  unit: "celsius"
}

// variables
const KELVIN = 273;
const apiKey = "46098c7949a688b482ae72bccedf24a3";

// check if the browser supports geolocation
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser doesn't support Geolocation </p>";
}
