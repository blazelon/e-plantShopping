import React from 'react';
import CartIcon from './CartIcon';

const Navbar = ({ onClickLinkItem }) => {
    return (
      <div className="navbar">
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
            <a href="/">
              <div>
                <h3>Paradise Nursery</h3>
                <i>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div>
            <a href="#" onClick={(e) => onClickLinkItem(e, 'plants')}>Plants</a>
          </div>
          <div>
            <a href="#" onClick={(e) => onClickLinkItem(e, 'cart')}><CartIcon /></a>
          </div>
        </div>
      </div>
    )
}

export default Navbar;