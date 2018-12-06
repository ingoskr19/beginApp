import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Alert } from 'react-native';

confirm = (event, item) => {
    Alert.alert(
    'Confirm',
    "Desea Eliminar el producto " + item.name + " de la lista ?",
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: ()=>event(item)},
    ],
    { cancelable: false }
  )
};
const ProductItem = props => (
    <TouchableHighlight underlayColor={'#ff0'}
        onPress={() => props.onPressEvent(props.item)}
        onLongPress={()=>confirm(props.onLongPressEvent, props.item)

           /* Alert.alert('Confirm',"Desea Eliminar el producto " + props.item.name + " de la lista ?",
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => props.onLongPressEvent(props.item)},
            ],
            { cancelable: false }
            );*/
        } >
        <View style={styles.container}>
            <Text style={styles.name}>{props.item.name}</Text>
            <Text style={styles.price}>{props.item.price}</Text>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10
    },
    name: {
        fontSize: 18,
        color: '#44546b'
    },
    price: {
        backgroundColor: '#70b124',
        color: 'white',
        fontSize: 13,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
});

export default ProductItem;
