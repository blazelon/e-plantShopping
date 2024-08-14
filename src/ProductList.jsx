import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ProductList.css'
import { cartSlice } from './CartSlice'
import Navbar from './Navbar';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import products from './products'

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(cartSlice.actions.addItem(product));
  };
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };
  const handlePlantsClick = () => {
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const renderNavbar = () => {
    return (
      <Navbar
        onClickLinkItem={(e, linkName) => {
          e.preventDefault();
          if (linkName === 'plants') {
            handlePlantsClick(e)
          }
          if (linkName === 'cart') {
            handleCartClick(e)
          }
        }}
      />
    )
  }

  const renderMain = () => {
    if (showCart) {
      return (
        <CartItem onContinueShopping={handleContinueShopping} />
      )
    }

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
    )
  }

  return (
    <>
      {renderNavbar()}
      {renderMain()}
    </>
  );
}

export default ProductList;
