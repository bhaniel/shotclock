import ClockReducer from './clock.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  clock: ClockReducer
});
