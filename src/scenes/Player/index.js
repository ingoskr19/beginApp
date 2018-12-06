import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ControlsVideo from './components/controls-video';
import PlayPause from './components/play-pause';
import Video from 'react-native-video';
class Player extends Component {

  state = {
    paused: true,
    currentTime: 0,
    totalTime: 0
  }

  videoError = (err) => {
    console.log(err);
  }

  onLoadVideo = (payLoad) => {
    this.setState({
      paused: false,
      totalTime: this.parseTime(payLoad.duration)
    });
  }

  onProgress = (progress) => {
    this.setState({
      currentTime: this.parseTime(progress.currentTime)
    });
  }

  parseTime(time){
    var sec_num = parseInt(time, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return ((hours>0)?hours+':':'')+minutes+':'+seconds;
  }

  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.overlayVide}>
          <View style={styles.videoLayout}>
            <Video style={styles.video}
              source={require('../../../assets/videos/video.mp4')}
              onError={this.videoError}
              resizeMode="cover"
              paused={this.state.paused}
              onLoad={this.onLoadVideo}
              onProgress={this.onProgress}
            />
          </View>
          <ControlsVideo>
            <PlayPause style={styles.control}
              pause={this.state.paused} 
              onPress={this.playPause}/>
            <Text style={styles.control}>{this.state.currentTime} / {this.state.totalTime}</Text>
          </ControlsVideo>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      flex: 1
    },
    overlayVideo: {
      position: 'absolute',
      backgroundColor: 'yellow',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
    },
    videoLayout: {
      borderWidth: 1,
      borderColor: 'red',
      paddingBottom: '56.25%',
    },
    video: {
      position: 'absolute',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
    },
    control: {
      color: '#fff'
    }
});

export default Player;