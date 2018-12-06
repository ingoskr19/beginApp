import React from 'react';
import { Button, Icon } from 'native-base';

const HomeButton = (props) => (
    <Button transparent
        onPress={() => props.navigation.openDrawer()}
    >
        <Icon name="home" />
    </Button>
);

export default HomeButton;
