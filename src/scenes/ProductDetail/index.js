import React, { Component } from 'react';
import { Platform, ScrollView, Text, StyleSheet, Image } from 'react-native';
import HeaderComponent from '../NativeBase/components/header';
import ShoppingCarIcon from '../Components/Header/shoping-car-icon';
import { Container, Icon, View, Footer } from 'native-base';
import AddProductItem from '../Components/Products/item-add-product';
import { connect } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../../redux/actions/cart-action-creator';
import { CLEAN_CANT, MODIFY_CANT } from '../../redux/actionTypes/cart-action-types';
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.navigation.getParam('product', null),
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

        this.setState({
            product: product
        });
    };
    render() {
        return (
            <Container padder>
                <View style={styles.imageContent}>
                    <Image style={styles.image} source={{ uri: this.state.product.avatar }} />

                    <Icon style={styles.favoriteIcon} name='heart' />
                </View>

                <View style={styles.descriptionContent}>
                    <ScrollView>
                        <Text style={styles.productName}>{this.state.product.name}</Text>
                        <Text style={styles.productPrice}>${this.state.product.price}</Text>
                        <Text style={styles.productOldPrice}>${this.state.product.price * 1.2}</Text>
                        <Text style={styles.productDescLabel}>Description</Text>
                        <Text>{this.state.product.description}</Text>
                    </ScrollView>
                </View>
                <Footer>
                    <View style={styles.footer}>
                        <AddProductItem
                            product={this.state.product}
                            addEvent={this.props.addToCart}
                            removeEvent={this.props.removeFromCart}
                            modifiedEvent={this.modifiedEvent}
                        />
                    </View>
                </Footer>
            </Container>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    imageContent: {
        height: '56.25%',
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
        color: '#c0c0c0',
        position: 'absolute',
        bottom: -18,
        right: 20,
        paddingLeft: 7,
        paddingTop: 5,
        width: 36,
        height: 36,
        borderRadius: 18,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    descriptionContent: {
        backgroundColor: '#5dc5be',
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
        color: '#1e914e',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 16,
        alignSelf: 'center',
    },
    productOldPrice: {
        color: '#aa0000',
        alignSelf: 'center',
    },
    productDescLabel: {
        marginTop: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    footer: {
        flex: 1,
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