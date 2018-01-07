import React from 'react';
import { Provider } from 'react-redux';
import reducers from './src/store/reducers';
import { createStore } from 'redux';
import Clock from './src/components/clock.component.js';

const store = createStore(reducers);

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   initialTime: 12,
    //   currentTimer: 30,
    //   addTime: 60,
    //   timeLimit: 150,
    //   timerInterval: 0,
    //   state: 'RUN',
    //   initialVolume: 0.1,
    //   pauseResume: pauseImage
    // };
  }

  render() {
    return (
      <Provider store={store}>
        <Clock />
      </Provider>
    );
  }
}

export default App;
