import React, { Component } from 'react';
import {Platform, View, Text } from 'react-native';

class BagFul extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: []
        };
    }

    componentDidMount = () => {
    }
    render() {
        return (
            <View>
                <Text>BagFul</Text>
            </View>
        );
    }

}

export default BagFul;