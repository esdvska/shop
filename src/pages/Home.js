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
      <div key={product.id} className="featured">
        <img src={product.image} alt={product.name} />
        <p>{product.amount}</p>
        <p>{product.name}</p>
      </div>
    );
  });
  const tabletsFeatured = tablets.map((product) => {
    return (
      <div key={product.id} className="featured">
        <img src={product.image} alt={product.name} />
        <p>{product.amount}</p>
        <p>{product.name}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>WELCOME TO OUR STORE</h1>
      <h2>DESKTOPS</h2>
      {desktopFeatured}
      <h2>TABLETS</h2>
      {tabletsFeatured}
    </div>
  );
};

export default Home;
