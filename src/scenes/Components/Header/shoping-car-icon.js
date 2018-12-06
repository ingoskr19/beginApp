import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {withNavigation} from 'react-navigation';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
const ShoppingCarIcon = props => {
    return (
    <View style={styles.container}>
        <Icon name="cart" style={styles.icon} size={30} onPress={()=>props.navigation.navigate('Cart')}/>
        <View style={styles.badget}>
            <Text style={styles.badgetText}>{props.cartItems.length}</Text>
        </View>
    </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    icon: {
        color: '#ffffff80'
    },
    badget: {
        position: 'absolute',
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: '#12ce23',
        right: 7,
        top: 7,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    badgetText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 8

    }
});

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart
    }
}

export default connect(mapStateToProps,null)(withNavigation(ShoppingCarIcon));
