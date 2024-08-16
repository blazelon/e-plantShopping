import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ProductList.css'
import { cartSlice } from './CartSlice'
import ProductItem from './ProductItem';
import products from './products'

function ProductList() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(cartSlice.actions.addItem(product));
  };

  return (
    <div className="product-grid">
      {products.map((category, index) => (
        <div key={index}>
          <h1>{category.category}</h1>
          <div className="product-list">
            {category.plants.map((plant, index) => (
              <ProductItem
                key={index}
                item={plant}
                addedToCart={cart.some(item => item.name === plant.name)}
                onClickAddToCart={() => handleAddToCart(plant)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
