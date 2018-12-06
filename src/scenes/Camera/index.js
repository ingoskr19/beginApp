import React, { Component } from 'react'
import { View } from 'react-native'
import {RNCamera} from 'react-native-camera'
import Button from './components/button-component';
import ZoomSlider from './components/zoom-component';
import {flashModeOrder, whiteBalanceOrder} from './settings';
import cameraStyles from './styles/camera-styles';
export default class Camera extends Component {

  state = {
    flash: 'off',
    zoom: 0,
    autoFocus: 'on',
    depth: 0,
    type: 'back',
    whiteBalance: 'auto',
    ratio: '4:3',
    showGallery: false,
    photos:[],
    recordOptions:{
      mute: false,
      maxDuration: 60,
      quality: RNCamera.Constants.VideoQuality["288p"]
    },
    isRecording: false,
    videoUri: ''
  }

  flashEvent = () => {
      this.setState({
        flash: flashModeOrder[this.state.flash]
      });
  }

  whiteBalanceEvent = () => {
    this.setState({
      whiteBalance: whiteBalanceOrder[this.state.whiteBalance]
    });
  }

  typeEvent = () => {
    this.setState({
      type: (this.state.type == 'back') ? 'front':'back'
    });
  }

  zoomEvent = (value) => {
      this.setState({
        zoom: value,
      })
  }

  textRecognizedEvent = ({textBlocks}) => {
      console.log(textBlocks);
  }

  barcodeReadEvent = (data) => {
    console.log(data);
  }

  takePhotoEvent = () => {
    if(this.camera){
      const options = {quality: 0.5, base64: true, width: 300, doNotSave: true}
      this.camera.takePictureAsync(options)
      .then(data=>{
        console.log('picture: '+data);
      });
    }
  }

  recordingEvent = async () =>{
    if(this.camera){
      if(!this.state.isRecording){
        this.setState({ isRecording: true });
      await this.camera.recordAsync(this.state.recordOptions).then(data => {
        console.log('URI::'+data.uri);
        this.setState({ isRecording: false });
      });
      } else {
        await this.camera.stopRecording();
        console.log('stop video...');
      }
  
    }
  }

  render() {
    return (
    <View style={cameraStyles.container}>
        <RNCamera
        ref={
            ref => {
            this.camera = ref;
            }
        }
        style={cameraStyles.camera}
        type={this.state.type}
        flashMode={this.state.flash}
        autoFocus={this.state.autoFocus}
        zoom={this.state.zoom}
        whiteBalance={this.state.whiteBalance}
        focusDepth={this.state.depth}
        permissionDialogTitle={'Permiso para usar la camara'}
        permissionDialogMessage={'Para usar la aplicacion necesitas el permiso para usar la cámara.'}
        /*onTextRecognized={this.textRecognizedEvent}*/
        onGoogleVisionBarcodesDetected={this.barcodeReadEvent}
        
        >
        <View style={cameraStyles.cameraContainer}>
            <Button text="Flash: " value={this.state.flash} event={this.flashEvent}/>
            <Button text="Type: " value={this.state.type} event={this.typeEvent}/>
            <Button text="Filter: " value={this.state.whiteBalance} event={this.whiteBalanceEvent}/>
        </View>
        <View style={cameraStyles.containerBottomControl}>
            <ZoomSlider event={this.zoomEvent}/>
        </View>
        <View>
        <Button text="PHOTO" value={this.state.whiteBalance} event={this.takePhotoEvent}/>
        <Button text={this.state.isRecording? 'Recording':'Record'} 
        value={this.state.whiteBalance} event={this.recordingEvent}/>
        </View>
        </RNCamera>
    </View>
    )
  }
}