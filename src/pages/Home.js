import React, { useContext } from "react";

import { AppContext } from "../AppContext";

const Home = () => {
  const { products } = useContext(AppContext);

  const desktops = products.filter(
    (product) => product.featured && product.category === "desktop"
  );

  const tablets = products.filter(
    (product) => product.featured && product.category === "tablet"
  );
  const desktopFeatured = desktops.map((product) => {
    return (
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <p className="price">{product.amount}</p>
        <p>{product.name}</p>
      </div>
    );
  });
  const tabletsFeatured = tablets.map((product) => {
    return (
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <p className="price">{product.amount}</p>
        <p>{product.name}</p>
      </div>
    );
  });

  return (
    <div className="container">
      <h1 className="header_big">WELCOME TO OUR STORE</h1>
      <h2 className="header_small">DESKTOPS</h2>
      <div className="products"> {desktopFeatured}</div>
      <h2 className="header_small">TABLETS</h2>
      <div className="products"> {tabletsFeatured}</div>
    </div>
  );
};

export default Home;
