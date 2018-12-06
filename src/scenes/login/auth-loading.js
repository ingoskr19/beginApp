import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, AsyncStorage, ImageBackground, Text } from 'react-native';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.login();
  }

  async login() {
    const userToken = await AsyncStorage.getItem('token');
    setTimeout(() => {
      this.props.navigation.navigate((userToken) ? 'Products' : 'Auth');
    }, 2000);

  }

  render() {
    return (
      <ImageBackground
        source={require('./../../../assets/images/SplashBackground.jpg')}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            BeginApp
          </Text>
          <View>
            <ActivityIndicator style={styles.loading} size="large" color="#7efb7b" size={32} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#00000000'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
  },
  loading: {
  }
});

export default AuthLoading;