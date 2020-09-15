import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SignInScreen from "./screens/SignInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrdersScreen from "./screens/OrdersScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MonthlyDropScreen from "./screens/MonthlyDropScreen";
import CollectionsScreen from "./screens/CollectionsScreen";
import LookBookScreen from "./screens/LookBookScreen";
import HelpScreen from "./screens/HelpScreen";
import logo from "./../src/logo.jpg";

import { SocialIcon } from "react-social-icons";
import Moment from "react-moment";
import "moment-timezone";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">
              Milliy
              <img src={logo} alt="sl" width="30px" height="40px" />r
            </Link>
          </div>
          <div className="header-links">
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
            <Link to="/cart">Cart</Link>
            {userInfo ? (
              <Link to="/profile"> {userInfo.name} </Link>
            ) : (
              <Link to="/signin"> Log In </Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Menu</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="menubar">
            <li>
              <Link onClick={closeMenu} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/monthly">
                Monthly Drops
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/collections">
                Collections
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/lookbook">
                Milliyar Lookbook
              </Link>
            </li>
            <li>
              <Link>
                <SocialIcon
                  className="center-img"
                  url="https://www.facebook.com/milliyarltd"
                  style={{ height: 30, width: 30 }}
                />
              </Link>
              <Link>
                <SocialIcon
                  className="center-img"
                  url="http://instagram.com/milliyarltd/"
                  style={{ height: 30, width: 30 }}
                />
              </Link>
            </li>
            {/* <button
              type="button"
              onClick={handleLogout}
              className="button secondary full-width"
            >
              Logout
            </button> */}
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/lookbook" component={LookBookScreen} />
            <Route path="/collections" component={CollectionsScreen} />
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/monthly" component={MonthlyDropScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SignInScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/help" component={HelpScreen} />
          </div>{" "}
        </main>
        <footer className="footer">
          &copy;2020 All rights reserved to MilliyarLTD
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
