import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './ProductList.css'
import { cartSlice } from './CartSlice'
import Navbar from './Navbar';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import products from './products'

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(cartSlice.actions.addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true, // Set the product name as key and value as true to indicate it's added to cart
    }));
  };
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
  };
  const handlePlantsClick = () => {
    setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
    setShowCart(false); // Hide the cart when navigating to About Us
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
                  addedToCart={Object.keys(addedToCart).some(key => key === plant.name)}
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
