import React from 'react';
import { useState, useEffect } from 'react'
import { addtoLocalStore, getDataFromStore } from '../../utilities/Storage';
import useCart from '../../utilities/useCart';
import useProduct from '../../utilities/useProduct';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    let [products, setProducts] = useState([]);
    let [pages, setPages] = useState(0);
    let [size, setSize] = useState(10);
    let [currentPage, setCurrenPages] = useState(0);
    let [cartItem, setCartItem] = useCart(products);

    const orderSummery = (selectedProduct) => {
        let newCartItem = [];
        let exist = cartItem.find(product => product._id === selectedProduct._id)
        if (!exist) {
            selectedProduct.quantity = 1;
            newCartItem = [...cartItem, selectedProduct]

        } else {
            const rest = cartItem.filter(product => product._id !== selectedProduct._id);
            exist.quantity = exist.quantity + 1;
            newCartItem = [...rest, exist]
        }
        setCartItem(newCartItem);
        addtoLocalStore(selectedProduct._id);
    }
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, size])

    useEffect(() => {
        fetch(`http://localhost:5000/productCount`)
            .then(res => res.json())
            .then(data => {
                console.log(data.count);
                setPages(Math.ceil(data.count / size));
            })
    }, [size])

    const handlePage = (number) => {
        setCurrenPages(number);
        window.scroll(0, 10)
    }

    return (
        <>

            <div className='shop-container'>

                <div className="products-section">
                    <div className="products-container">

                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                                orderSummery={orderSummery}
                            ></Product>)
                        }
                    </div>
                    <div className='page-btn'>
                        {
                            [...Array(pages).keys()].map((number) => <button
                                className={currentPage == number ? "selected" : ""}
                                key={number}
                                onClick={() => handlePage(number)}
                            >{number + 1}</button>)
                        }
                        <span>Per Page :</span>
                        {
                            <select name="" id="" onChange={e => setSize(e.target.value)}>
                                <option defaultValue={10}>10</option>
                                <option value="5">5</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        }
                    </div>
                </div>
                <div className="orderSummary-container">
                    <Cart data={cartItem}></Cart>
                </div>
            </div>
        </>
    );
};


export default Shop;
