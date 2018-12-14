import React from 'react';
import {StyleSheet} from 'react-native';
import { Button, Icon } from 'native-base';

const HomeButton = (props) => (
    <Icon name="menu" style={styles.icon}
        onPress={() => props.navigation.openDrawer()}
    />
);

const styles = StyleSheet.create({
    icon: {
        color: '#7efb7b'
    }
});

export default HomeButton;
