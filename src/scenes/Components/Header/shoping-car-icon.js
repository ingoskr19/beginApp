import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {withNavigation} from 'react-navigation';
import { connect } from 'react-redux';
import { Icon, Item } from 'native-base';
const ShoppingCarIcon = props => {
    return (
    <Item style={styles.container} button onPress={()=>(props.cartItems.length)?props.navigation.navigate('BagFulScreen'):null}>
        <Icon name="cart" style={styles.icon} size={30} />
        <View style={styles.badge}>
            <Text style={styles.badgeText}>{props.cartItems.length}</Text>
        </View>
    </Item>
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
    badge: {
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
    badgeText: {
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
