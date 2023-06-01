const initialState = {
    weatherData: [], 
  };
  
  const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_WEATHER':
        return {
          ...state,
          weatherData: [...state.weatherData, action.payload],
        };
      case 'REMOVE_WEATHER':
        return {
          ...state,
          weatherData: state.weatherData.filter(
            (data) => data.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default WeatherReducer;
  