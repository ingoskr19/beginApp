import React from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './home-screen';
import ShoesScreen from './components/shoes-screen';
import TechnologyScreen from './components/technology-screen';
import ShoppingCarIcon from './components/shoping-car-icon';
import cartScreen from './components/cart-screen';

export const AppStackNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Shoes: {screen:ShoesScreen},
    Technology: {screen:TechnologyScreen},
    Cart: cartScreen
}, {
    initialRouteName: 'Home' ,
    navigationOptions: {
        headerTitle: 'My Store',
        headerRight: (
            <ShoppingCarIcon />
        )
    }
}
);