import { useState } from 'react';

import './App.css';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function App() {  
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault();
    setShowProductList(false);
  };

  const handleGetStartedClick = () => {
    setShowProductList(true);
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

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="landing-page-content">
          <div className="landing-page-inner-content">
            <h1>Welcome To Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>          
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <AboutUs/>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <Navbar
          onClickLinkItem={(e, linkName) => {
            e.preventDefault();
            if (linkName === '/') {
              handleHomeClick(e)
            }
            if (linkName === '/plants') {
              handlePlantsClick(e)
            }
            if (linkName === '/cart') {
              handleCartClick(e)
            }
          }}
        />
        {showCart
          ? <CartItem onContinueShopping={handleContinueShopping} />
          : <ProductList /> 
        }
      </div>
    </div>
  );
}

export default App;



