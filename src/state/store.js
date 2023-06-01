import { createStore } from 'redux';
import rootReducer from './reducers/WeatherReducer';

const store = createStore(rootReducer);

export default store;
