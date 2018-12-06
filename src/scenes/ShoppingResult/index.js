import React, { Component } from 'react';
import {Platform, View, Text, SectionList, StyleSheet } from 'react-native';

class ShoppingResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: []
        };
    }

    componentDidMount = () => {
        const contacts = [
            {
                id: 1,
                name: 'Juan Perez',
                phone: '3129993234',
                photo: 'http://static.t13.cl/images/sizes/1200x675/mgr_homero-simpson.jpg'
            },
        ];

        this.setState({
            contactList: contacts
        });
    }
    render() {
        return (
            <View>
                <Text>ShoppingResult</Text>
            </View>
        );
    }

}

export default ShoppingResult;