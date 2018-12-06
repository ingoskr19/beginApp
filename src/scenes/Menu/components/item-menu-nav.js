import React from 'react';
import { Text} from 'react-native';
import {Icon, ListItem, Left, Right} from 'native-base';

const ItemMenuNav = props => (
    <ListItem button
        onPress={() => props.navigation.navigate(props.item.screen)}
    >
        <Left>
            <Icon active name={props.item.icon} />
            <Text>{props.item.title}</Text>
        </Left>
        <Right>
            <Icon name="arrow-forward" />
        </Right>
    </ListItem>
);

export default ItemMenuNav;

