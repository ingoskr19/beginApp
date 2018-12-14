import React, { Component } from 'react'
import { StyleSheet, AsyncStorage } from 'react-native'
import { Container, Content, List, Icon, Right, Text, View, Item, Footer, FooterTab, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import httpUsers from '../../services/Users/http-users';

import ItemMenuNav from './components/item-menu-nav';
import HeaderMenu from './../Components/Menu/header-menu';

const routes = [
    {
        screen: 'Products',
        title: 'Products',
        icon: 'apps'
    },
    {
        screen: 'Cart',
        title: 'Go to Cart',
        icon: 'cart'
    },
    {
        screen: 'Chat',
        title: 'Chat',
        icon: 'person'
    },
    {
        screen: 'DevicesSwitch',
        title: 'Devices',
        icon: 'cube'
    },
    {
        screen: 'ReduxScene',
        title: 'Redux Implementation',
        icon: 'git-network'
    }
];

class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    }

    componentDidMount = async () => {
        this.getUserByToken();
    }

    async getUserByToken() {
        const token = await AsyncStorage.getItem('token');
        const data = await httpUsers.getUserByToken(token);
        this.setState({
            user: data
        });
    }

    singOut = async () => {
        await AsyncStorage.removeItem('token');
        this.props.navigation.navigate('AuthLoading');
    }
    render() {
        return (
            <Container>
                <Content>

                    <HeaderMenu user={this.state.user} navigation={this.props.navigation} />

                    <List style={styles.list}
                        dataArray={routes}
                        renderRow={item => {
                            return (
                                <ItemMenuNav item={item} navigation={this.props.navigation} />
                            );
                        }}
                    />
                </Content>

                <Button transparent onPress={this.singOut}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }}
                        end={{ x: 0.25, y: 1.0 }}
                        locations={[0, 0.5]}
                        colors={['#2c639e', '#053645']}
                        style={styles.linearGradient}
                    >
                        <Text style={styles.singOut}>Logout</Text>
                        <Right>
                            <Icon style={styles.singOutIcon} name="exit" size={14} />
                        </Right>
                    </LinearGradient>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    singOutIcon: {
        alignSelf: 'flex-end',
        color: '#7efb7b'
    },
    singOut: {
        fontSize: 15,
        textAlign: 'center',
        alignSelf: 'center',
        margin: 1,
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    linearGradient: {
        flex: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
});
export default SideMenu;