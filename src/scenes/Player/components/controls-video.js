import React from 'react';
import { StyleSheet, View } from 'react-native';

const ControlsVideo = props => (
    <View style={styles.container}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 35,
        flexDirection: 'row',
        alignContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.7)',
    }
});

export default ControlsVideo;
