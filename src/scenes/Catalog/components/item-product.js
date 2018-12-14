import React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Left, Content, Card, CardItem, Text, View} from 'native-base';
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
const ItemProduct = (props) => {
    return (
        <Content>
            <Card style={styles.container}>
                <CardItem header style={styles.cardHeader}>
                    <Text style={styles.productName}>{props.product.name}</Text>
                </CardItem>
                <TouchableHighlight onPress={() => props.navigation.navigate('ProductDetailScreen', {category: props.category, product: props.product })}
                    underlayColor='#626663'>
                    <CardItem>
                        {renderImage(props.product.avatar)}
                        <Text>{props.product.description}</Text>
                    </CardItem>
                </TouchableHighlight>
                <CardItem footer style={styles.cardFooter}>
                    <View style={styles.footer}>

                        <Text style={styles.productPrice}>${props.product.price}</Text>

                        <View style={styles.addProductItem}>
                            <AddProductItem 
                            addEvent={props.addEvent}
                            removeEvent={props.removeEvent}
                            modifiedEvent={props.modifiedEvent}
                            product={props.product}/>
                        </View>    
                    </View>
                </CardItem>
            </Card>
        </Content>
    );
};

const styles = StyleSheet.create({
    container:{
        padding: 0,
        margin: 0,
        elevation: 0,
        borderWidth: 0.5,
        borderColor: '#053645',
    },
    cardHeader: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#053645',
    },
    cardFooter: {
        borderWidth: 0.5,
        borderColor: '#053645',
        backgroundColor: '#053645cc',
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
    bodyContent: {
        flexDirection: 'row',
    },
    productDescription: {
        fontSize: 12,
        textAlign: 'justify'
    },
    productPrice: {
        flex: 3,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        color: '#7efb7b'
    },
    addProductItem: {
        flex: 5,
        backgroundColor: 'transparent',
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

export default ItemProduct;

