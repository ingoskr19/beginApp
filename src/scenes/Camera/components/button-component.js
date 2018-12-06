import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import CommonStyles from '../styles/common-styles';

const Button = (props) => (
    <TouchableHighlight
          style={CommonStyles.button}
          onPress={props.event}
        >
          <Text style={CommonStyles.textButton}>{props.text} {props.value}</Text>
    </TouchableHighlight>
);

export default Button;
