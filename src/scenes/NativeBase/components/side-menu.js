import React, { Component } from 'react'
import { Text, ImageBackground, Image, StyleSheet } from 'react-native'
import { Container, Content, List, ListItem, Left, Icon, Right } from 'native-base';

const routes = [
    {
        screen: 'HomeDrawer',
        title: 'Home',
        icon: 'home'
    },
    {
        screen: 'LoginStack',
        title: 'Login',
        icon: 'person'
    }
];
class SideMenu extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                    <ImageBackground
                        source={{ uri: 'http://papers.co/wallpaper/papers.co-vw07-galaxy-s8-android-dark-star-pattern-background-40-wallpaper.jpg' }}
                        style={styles.imageBackground}
                    >

                    <Image
                        source={{ uri: 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg' }}
                        style={styles.avatar}
                    />

                    </ImageBackground>
                    <List style={styles.list}
                        dataArray={routes}
                        renderRow={item => {
                            return (
                                <ListItem button
                                    onPress={() => navigation.navigate(item.screen)}
                                >
                                    <Left>
                                        <Icon active name={item.icon} />
                                        <Text>{item.title}</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    list: {

    }
});
export default SideMenu;