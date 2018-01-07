import * as actions from '../actions';
const intialState = {
  initialTime: 30,
  currentTimer: 60,
  timeLimit: 150,
  state: 'STOP'
};

const ClockReducer = (state = intialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case actions.CLOCK_START:
      return {
        ...intialState,
        state: 'START'
      };
    case actions.ADD_TIME: {
      let time = state.currentTimer + action.payload;
      if (time > 150) {
        time = 150;
      }
      return {
        ...intialState,
        currentTimer: time
      };
    }
    default:
      return state;
  }
};

export default ClockReducer;
