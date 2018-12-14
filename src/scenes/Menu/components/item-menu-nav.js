import React from 'react';
import { Text, StyleSheet} from 'react-native';
import {Icon, ListItem, Left, Right} from 'native-base';

const ItemMenuNav = props => (
    <ListItem button
        onPress={() => props.navigation.navigate(props.item.screen)}
    >
        <Left>
            <Icon active name={props.item.icon} />
            <Text style={styles.text}>{props.item.title}</Text>
        </Left>
        <Right>
            <Icon name="arrow-forward" />
        </Right>
    </ListItem>
);

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#053645'
    }
});
export default ItemMenuNav;

