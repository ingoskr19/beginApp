import React from 'react';
import LottieView from 'lottie-react-native';
const CustomAnimation = props => (
        <LottieView
            ref={animation => {
                this.animation = animation;
            }}
            loop={false}
            //autoPlay={true}
            progress={props.progress}
            source={require('../../../assets/animations/checked_done.json')}
        />
    );

export default CustomAnimation;
