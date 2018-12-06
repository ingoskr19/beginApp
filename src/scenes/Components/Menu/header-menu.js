import React from 'react';
import { Text, ImageBackground, Image, TouchableHighlight, StyleSheet  } from 'react-native';
import { BASE_IMAGE } from './../../../services/config';
const HeaderMenu = props => (
    <ImageBackground
        source={require('./../../../../assets/images/SplashBackground.jpg')}
        style={styles.imageBackground}
    >
        <TouchableHighlight onPress={()=>props.navigation.navigate('Profile')}>
            <Image source={{ uri: (props.user.photo) ? props.user.photo : BASE_IMAGE }}
                style={styles.avatar}
            />
        </TouchableHighlight>
        
        <Text style={styles.name}>
            {props.user.name}
        </Text>
        <Text style={styles.userName}>
            {props.user.username?'@'+props.user.username: ''}
        </Text>

    </ImageBackground>
);

const styles = StyleSheet.create({
    imageBackground: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    name: {
        color: 'white',
        fontSize: 14
    },
    userName: {
        color: '#7efb7b',
        fontSize: 12
    }
});

export default HeaderMenu;
