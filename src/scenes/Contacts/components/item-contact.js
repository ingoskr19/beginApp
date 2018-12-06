import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';


onPress = () =>
    ToastAndroid.showWithGravity(
        'Click de item',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );

const ItemContact = (props) => (
    <TouchableHighlight
        onPress = { ()=> props.navigation.navigate('ProfileScreen')}
        underlayColor="#C0C0C0"
    >
        <View style={styles.container} onPress={this.onPress}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: props.contact.photo }}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.contactName}>{props.contact.name}</Text>
                <Text style={styles.contactPhone}>{props.contact.phone}</Text>
            </View>

        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    content: {
        paddingLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 100,
        borderRadius: 35,
        margin: 5,
    },
    contactName: {
        fontSize: 24,
        fontWeight: '200',
    },
    contactPhone: {

    }
});

export default ItemContact;
