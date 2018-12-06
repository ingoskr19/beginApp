import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Header, Body, Title, Left } from 'native-base'
import BackButton from './components/back-button';
import HomeButton from './components/home-button';
const HeaderComponent = (props) => {
    return (
    <Header style={styles.header}>
        <Left>
            {(props.hasBackButton) ? <BackButton navigation={props.navigation}/> : <HomeButton navigation={props.navigation}/>}
        </Left>
        <Body>
            <Title>{props.title}</Title>
        </Body>
        <View style={styles.children}>
            {props.children}
        </View>
    </Header>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#053645'
    },
    children: {
        position: 'absolute',
        right: 10,
        bottom: 5
    }
});
export default HeaderComponent;
