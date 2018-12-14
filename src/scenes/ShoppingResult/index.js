import React, { Component } from 'react';
import { Platform, View, Text, Animated, Easing, StyleSheet, TouchableHighlight } from 'react-native';
import LottieView from 'lottie-react-native';
import { Container, Content, Item, Button, FooterTab, Footer } from 'native-base';
import HeaderComponent from '../Components/Header/header.js';
class ShoppingResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
        };
    }

    static navigationOptions = ({ navigation }) => ({
        header: (props) => {
            return (
                <HeaderComponent title="Shopping Result" navigation={navigation}
                    hasBackButton={props.navigation.state.routes.length > 1}
                >
                </HeaderComponent>
            )
        }
    });

    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear,
        }).start();
    }
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        loop={false}
                        //autoPlay={true}
                        progress={this.state.progress}
                        source={require('../../../assets/animations/checked_done.json')}
                    />
                </View>

                <Footer>
                <FooterTab>
                    <Button full style={styles.button} onPress={() => this.props.navigation.navigate('CategoriesScreen')}>
                    <Text>Go to Products</Text>
                    </Button>
                </FooterTab>
                </Footer>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#7efb7b',
    },
    text: {
        color: '#053645',
    }
});
export default ShoppingResult;