import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

const PlayPause = props => (
    <TouchableHighlight
        onPress={props.onPress}>
        {
            props.pause ? <Text>Play</Text> : <Text>Pause</Text>
        }
    </TouchableHighlight>
);

export default PlayPause;
