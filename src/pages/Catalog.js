import React, { useState, useContext } from "react";
import "../styles/Catalog.css";
import "../styles/App.css";
import { AppContext } from "../AppContext";

const Catalog = () => {
  const { products } = useContext(AppContext);

  const [inputValue, setInputValue] = useState("");

  const [radioValue, setRadioValue] = useState("all");

  let manArr = [];
  let twiced = [];

  for (let i = 0; i < products.length; i++) {
    if (manArr.includes(products[i].manufacture)) {
      twiced.push(products[i].manufacture);
    } else {
      manArr.push(products[i].manufacture);
    }
  }

  const showManufacturer = (e) => {
    setInputValue("");
    setRadioValue(e.target.value);
  };
  const manufacturers = manArr.map((product) => {
    return (
      <div key={product}>
        <input
          type="radio"
          name="manufacturere"
          id={product}
          value={product}
          onChange={showManufacturer}
        />
        <label htmlFor={product}> {product}</label>
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

  const searchProRadio = products.filter((product) => {
    return product.manufacture === radioValue;
  });
  const searchRadio = searchProRadio.map((product) => {
    return (
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <p className="price">{product.amount}</p>
        <p>{product.name}</p>
      </div>
    );
  });
  const radioProducts = radioValue === "all" ? allProducts : searchRadio;

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
    manufacturers.forEach((manufacturer) => manufacturer.checked === false);
  };

  const displayProducts = inputValue ? displaySearchProducts : radioProducts;
  return (
    <div className="container">
      <h1 className="header-big">Catalog</h1>
      <div className="catalog">
        <div className="column-left">
          <div className="filter">
            <div className="filter-header">
              {" "}
              <h4>Search</h4>
              <span className="clear">Clear</span>
            </div>{" "}
            <div>
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
                  onChange={showManufacturer}
                />
                <label htmlFor="all">All</label>
              </div>
              {manufacturers}
            </div>
          </div>
        </div>
        <div className="column-right">
          <div className="products">{displayProducts}</div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
