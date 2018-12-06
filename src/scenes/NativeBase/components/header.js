import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Body, Title, Left, Right, View } from 'native-base'
import BackButton from './back-button';
import HomeButton from './home-button';
const HeaderComponent = (props) => {
    return (
    <Header>
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
    children: {
        position: 'absolute',
        right: 10,
        bottom: 5
    }
});
export default HeaderComponent;
