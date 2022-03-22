import React from 'react';
import './Product.css';

const Product = ({ product, orderSummery }) => {
    let { id, img, name, price, quantity, ratings, seller, stock, category } = product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className="product-info">
                <h5>Name: {name}</h5>
                <h5>Price: {price}$</h5>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
                <p>Stock: {stock}</p>
                <p>Cateogry: {category}</p>
            </div>
            <button onClick={() => orderSummery(product)}>Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
        </div>
    );
};

export default Product;