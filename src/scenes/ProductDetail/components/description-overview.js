import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

const DescriptionOverview = props => (
    <View style={styles.container} >
        <Image
            style={styles.productImage}
            source={{ uri: props.product.image }}
        />
        <Text style={styles.productName}> {props.product.name} </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7B1FA2',
        alignItems: 'center',
    },
    productImage: {
        width: 140,
        height: 140,
        borderRadius: 70,
        resizeMode: 'contain'
    },
    profileName: {
        color: '#fff',
        fontSize: 24,
        alignItems: 'center',
        marginTop: 20,

    },
    profileLocation: {
        color: '#fff',
        alignItems: 'center',
    }
});


export default DescriptionOverview;