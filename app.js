import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="Logo-container">
          <img
            className="Logo"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          />
        </div>
        <div className="navitems">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>Meghana foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
