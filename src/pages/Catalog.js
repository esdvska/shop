import React, { useState, useContext } from "react";

import { AppContext } from "../AppContext";

const Catalog = () => {
  const { products } = useContext(AppContext);

  console.log(products);
  const [inputValue, setInputValue] = useState("");

  const manufacturers = products.map((product) => <p>{product.manufacture}</p>);

  const allProducts = products.map((product) => {
    return (
      <div key={product.id} className="featured">
        <img src={product.image} alt={product.name} />
        <p>{product.amount}</p>
        <p>{product.name}</p>
      </div>
    );
  });

  const searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const displaySearchProducts = searchProducts.map((product) => {
    return (
      <div key={product.id} className="featured">
        <img src={product.image} alt={product.name} />
        <p>{product.amount}</p>
        <p>{product.name}</p>
      </div>
    );
  });

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const displayProducts = inputValue ? displaySearchProducts : allProducts;
  return (
    <div className="catalog">
      <div>
        <aside>
          <label>Search</label>

          <input
            placeholder="search..."
            value={inputValue}
            onChange={handleSearch}
          ></input>
          <button>Clear</button>
          <h4>Manufacturer</h4>
          {manufacturers}
        </aside>
      </div>
      <div>{displayProducts}</div>
    </div>
  );
};

export default Catalog;
