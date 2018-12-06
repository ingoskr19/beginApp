import React from 'react';
import {
    View,
    Text,
    TextInput,
    Switch,
    Button,
    StyleSheet
} from 'react-native'

const FormOverview = props => (


    <View style={styles.formWrapper}>
        <Button
            title="My Contacts"
            onPress={() => { props.navigation.navigate('ContactsScreen', { name: 'Iron Man' }) }}
        />
        <Text style={styles.formLabel}> Name </Text>
        <TextInput
            placeholder="Name here...."
            style={styles.formInput}
            value={props.profile.name}
            onChangeText={props.onChangeText}
        />
        <Text style={styles.formLabel}> @Twitter </Text>
        <TextInput
            placeholder="Twiter here..."
            style={styles.formInput}
            value={props.profile.twitters}
        />
        <Text style={styles.formLabel}> Phone </Text>
        <TextInput
            placeholder="Phone here..."
            style={styles.formInput}
            value={props.profile.phone}
        />
        <Text style={styles.formLabel}> Location </Text>
        <TextInput
            placeholder="Location here..."
            style={styles.formInput}
            value={props.profile.location}
        />
        <Text style={styles.formLabel}> Allow Share Social Data </Text>
        <Switch
            onTintColor={'#4A148C'}
            value={true} />
        <Button
            onPress={props.onPress}
            title={1 == 2 ? "Sync with Facebook" : "no show nothin"}
            color={'#4A148C'} />
    </View>
)

const styles = StyleSheet.create({
    formWrapper: {
        marginVertical: 15,
    },
    formLabel: {
        color: '#4527A0',
    },
    formInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
});

export default FormOverview;