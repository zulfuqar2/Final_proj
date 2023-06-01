export const removeWeather = (id) => {
  return (dispatch) => {
    try {
      dispatch({
        type: 'REMOVE_WEATHER',
        payload: { id: id },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
