import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ProductList from './product-list';
import {connect} from 'react-redux';
import { removeProductFromCart } from '../../../redux/actions/cart-action-creator';
class CartScreen extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <ProductList onPressEvent={ this.props.removeItemFromCart} products={this.props.cartItems} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = (state) =>  {
    return {
        cartItems: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromCart: (product) => dispatch(removeProductFromCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);