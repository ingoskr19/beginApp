import React, { Component } from 'react';
import {
    Platform,
    ToastAndroid,
    View,
    Text,
    Button,
    FlatList
} from 'react-native';
import ItemContact from './components/item-contact';
import ItemSeparator from './components/item-separator';

class Contacts extends Component {

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
    separatorComponent = ({}) => <ItemSeparator />
    emptyComponent = () => <Text>No hay Contacts</Text>
    keyExtractor = (item) => item.id.toString()

    render() {
        return (
            <View>
                <Text>Hola Contactos {this.props.navigation.getParam('name', 'NO-SUPERHERO')}</Text>
                {/* <Button
                    title="Go Back"
                    onPress={() => { this.props.navigation.goBack() }}
                />
                */}

                <FlatList
                    data={this.state.contactList}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.separatorComponent}
                    ListEmptyComponent={this.emptyComponent}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        )
    }
}

export default Contacts;