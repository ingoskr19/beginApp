import React, { Component } from 'react';
import {Splash} from './src/navigation/navigator';
import RNLanguage from 'react-native-languages';
import i18n from './src/i18n';
import store from './src/redux/store';
import {Provider} from 'react-redux';

export default class App extends Component<> {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    RNLanguage.addEventListener('change',this.onChangeLanguage)
  }

  componentWillUnmount(){
    RNLanguage.removeEventListener('change',this.onChangeLanguage)
  }

  onChangeLanguage = ({language}) => {
    i18n.locale=language;
  }

  render() {
    return (
      <Provider store={store}>
        <Splash/>
      </Provider>
    );
  }
}