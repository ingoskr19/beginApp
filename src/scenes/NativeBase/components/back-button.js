import React from 'react';
import {Button,Icon} from 'native-base'

const BackButton = (props) => (
    <Icon name="arrow-back"
        onPress={() => props.navigation.goBack(null)}
        />
);

export default BackButton;
