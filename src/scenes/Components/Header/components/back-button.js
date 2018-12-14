import React from 'react';
import {StyleSheet} from 'react-native';
import {Button,Icon,} from 'native-base';

const BackButton = (props) => (
    <Icon name="arrow-back" style={styles.icon}
        onPress={() => props.navigation.goBack(null)}
    />
);

const styles = StyleSheet.create({
    icon: {
        color: '#7efb7b'
    }
});

export default BackButton;
