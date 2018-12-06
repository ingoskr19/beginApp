import React from 'react';
import { Slider, StyleSheet } from 'react-native';

const ZoomSlider = (props) => (
    <Slider style={styles.slider}
          onValueChange={props.event}
          step={0.1}
          maximumValue={1}
          orientation="vertical"
          />
);

const styles = StyleSheet.create({
    slider: {
        alignSelf: 'flex-end',
        width: 200,
        color: '#12cc09'
    }
});
export default ZoomSlider;
