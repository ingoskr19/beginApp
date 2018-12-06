import React from 'react';
import {StackNavigator, DrawerNavigator, createSwitchNavigator} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import BagFul from './../scenes//BagFul';
import ShoppingResult from './../scenes//ShoppingResult';
import PurchaseSummary from './../scenes//PurchaseSummary';
import ProductDetail from './../scenes//ProductDetail';
import Catalog from './../scenes//Catalog';
import Categories from './../scenes//Categories';
import Profile from './../scenes//Profile';
import Contacts from './../scenes//Contacts';
import Diary from './../scenes//Diary';

import Tab1 from './../scenes/BagFul/components/tab1';
import Tab2 from './../scenes/BagFul/components/tab2';
import Tab3 from './../scenes/BagFul/components/tab3';
import SideMenu from './../scenes/Menu/side-menu';
import Auth from './../scenes/login/auth';
import AuthLoading from './../scenes/login/auth-loading';
import Player from './../scenes/Player';
import { Localization } from './../scenes/geolocalization';
import CameraScene from './../scenes/Camera';
import CameraRollScene from './../scenes/CameraRollScene';
import NativeBaseScene from './../scenes/NativeBase';
import ReduxScene from './../scenes/redux';
import DevicesScene from '../scenes/Devices';

 const ProfileNavigator = StackNavigator({
  ProfileScreen: {
    screen: Profile,
    navigationOptions: () => ({
      title: 'Profile'
    })
  },
  ContactsScreen: {
    screen: Contacts,
    navigationOptions: () => ({
      title: 'Contacts'
    }),
    headerTitleStyle: {
      fontSize: 26,
    }
  },
  DiaryScreen: {
    screen: Diary,
    navigationOptions: () => ({
      title: 'Diary'
    })
  }
}, {
  initialRouteName: 'ProfileScreen',
  /*headerStyle: {
    backgroundColor: '#7B1FA2',
    borderBottomColor: '#7B1FA2'
  },
  headerTitleStyle: {
    fontSize: 18,
  },
  headerTintColor: '#7B1FA2',*/
});

 const BagFulNavigator = StackNavigator({
  BagFulScreen: {
    screen: BagFul,
    navigationOptions: () => ({
      title: 'BagFul'
    }),
    headerTitleStyle: {
      fontSize: 26,
    }
  }
}, {
  initialRouteName: 'CategoriesScreen',
  headerStyle: {
    backgroundColor: '#7B1FA2',
    borderBottomColor: '#7B1FA2'
  },
  headerTitleStyle: {
    fontSize: 18,
  },
  headerTintColor: '#7B1FA2',
});

 const ProductsNavigator = StackNavigator({
  CategoriesScreen: {
    screen: Categories,
  },
  CameraScreen: {
  screen: CameraScene,
  navigationOptions: {
    header: null
  }
  },
  CameraRollScreen: {
  screen: CameraRollScene,
  navigationOptions: {
    header: null
  }
  },
  CatalogScreen: Catalog,
  ProductDetailScreen: ProductDetail,

  PurchaseSummaryScreen: {
    screen: PurchaseSummary,
    navigationOptions: () => ({
      title: 'Summary'
    }),
    headerTitleStyle: {
      fontSize: 26,
    }
  },

  ShoppingResultScreen: {
    screen: ShoppingResult,
    navigationOptions: () => ({
      title: 'Shopping Result'
    }),
    headerTitleStyle: {
      fontSize: 26,
    }
  }

},
  {
    initialRouteName: 'CategoriesScreen',
    headerStyle: {
      backgroundColor: '#7B1FA2',
      borderBottomColor: '#7B1FA2'
    },
    headerTitleStyle: {
      fontSize: 18,
    },
    headerTintColor: '#7B1FA2',
  }
);

const DevicesNavigator = StackNavigator({
  DevicesStack: DevicesScene,
  CameraStack: {
  screen: CameraScene,
  navigationOptions: {
    header: null
  }
  },
  GalleryStack: CameraRollScene,
  PlayerStack: Player,
  LocalizationStack: Localization,
},
  {
    initialRouteName: 'DevicesStack',
  }
);

 const Tabs = createBottomTabNavigator({
    Tab1: {
      screen: Tab1,
      navigationOptions: {
        title: 'T1',
      }
    },
    Tab2: {
      screen: Tab2,
      navigationOptions: {
        title: 'T2'
      }
    },
    Tab3: {
      screen: Tab3,
      navigationOptions: {
        title: 'T3'
      }
    },
}, {
  order: ['Tab1','Tab2','Tab3'],
  initialRouteName: 'Tab2',
  tabBarOptions: {
    activeTintColor: '#c0c0c0',
    labelStyle: {
      fontSize: 15
    },
    style: {
      backgroundColor: 'black'
    }
  }
});

const Drawer = DrawerNavigator({
    Products: { screen: ProductsNavigator},
    BagFul: { screen: Catalog},
    Profile: { screen: ProfileNavigator},
    Shopping: { screen: ShoppingResult}
},
{
  drawerWidth: 250,
  contentComponent: SideMenu,
  drawerLabel: 'Home',
},
);

export const Splash = createSwitchNavigator({
  Auth: Auth,
  AuthLoading: AuthLoading,
  Products: Drawer,
  Profile: ProfileNavigator,
  Tabs: Tabs,
  Cart: BagFul,
  NativeScene: NativeBaseScene,
  ReduxScene: ReduxScene,
  DevicesSwitch: DevicesNavigator,
},{
  initialRouteName: 'AuthLoading',
});