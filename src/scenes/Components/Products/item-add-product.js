import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { Icon, Toast, Button } from 'native-base';
import { CLEAN_CANT, MODIFY_CANT } from '../../../redux/actionTypes/cart-action-types';
const AddProductItem = (props) => (
    <View style={styles.container}>
        <View style={styles.cantContent}>
            <TouchableHighlight onPress={() => props.modifiedEvent(props.product, MODIFY_CANT, -1)} underlayColor='transparent'>
                <Icon style={[styles.icon, { alignSelf: 'flex-start' }]} name="ios-remove-circle-outline" size={16} />
            </TouchableHighlight>
            <Text style={styles.input}>
                {props.product.cant ? props.product.cant.toString() : '0'}
            </Text>
            <TouchableHighlight onPress={() => props.modifiedEvent(props.product, MODIFY_CANT, 1)} underlayColor='transparent' >
                <Icon style={styles.icon} name="ios-add-circle-outline" size={16} />
            </TouchableHighlight>
        </View>
        <View style={styles.modifiedContent}>
            {(props.product.cant) ?
                <TouchableHighlight onPress={() => {
                    props.modifiedEvent(props.product, CLEAN_CANT, 1);
                    props.addEvent(props.product);
                    Toast.show({
                        text: "Added ("+props.product.cant+") "+props.product.name+" Successfull",
                        buttonText: "Done",
                        type: "success",
                        position: "center"
                    })
                }} underlayColor="transparent">
                    <Icon style={styles.addToCartIcon} name="ios-checkmark-circle-outline" size={16} />
                </TouchableHighlight>
                : null
            }
            {(props.product.modified) ?
                <TouchableHighlight onPress={() => {
                    props.modifiedEvent(props.product, CLEAN_CANT, 0);
                    props.removeEvent(props.product);
                    Toast.show({
                        text: "Product removed Successfull",
                        buttonText: "Done",
                        type: "warning",
                        position: "center"
                    })
                }} underlayColor="transparent">
                    <Icon style={styles.addToCartIcon} name="ios-close-circle" size={16} />
                </TouchableHighlight>
                : null
            }
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cantContent: {
        flex: 5,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modifiedContent: {
        flex: 3,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    input: {
        width: 50,
        height: 18,
        color: '#7efb7b',
        textAlign: 'center',
        padding: 0,
        margin: 0,
        alignSelf: 'center'
    },
    icon: {
        color: '#7efb7b',
        alignSelf: 'flex-end'
    },
    addToCartIcon: {
        color: 'white',
        backgroundColor: 'transparent',
        alignSelf: 'flex-end',
        marginRight: 10,
    }
});

export default AddProductItem;
