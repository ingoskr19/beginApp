import React, { Component } from 'react';
import { View, Button, CameraRoll, ScrollView, Image, StyleSheet, PermissionsAndroid } from 'react-native';
import HeaderComponent from '../Components/Header/header';

class CameraRollScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
        photos: []
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
        header: (props) => (
            <HeaderComponent title="Gallery" navigation={navigation}
                hasBackButton={props.navigation.state.routes.length > 1}
            />
        )
    }
}

  componentDidMount () {
      this.requestCameraPermission();
  }

  async requestCameraPermission () {
      try{
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,{
                title: 'Acceso al storage',
                message: 'Permiso de acceso a tu album de fotos'
            }
        );

        if(granted == PermissionsAndroid.RESULTS.GRANTED){
            console.log('Permiso OK');
        } else {
            console.log('Permiso NO CONCEDIDO!!! :(');
        }

      } catch (error){
          console.log(error);
      }
  }

  showGalleryImages = () => {
      console.log('HIZO CLICK....!!!!!!!!!!!');
    CameraRoll.getPhotos({
        first: 10,
        assetType: 'Photos'
    })
    .then(r => {
        this.setState({ photos: r.edges});
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <View>
        <Button title="Cargar Imagenes de Galeria"
            onPress={this.showGalleryImages}
        />
        <ScrollView>
            {
                this.state.photos.map( (value,key) => {
                    return (
                        <Image key={key}
                        style={styles.imageStyle}
                        source={{uri: value.node.image.uri}}
                        />
                    )
                })
            }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 400,
        height: 200,
    }
});

export default CameraRollScene;