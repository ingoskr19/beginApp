import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import ProductItem from './product-item';

class ProductList extends Component {

    keyExtractor = (item) => item.id.toString();
  render() {
    return (
      <View>
        <FlatList
        data={this.props.products}
        renderItem={({item}) => <ProductItem onPressEvent={ this.props.onPressEvent }
        onLongPressEvent={ this.props.onLongPressEvent }
         item={ item }/>}
        keyExtractor={this.keyExtractor}
        ></FlatList>
      </View>
    )
  }
}

export default ProductList;