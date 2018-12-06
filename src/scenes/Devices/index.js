import React, { Component } from 'react'
import { View, Button, Image } from 'react-native'
import HeaderComponent from '../Components/Header/header';

const devices = [
    {
        scene: '',
        title: '',
        icon: ''
    },
    {

    },
    {

    }
];
export class DevicesScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: {},
            imageSrc: {}
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: (props) => (
                <HeaderComponent title="Devices" navigation={navigation}
                    hasBackButton={props.navigation.state.routes.length > 1}
                />
            )
        }
    }
    onResult = data => {
        //data:image/png;base64,
        if (data.uri) {
            //const src = {'require':require(data.uri)};
            this.setState({
                imageSrc: {}
            });
        } else if (data.base64) {
            this.setState({
                imageSrc: { uri: "data:image/png;base64," + data.base64 }
            });
        }
    }
  render() {
    return (
      <View style={{marginTop: 50}}>

      <Button style={{ marginTop: 20 }}
          title="Camera"
          onPress={() => this.props.navigation.navigate('CameraStack', { onResult: this.onResult })}
      />
      <Button style={{ marginTop: 20 }}
          title="Gallery"
          onPress={() => this.props.navigation.navigate('GalleryStack')}
      />
      <Image style={{ marginTop: 20, width: 500, height: 700, resizeMode: 'contain' }}
          source={this.state.imageSrc}
      />

      </View>
    )
  }
}

export default DevicesScene;
