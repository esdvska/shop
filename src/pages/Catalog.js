import React, { useState, useContext } from "react";
import "../styles/Catalog.css";
import "../styles/App.css";
import { AppContext } from "../AppContext";

const Catalog = () => {
  const { products } = useContext(AppContext);

  console.log(products);
  const [inputValue, setInputValue] = useState("");
  let manArr = [];
  let twiced = [];

  for (let i = 0; i < products.length; i++) {
    if (manArr.includes(products[i].manufacture)) {
      twiced.push(products[i].manufacture);
    } else {
      manArr.push(products[i].manufacture);
    }
  }

  console.log(manArr);
  const manufacturers = manArr.map((product) => {
    return (
      <div>
        <input type="radio" name="manufacturere" id={product} value={product} />
        <label for={product}> {product}</label>
      </div>
    );
  });

  const allProducts = products.map((product) => {
    return (
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <p className="price">{product.amount}</p>
        <p>{product.name}</p>
      </div>
    );
  });

  const searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const displaySearchProducts = searchProducts.map((product) => {
    return (
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <p className="price">{product.amount}</p>
        <p>{product.name}</p>
      </div>
    );
  });

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const displayProducts = inputValue ? displaySearchProducts : allProducts;
  return (
    <div className="container">
      <h1 class="header-big">Catalog</h1>
      <div class="catalog">
        <div className="column-left">
          <div className="filter">
            <div className="filter-header">
              {" "}
              <h4>Search</h4>
              <span class="clear">Clear</span>
            </div>{" "}
            <div>
              {" "}
              <input
                type="text"
                placeholder="search..."
                value={inputValue}
                onChange={handleSearch}
              ></input>
            </div>
            <h4>Manufacturer</h4>
            <div>
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id="all"
                  value="all"
                  checked
                />{" "}
                <label for="all">All</label>
              </div>
              {manufacturers}
            </div>
          </div>
        </div>
        <div class="column-right">
          <div className="products">{displayProducts}</div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
