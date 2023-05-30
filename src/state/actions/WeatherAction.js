import axios from 'axios';

// ...

export const addWeather = (city) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
      );

      const weatherData = {
        city: response.data.name,
        temperature: response.data.main.temp,
      };

      dispatch({
        type: 'ADD_WEATHER',
        payload: { ...weatherData, id: nextWeatherId++ },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

