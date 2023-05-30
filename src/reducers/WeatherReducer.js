const initialState = {
    weatherData: [], // Hava durumu verileri için boş bir dizi
  };
  
  const weatherReducer = (state = initialState, action) => {
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
  
  export default weatherReducer;
  