import React, { Component } from 'react';
import {Platform, View, Text, SectionList, StyleSheet } from 'react-native';

import ItemContact from './../Contacts/components/item-contact';
import CustomText from './components/custom-text';

class Diary extends Component {
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
            {
                id: 2,
                name: 'Carlos Sierra',
                phone: '3205993234',
                photo: 'https://davidkallin.files.wordpress.com/2010/11/bart-simpson.jpg'
            },
            {
                id: 3,
                name: 'Carolina Ruiz',
                phone: '3115745234',
                photo: 'http://www.sufridoresencasa.com/wp-content/uploads/2016/12/marge-simpson-retrato.png'
            },
            {
                id: 4,
                name: 'Julio Dominguez',
                phone: '32259456234',
                photo: 'https://pbs.twimg.com/profile_images/918172359017795584/bBdQjDS7_400x400.jpg'
            },
        ];

        this.setState({
            contactList: contacts
        });
    }

    renderItem = ({ item }) => <ItemContact navigation={this.props.navigation} contact={item} />
    sectionHeader = ({ section }) => 
    <Text style={styles.header}>
        {section.key}
    </Text>
    keyExtractor = (item) => item.id.toString()
    render() {
        return (
            <View>
                <CustomText/>
                
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.sectionHeader}
                    sections={[
                        {
                            data: this.state.contactList, key: 'A'
                        },
                        {
                            data: this.state.contactList, key: 'B'
                        },
                        {
                            data: this.state.contactList, key: 'C'
                        },
                        {
                            data: this.state.contactList, key: 'D'
                        }
                    ]}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }

}
const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS == 'IOS' ? '#2c6087': '#5dba5e',
        marginBottom: 5,
        ...Platform.select({
            ios: {
                paddingVertical: 5,
            }, 
            android: {
                paddingVertical: 15,
                marginBottom: 15,
                alignItems: 'center',
            }
        })
    }
});

export default Diary;
