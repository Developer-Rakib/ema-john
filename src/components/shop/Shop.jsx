import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    let [products, setProducts] = useState([]);
    let [cartItem, setCartItem] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    const orderSummery = (product) => {
        let newCartItem = [...cartItem, product]
        setCartItem(newCartItem)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        orderSummery={orderSummery}
                    ></Product>)
                }
            </div>
            <div className="orderSummary-container">
                <h3>Order Summary</h3>
                <h5>Selected Item: {cartItem.length}</h5>
            </div>
        </div>
    );
};

export default Shop;