import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import * as fromStore from '../store';

const pauseImage = require('../assets/images/TS-30147_ShotClock_btn_Pause.png');
const resumeImage = require('../assets/images/TS-30147_ShotClock_Resume.png');

class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log(fromStore);
    this.calcDimension();
    this.buildStyle();
    this.state = {
      initialTime: 12,
      currentTimer: 30,
      addTime: 60,
      timeLimit: 150,
      timerInterval: 0,
      state: 'RUN',
      initialVolume: 0.1,
      pauseResume: pauseImage
    };
  }

  _handleGoPress = () => {
    this.props.dispatch(fromStore.clockStart());
  };

  _handleAddPress = () => {
    this.props.dispatch(fromStore.clockAddTime(60));
  };

  _handlePauseResumePress = () => {
    this.props.dispatch(fromStore.clockPause());
  };

  render() {
    return (
      <ScrollView onLayout={this.onLayout} style={this.styles.wrapper}>
        <View style={this.styles.container}>
          <ImageBackground
            source={require('../assets/images/TS-30147_ShotClock_BG-2.jpg')}
            style={this.styles.backgroundImage}
          >
            <View style={this.styles.viewStyleCol}>
              <View style={this.styles.viewStyleRow}>
                <TouchableHighlight onPress={this._handlePauseResumePress}>
                  <Image
                    style={this.styles.smallImage}
                    source={this.state.pauseResume}
                  />
                </TouchableHighlight>
                <Image
                  style={this.styles.smallImage}
                  source={require('../assets/images/TS-30147_ShotClock_LOGO.png')}
                />
                <TouchableHighlight onPress={this._handleAddPress}>
                  <Image
                    style={this.styles.smallImage}
                    source={require('../assets/images/TS-30147_ShotClock_1MIN.png')}
                  />
                </TouchableHighlight>
              </View>
              <View style={this.styles.counter}>
                <Text
                  adjustsFontSizeToFit={true}
                  style={this.styles.counterText}
                >
                  {this.state.currentTimer}
                </Text>
              </View>
              <View style={this.styles.imageContainer}>
                <TouchableHighlight onPress={this._handleGoPress}>
                  <Image
                    style={this.styles.image}
                    source={require('../assets/images/TS-30147_ShotClock_CTA_GO.png')}
                  />
                </TouchableHighlight>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }

  onLayout = evt => {
    this.calcDimension();
    this.buildStyle();
    this.forceUpdate();
    console.log('test');
  };

  calcDimension = () => {
    this.width = Dimensions.get('window').width;
    this.height = Dimensions.get('window').height;
    this.counterHeight = this.height - 110 - 153;
    this.counterText = this.counterHeight * 0.5;

    console.log(this.height, this.width, this.counterHeight, this.counterText);
  };

  buildStyle = () => {
    this.styles = StyleSheet.create({
      wrapper: {
        display: 'flex'
      },
      container: {
        display: 'flex'
      },
      counter: {
        display: 'flex',
        height: this.counterHeight,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 1
      },
      smallImage: {
        width: this.width / 3,
        resizeMode: 'contain'
      },
      image: {
        resizeMode: 'contain'
      },
      counterText: {
        alignItems: 'center',
        fontSize: this.counterText,
        color: '#007cf7'
      },
      backgroundImage: {
        width: '100%'
      },
      imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      },
      viewStyleRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      viewStyleCol: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    });
  };
}

function mapStateToProps(state) {
  return {
    clock: state.clock
  };
}

export default connect(mapStateToProps)(Clock);
