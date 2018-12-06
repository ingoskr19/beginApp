import {StyleSheet} from 'react-native';

const cameraStyles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#000'
    },
    camera: {
      flex: 1
    },
    cameraContainer: {
      flex: 0.5,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      justifyContent: 'space-around'
    },
    containerBottomControl:{
      flex: 1,
      marginBottom: 20,
      flexDirection: 'row'
    }
  });

export default cameraStyles;