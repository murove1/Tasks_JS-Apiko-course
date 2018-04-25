const fetch = require('node-fetch');

const getWeather = async (lat, lng, apiKey) => {
  try {
    const response = await fetch(
      `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}?units=auto`
    );
    const data = await response.json();

    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getWeather
};
