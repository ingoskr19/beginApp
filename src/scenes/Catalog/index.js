import React, { Component } from 'react';
import {Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import ItemProduct from './components/item-product';
import httpProducts from '../../services/Products/http-products';
import { List, ListItem } from 'native-base';
import HeaderComponent from '../Components/Header/header';
import ShoppingCarIcon from '../Components/Header/shoping-car-icon';
import {connect} from 'react-redux';
import { removeProductFromCart, addProductToCart } from '../../redux/actions/cart-action-creator';
import { CLEAN_CANT, MODIFY_CANT } from '../../redux/actionTypes/cart-action-types';
class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            category: this.props.navigation.getParam("category",[])
        };
    }

    componentDidMount = () => {
        this.getData()
    }

    static navigationOptions = ({ navigation }) => ({
        header: (props) => {
            return (
                <HeaderComponent title="Catalog" navigation={navigation}
                    hasBackButton={props.navigation.state.routes.length > 1}
                >
                    <ShoppingCarIcon/>   
                </HeaderComponent>
            )
        }
    });

    async getData() {
        const data = await httpProducts.getProducts();
        await this.setState({
            productList: data
        });
    }
    render() {
        if (this.state.productList.length>0) {
        return (
            <List
                dataArray={this.state.productList}
                style={styles.list}
                renderRow={item => {
                    return (
                        <ListItem style={styles.listItem}>
                            <ItemProduct product={item} navigation={this.props.navigation}
                                addEvent={ this.props.addToCart }
                                removeEvent={ this.props.removeFromCart }
                                modifiedEvent = { this.modifiedEvent }
                                category={this.state.category}
                            />
                        </ListItem>
                    );
                }}
            />
        ) } else {
            return <ActivityIndicator size="large" color="#7efb7b" />;
        }
    }

    modifiedEvent = (product,type,cant) => {   
        let products = [];
        this.state.productList.forEach((item,index)=>{
            if(item._id == product._id){
                switch (type){
                    case MODIFY_CANT:
                            item.cant = (item.cant) ? item.cant+cant : 1;
                            if(item.cant<0)
                                item.cant=0;
                        break;
                    case CLEAN_CANT: 
                        item.modified = cant;
                        if(!item.modified)
                            item.cant = 0;
                        break;
                }                
            }
            item.total = product.price * product.cant;
            products.push(item);
        });

        this.setState({
            productList: products
        });
    };

}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0,
    },
    listItem: {
        padding: 0,
        margin: 0,
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addProductToCart(product)),
        removeFromCart: (product) => dispatch(removeProductFromCart(product)),
    }
}

export default connect(null,mapDispatchToProps)(Catalog);