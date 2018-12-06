import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TECHNOLOGY } from '../data';
import {connect} from 'react-redux';
import ProductList from './product-list';
import { addProductToCart, removeProductFromCart } from '../../../redux/actions/cart-action-creator';

class TechnologyScreen extends Component {
  render() {
    return (
      <View>
        <ProductList onPressEvent={ this.props.addItemToCart} onLongPressEvent={ this.props.removeItemFromCart} products={ TECHNOLOGY }/>
      </View>
    )
  }
}
const mapDispatchToProps = (dispatch) =>  {
  return {
      addItemToCart: (product) => dispatch(addProductToCart(product)),
      removeItemFromCart: (product) => dispatch(removeProductFromCart(product))
  }
}

export default connect(null, mapDispatchToProps)(TechnologyScreen);