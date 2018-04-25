const fetch = require('node-fetch');

const getGeolocation = async (city, apiKey) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${apiKey}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getGeolocation
};
