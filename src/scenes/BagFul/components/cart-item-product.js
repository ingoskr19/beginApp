import React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Left, Grid, Text, View, Col, Item} from 'native-base';
import AddProductItem from '../../Components/Products/item-add-product';
renderImage = (image) => {
    if (image != "" && image != null) {
        return (
            <Left>
                <Image source={{ uri: image }} style={styles.productImage} />
            </Left>
        );
    } else {
            <Left>
                <Image source={require('./../../../../assets/images/NoImage.png')} style={styles.productImage} />
            </Left>
    }
}
const CartItemProduct = (props) => {
    return (
        
        <Item button onPress={()=>props.navigation.navigate('ProductDetail', {product: props.product})}>
        <Grid>
            <Col style={styles.container}>
                {renderImage(props.product.avatar)}
            </Col>
            <Col style={styles.container}>
                <Text style={styles.productName}>{props.product.name}</Text>

                <Text style={styles.productPrice}>${props.product.price}</Text>
                <Text style={styles.productPrice}>${props.product.total}</Text>
            <View style={styles.addProductItem}>
                <AddProductItem 
                addEvent={props.addEvent}
                removeEvent={props.removeEvent}
                modifiedEvent={props.modifiedEvent}
                product={props.product}/>
            </View>
            </Col>
        </Grid>
        </Item>
    );
};

const styles = StyleSheet.create({
    container:{
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderColor: 'gray',
        marginTop: 10,
        paddingTop: 5,
    },
    productImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    productName: {
        fontSize: 12,
        color: '#053645'
    },
    productImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    productDescription: {
        fontSize: 12,
        textAlign: 'justify'
    },
    productPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        color: '#053645',
    },
    addProductItem: {
        backgroundColor: '#053645',
    },
    heartImg:{
        width: 24,
        resizeMode: 'contain',
        height: 24,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CartItemProduct;