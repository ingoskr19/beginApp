import React, { Component } from 'react';
import { View, Button, StyleSheet, AsyncStorage, TextInput, Text, ImageBackground, ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import HttpUser from './../../services/Users/http-users';
class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            password: '',
            loading: false,
        });
        this.init();
    }

    async init() {
        const _email = await AsyncStorage.getItem('email');
        if (_email) {
            this.setState({
                email: _email
            });
        }
    }

    login = async () => {
        this.setState({
            loading: true
        });
        const config = {
            params: {
                'email': this.state.email,
                'password': this.state.password
            }
        }
        const token = await HttpUser.getLogin(config);
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('email', this.state.email);
        this.setState({
            loading: false
        });
        this.props.navigation.navigate('Products');
    }
    render() {
        return (
            <ImageBackground
                source={require('./../../../assets/images/SplashBackground.jpg')}
                style={styles.imageBackground}
            >
                { (!this.state.loading) ? null : <ActivityIndicator size="large" color="#7efb7b" size={24} />}
                <View style={styles.container}>
                    <Text style={styles.formLabel}> Email </Text>
                    <TextInput
                        style={styles.formInput}
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <Text style={styles.formLabel}> Password </Text>
                    <TextInput
                        style={styles.formInput}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                    />

                    <LinearGradient 
                        start={{x: 0.0, y: 0.25}} 
                        end={{x: 0.25, y: 1.0}}
                        locations={[0,0.5]}
                        colors={['#2c639e', '#053645']}
                        style={styles.linearGradient}
                        >
                        <Text style={styles.login} onPress={this.login}>Go</Text>                   
                    </LinearGradient>
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
        alignItems: 'center',
        backgroundColor: '#00000050'
    },
    formLabel: {
        color: 'white'
    },
    formInput: {
        width: 250,
        color: '#7efb7b',
        borderWidth: 1,
        borderColor: 'white',
        height: 30,
        paddingBottom: 2,
        marginBottom: 5
    },
    login: {
        //backgroundColor: '#7efb7b',
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 2,
        color: '#ffffff',
        backgroundColor: 'transparent',
        borderRadius: 5,
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginTop: 5,
      },

});

export default Auth;
