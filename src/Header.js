import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      {/* {logo on the left-> img} */}
      <Link to="/login">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo ki pic"
        />
      </Link>
      {/* {Search} */}
      <div className="header__search">
        <input type=" " className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* {3 links} */}
      <div className="header__nav">
        {/* 1st Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Seller</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>

        {/* 2nd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th Link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping Basket Icon */}
            <ShoppingBasketIcon />

            {/* Number of items */}
            <span className="header__optionLineTwo header__basketCount">
              {/*basket?.length*/}
            </span>
          </div>
        </Link>
        {/* {Basket icon with number} */}
      </div>
    </nav>
  );
}

export default Header;
