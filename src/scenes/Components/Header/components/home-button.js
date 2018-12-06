import React from 'react';
import { Button, Icon } from 'native-base';

const HomeButton = (props) => (
    <Icon name="menu"
        onPress={() => props.navigation.openDrawer()}
    />
);

export default HomeButton;
