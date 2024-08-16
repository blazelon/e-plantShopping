import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import CartIcon from './CartIcon';

const Navbar = ({ onClickLinkItem }) => {
  const cart = useSelector(state => state.cart.items);
  
  const cartCount = useMemo(() => {
    if (cart.length === 0) return 0;

    return cart.reduce((total, item) => {
      total += item.quantity;
      return total;
    }, 0)
  }, [cart]);

  return (
    <div className="navbar">
      <a href="#" onClick={(e) => onClickLinkItem(e, '/')} className="navbar-brand">
        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
        <div>
          <h3>Paradise Nursery</h3>
          <small>Where Green Meets Serenity</small>
        </div>
      </a>
      <div className="navbar-links">
        <div>
          <a href="#" onClick={(e) => onClickLinkItem(e, '/plants')}>Plants</a>
        </div>
        <div>
          <a href="#" onClick={(e) => onClickLinkItem(e, '/cart')}>
            <CartIcon />
            {cartCount}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;