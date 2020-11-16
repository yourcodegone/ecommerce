import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();


export default class ProductProvider extends Component {
    state={
        products: storeProducts,
        detailProduct
    }

    handleDetail = () => {
        console.log('detail');
    }
    addToCart = () => {
        console.log('cart');
    }

    render() {
        return (
            //Provider
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

//Consumer
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};