import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const ItemCategory = (props) => (
    <TouchableHighlight
        onPress={() => {props.navigation.navigate('CatalogScreen' , { category: props.category})}}
        underlayColor="#C0C0C0"
    >
        <View style={styles.container}>
            <Image source={{ uri: props.category.photo }} style={styles.CategoryImage}>
            </Image>
            <View style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: props.category.backgroundColor + props.category.opacity
            }} />
            <View style={styles.content}>
                <Text style={styles.CategoryName}>{props.category.name}</Text>
                <Text style={styles.CategoryDescription}>{props.category.description}</Text>
            </View>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: null,
        height: 150,
        marginVertical: 1,
    },
    CategoryImage: {
        ...StyleSheet.absoluteFillObject,
    },
    CategoryName: {
        color: '#fff',
        fontSize: 30,
        marginTop: 10,
        paddingLeft: 10,
    },
    CategoryDescription: {
        color: '#fff',
        flex: 1,
        fontSize: 14,
        fontStyle: 'italic',
        marginTop: 5,
        paddingLeft: 12,
    },

});

export default ItemCategory;

