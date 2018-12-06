import React, { Component } from 'react';
import { Platform, ToastAndroid, View, ActivityIndicator, AsyncStorage } from 'react-native';

import FollowOverview from './components/follow-overview';
import FormOverview from './components/form-overview';
import httpUsers from '../../services/Users/http-users';
import HeaderMenu from '../Components/Menu/header-menu';
import HeaderComponent from '../Components/Header/header';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: null,
            title: 'Profile'
        }
    }

    componentDidMount() {
        this.getUserByToken();
    }

    async getUserByToken(){
        const token = await AsyncStorage.getItem('token');
        const data = await httpUsers.getUserByToken(token);
        this.setState({
            profile: data,
        });

        this.navigationOptions.headerTitle = 'Profile - '+this.state.profile.name;
        this.props.navigation.setParams({ name });
    }


    showAlert() {
        ToastAndroid.showWithGravity(
            'All Your Base Are Belong To Us',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        ToastAndroid.showWithGravityAndOffset(
            'A wild toast appeared!',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    }

    onChangeText = text => {
        this.setState({ ...this.state.profile, name: text });
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: (props) => (
                <HeaderComponent title="Profile" navigation={navigation}
                    hasBackButton={props.navigation.state.routes.length > 1}
                />
            )
        }
    }

    render() {
        return (this.state.profile) ?
         (
            <View>
                <HeaderMenu user={this.state.profile} />

                <FollowOverview {...this.state.profile} />

                <FormOverview
                    onPress={this.showAlert}
                    profile={this.state.profile}
                    onChangeText={this.onChangeText}
                    navigation={this.props.navigation}
                />
            </View>
        )
        :
        <ActivityIndicator size="large" color="#7efb7b" size={24} />
        ;
    }
}

export default Profile;

