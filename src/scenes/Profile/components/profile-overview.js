import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

const ProfileOverview = props => (
    <View style={styles.profileContainer} >
        <Image
            style={styles.profileImage}
            source={{ uri: props.profile.uri }}
        />
        <Text style={styles.profileName}> {props.profile.name} </Text>
        <Text style={styles.profileLocation}> {props.profile.location} </Text>
    </View>
)

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: '#7B1FA2',
        alignItems: 'center',
    },
    profileTitle: {
        color: '#fff',
        fontSize: 30,
        alignItems: 'center',
        marginBottom: 20
    },
    profileImage: {
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


export default ProfileOverview;