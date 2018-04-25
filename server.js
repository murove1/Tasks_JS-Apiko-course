const fs = require('fs');
const { argv } = require('yargs');
const { config } = require('dotenv');

const { getGeolocation } = require('./geolocation');
const { getWeather } = require('./getWeather');
const { city } = argv;

config();

const { GEO_API_KEY, WEATHER_API_KEY } = process.env;

const writeWeatherInFile = data => {
  fs.writeFile('weather.txt', data, (error, result) => {
    if (!error) {
      console.log('File weather.txt has been saved!');
    } else {
      console.log(error);
    }
  });
};

getGeolocation(city, GEO_API_KEY)
  .then(data => {
    if (data.status !== 'OK') {
      throw `Status: ${data.status}`;
    } else {
      const { lat, lng } = data.results[0].geometry.location;
      return getWeather(lat, lng, WEATHER_API_KEY);
    }
  })
  .then(data => {
    const { temperature, summary } = data.currently;
    const temperatureInfo = `temperature: ${temperature}, summary: ${summary}`;

    console.log(temperatureInfo);
    writeWeatherInFile(temperatureInfo);
  })
  .catch(error => console.log(error));
