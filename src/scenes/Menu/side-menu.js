import React, { Component } from 'react'
import { StyleSheet, AsyncStorage } from 'react-native'
import { Container, Content, List, Icon, Right, Text, View, Item } from 'native-base';
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
        screen: 'LoginStack',
        title: 'Login',
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
                    
                    <HeaderMenu user={this.state.user} navigation={this.props.navigation}/>
                    
                    <List style={styles.list}
                        dataArray={routes}
                        renderRow={item => {
                            return (
                                <ItemMenuNav item={item} navigation={this.props.navigation} />
                            );
                        }}
                    />
                </Content>

                <View style={styles.footer}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }}
                        end={{ x: 0.25, y: 1.0 }}
                        locations={[0, 0.5]}
                        colors={['#2c639e', '#053645']}
                        style={styles.linearGradient}
                    >
                        <Item button onPress={this.singOut}>
                            <Text button style={styles.singOut}
                            >Logout</Text>
                            <Right>
                                <Icon style={styles.singOutIcon} name="exit" size={16} />
                            </Right>
                        </Item>
                    </LinearGradient>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    singOutIcon: {
        alignSelf: 'flex-end',
        color: 'white'
    },
    singOutContent: {

    },
    singOut: {
        //backgroundColor: '#7efb7b',
        fontSize: 14,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        alignSelf: 'center',
        margin: 1,
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    footer: {
        width: 150,
        height: 24,
        position: 'absolute',
        bottom: 10,
        left: 50
    }
});
export default SideMenu;