import React, { Component } from 'react';
import { Platform, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import CartItemProduct from './components/cart-item-product';
import { connect } from 'react-redux';
import HeaderComponent from '../Components/Header/header';
import { removeProductFromCart, removeAllFromCart, addProductToCart } from '../../redux/actions/cart-action-creator';
import { Container, Grid, Row, Button, Footer, Col, Fab, Icon, Separator } from 'native-base';
import { MODIFY_CANT, CLEAN_CANT } from '../../redux/actionTypes/cart-action-types';
class BagFul extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: this.props.cartItems,
            active: 'true'
        };
    }

    static navigationOptions = ({ navigation }) => ({
        header: (props) => {
            return (
                <HeaderComponent title="Cart" navigation={navigation}
                    hasBackButton={props.navigation.state.routes.length > 1}
                >
                </HeaderComponent>
            )
        }
    });

    renderImage = (image) => {
        if (image != "" && image != null) {
            return (
                <Left>
                    <Image source={{ uri: image }} style={styles.productImage} />
                </Left>
            );
        } else {
            <Left>
                <Image source={require('./../../../assets/images/NoImage.png')} style={styles.productImage} />
            </Left>
        }
    }

    keyExtractor = (item) => item._id.toString();

    modifiedEvent = (product, type, cant) => {
        let products = [];
        this.state.productList.forEach((item, index) => {
            if (item._id == product._id) {
                switch (type) {
                    case MODIFY_CANT:
                        item.cant = (item.cant) ? item.cant + cant : 1;
                        if (item.cant < 0)
                            item.cant = 0;
                        break;
                    case CLEAN_CANT:
                        item.modified = cant;
                        if (!item.modified)
                            item.cant = 0;
                        break;
                }
                item.total = product.price * product.cant;
            }
            products.push(item);
        });

        this.setState({
            productList: products
        });
    };
    render() {
        return (
            <Container>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="topRight"
                    onPress={() => this.props.removeAll()}>
                    <Icon name="trash" />
                </Fab>

                <Grid>
                    <Row style={styles.resume}>
                        <Col style={styles.labelContent}>
                            <Text style={styles.label}>Subtotal</Text>
                            <Text style={styles.label}>Coupon</Text>
                            <Text style={styles.label}>Iva</Text>
                            <Text style={styles.label}>Total</Text>
                            <Text style={styles.label}>Free Shipping</Text>
                        </Col>
                        <Col style={styles.valueContent}>
                            <Text style={styles.value}>$100</Text>
                            <Text style={styles.value}>$-10</Text>
                            <Text style={styles.value}>$19</Text>
                            <Text style={styles.value}>$90</Text>
                            <Text style={styles.value}>Yes</Text>
                        </Col>
                    </Row>

                    <Row>
                        <Separator bordered>
                            <Text>Added Products</Text>
                        </Separator>
                    </Row>
                    <ScrollView>
                        {(this.state.productList.length) ?
                            <Row style={styles.productList}>
                                <FlatList
                                    data={this.state.productList}
                                    renderItem={({ item }) => <CartItemProduct product={item}
                                        navigation={this.props.navigation}
                                        addEvent={this.props.addToCart}
                                        removeEvent={this.props.removeFromCart}
                                        modifiedEvent={this.modifiedEvent}
                                    />}
                                    keyExtractor={this.keyExtractor}
                                />
                            </Row>
                            : null
                        }
                    </ScrollView>
                </Grid>
                <Footer style={styles.footer}>
                    <Button style={styles.button} success onPress={() => this.props.navigation.navigate('Products')}>
                        <Text style={styles.text}> Keep buying </Text>
                    </Button>
                    <Button style={styles.button} onPress={() => this.props.navigation.navigate('PaymentSceneScreen')}>
                        <Text style={styles.text}> Payment methods </Text>
                    </Button>
                </Footer>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    productImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    labelContent: {
        fontWeight: 'bold',
        backgroundColor: '#053645',
        color: 'white',
        padding: 10,
        alignItems: 'flex-end',
    },
    valueContent: {
        padding: 10,
        alignItems: 'center',
        borderColor: '#053645',
        borderTopWidth: 2,
        borderBottomWidth: 2,
    },
    label: {
        color: 'white'
    },
    value: {
        color: '#053645'
    },
    resume: {
        flexDirection: 'row',
        marginTop: 15,
        flex: 1,
    },
    button: {
        padding: 2,
        margin: 2,
        backgroundColor: '#7efb7b',
    },
    text: {
        color: '#053645',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    }
});
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (product) => dispatch(removeProductFromCart(product)),
        addToCart: (product) => dispatch(addProductToCart(product)),
        removeAll: () => dispatch(removeAllFromCart()),
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BagFul);