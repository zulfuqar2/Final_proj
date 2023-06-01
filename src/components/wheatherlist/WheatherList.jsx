import React from 'react';
import { connect } from 'react-redux';
import { removeWeather } from '../../state/actions/RemoveWheather';



const WeatherList = ({ weatherData, removeWeather }) => {
  return (
    <div>
      <h2 className='head'>Weather List</h2>
      {weatherData.map((data) => (
        <div key={data.id}>
          <p>{data.city}</p>
          <p>{data.temperature}</p>
          <button onClick={() => removeWeather(data.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  weatherData: state.weatherReducer.weatherData,
});

export default connect(mapStateToProps, { removeWeather })(WeatherList);
