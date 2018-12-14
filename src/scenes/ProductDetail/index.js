import React, { Component } from 'react';
import { Platform, ScrollView, Text, StyleSheet, Image } from 'react-native';
import ShoppingCarIcon from '../Components/Header/shoping-car-icon';
import { Container, Icon, View, Footer } from 'native-base';
import AddProductItem from '../Components/Products/item-add-product';
import { connect } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../../redux/actions/cart-action-creator';
import { CLEAN_CANT, MODIFY_CANT } from '../../redux/actionTypes/cart-action-types';
import HeaderComponent from '../Components/Header/header';
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.navigation.getParam('product', null),
            category: this.props.navigation.getParam('category', null),
        };
    }

    static navigationOptions = ({ navigation }) => ({
        header: (props) => {
            return (
                <HeaderComponent title={navigation.getParam('product', [{ name: '' }]).name} navigation={navigation}
                    hasBackButton={props.navigation.state.routes.length > 1}
                >
                    <ShoppingCarIcon />
                </HeaderComponent>
            )
        }
    });

    modifiedEvent = (product, type, cant) => {

        switch (type) {
            case MODIFY_CANT:
                product.cant = (product.cant) ? product.cant + cant : 1;
                if (product.cant < 0)
                    product.cant = 0;
                break;
            case CLEAN_CANT:
                product.modified = cant;
                if (!product.modified)
                    product.cant = 0;
                break;
        }

        product.total = product.price * product.cant;

        this.setState({
            product: product
        });
    };
    render() {
        return (
            <Container padder>
                <View style={styles.imageContent}>
                    <Image style={styles.image} source={{ uri: this.state.product.avatar }} />

                    <Icon style={{...styles.favoriteIcon,color: this.state.category.backgroundColor}} name='heart' />
                </View>
                <View style={styles.footer}>
                    <AddProductItem
                        product={this.state.product}
                        addEvent={this.props.addToCart}
                        removeEvent={this.props.removeFromCart}
                        modifiedEvent={this.modifiedEvent}
                    />
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: this.state.category.photo }} style={styles.CategoryImage}>
                    </Image>
                    <View style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: this.state.category.backgroundColor + (this.state.category.opacity-10)
                    }} />
                    <View style={styles.content}>
                    <ScrollView>
                        <Text style={styles.label}>${this.state.product.price}</Text>
                        <Text style={styles.label}>${this.state.product.price * 1.2}</Text>
                        <Text style={styles.label}>Description</Text>
                        <Text style={styles.description}>{this.state.product.description}</Text>
                    </ScrollView>
                    </View>
                </View>
                
            </Container>

        );
    }

}

const styles = StyleSheet.create({
    imageContent: {
        height: '50%',
        borderBottomColor: '#c0c0c0',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        overflow: 'visible',
        zIndex: 1
    },
    image: {
        width: 170,
        height: 170,
        resizeMode: 'contain',
        borderColor: '#c0c0c0',
        zIndex: 1,
    },
    favoriteIcon: {
        position: 'absolute',
        bottom: -18,
        left: 10,
        paddingLeft: 7,
        paddingTop: 5,
        width: 36,
        height: 36,
        borderRadius: 18,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    container: {
        flexDirection: 'row',
        width: null,
        height: 150,
        marginVertical: 1,
        flex: 1 
    },
    content: {
        flex: 1
    },  
    CategoryImage: {
        ...StyleSheet.absoluteFillObject,
    },
    label: {
        color: '#fff',
        fontSize: 18,
        paddingLeft: 10,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontStyle: 'italic',
        marginTop: 5,
        paddingLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    descriptionContent: {
        //backgroundColor: '#5dc5be',
        backgroundColor: '#26a69a90',
        zIndex: -1,
        flex: 1,
        padding: 15,
    },
    productName: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 10,
    },
    productPrice: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 16,
        alignSelf: 'center',
    },
    productOldPrice: {
        color: 'white',
        alignSelf: 'center',
    },
    productDescLabel: {
        marginTop: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    footer: {
        height: 50,
        borderWidth: 0.5,
        borderColor: '#053645',
        backgroundColor: '#053645cc',
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addProductToCart(product)),
        removeFromCart: (product) => dispatch(removeProductFromCart(product)),
    }
}

export default connect(null, mapDispatchToProps)(ProductDetail);