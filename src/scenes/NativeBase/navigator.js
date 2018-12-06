import React, { Component } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import Home from './components/home';
import SideMenu from './components/side-menu';
import Login from './components/login';
import TermsScene from './components/terms';

const navigator = createStackNavigator({
    LoginStack: {screen: Login},
    TermsStack: {screen: TermsScene}
},{
    initialRouteName: 'LoginStack'
});

export default Nav = createDrawerNavigator({
    HomeDrawer: { screen: Home },
    LoginDrawer: navigator
}, {
        contentComponent: SideMenu
});