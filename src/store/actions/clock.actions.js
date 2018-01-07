export const CLOCK_START = '[Clock] start timer';
export const CLOCK_STOP = '[Clock] stop timer';
export const CLOCK_PAUSE = '[Clock] pause timer';
export const ADD_TIME = '[Clock] Add Time';

export const clockStart = () => {
  return {
    type: CLOCK_START
  };
};

export const clockStop = () => {
  return {
    type: CLOCK_STOP
  };
};

export const clockPause = () => {
  return {
    type: CLOCK_PAUSE
  };
};

export const clockAddTime = time => {
  return {
    type: ADD_TIME,
    payload: time
  };
};

export const clockTypes = clockStart | clockStop;
