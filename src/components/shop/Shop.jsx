import React from 'react';
import { useState, useEffect } from 'react'
import { addtoLocalStore, getDataFromStore } from '../../utilities/Storage';
import Cart from '../cart/Cart';
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
    useEffect(() => {
        let getData = getDataFromStore();
        let savedCart = [];
        for (const id in getData) {
            let addedItem = products.find(product => product.id === id);
            if (addedItem) {
                let quantity = getData[id];
                addedItem.quantity = quantity;
                savedCart.push(addedItem)
            }
        }
        setCartItem(savedCart)
    }, [products])
    const orderSummery = (selectedProduct) => {
        let newCartItem = [];
        let exist = cartItem.find(product => product.id === selectedProduct.id)
        if (!exist) {
            selectedProduct.quantity = 1;
            newCartItem = [...cartItem, selectedProduct]

        } else {
            const rest = cartItem.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCartItem = [...rest, exist]
        }


        setCartItem(newCartItem);
        addtoLocalStore(selectedProduct.id);

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
                <Cart data={cartItem}></Cart>
            </div>
        </div>
    );
};


export default Shop;
