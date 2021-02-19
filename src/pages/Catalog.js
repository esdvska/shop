import React, { useState, useContext } from "react";

import { AppContext } from "../AppContext";

import "../styles/App.css";
import "../styles/Catalog.css";

const Catalog = () => {
  const { products } = useContext(AppContext);

  // STATE
  const [inputValue, setInputValue] = useState("");
  const [radioValue, setRadioValue] = useState("all");
  const [radioSearch, setRadioSearch] = useState("");
  const [checkedRadio, setCheckedRadio] = useState();

  // FUNKCJE OBSŁUGUJĄCE ZMIANY
  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };
  const handleRadio = (e) => {
    setRadioSearch(e.target.value);
  };

  const showManufacturer = (e) => {
    setCheckedRadio();
    setInputValue("");
    setRadioValue(e.target.value);
  };
  const handleClear = () => {
    setInputValue("");
    setRadioSearch("");
    setRadioValue("all");
    setCheckedRadio(false);
  };
  // LEWA KOLUMNA MANUFACTURERS

  let manArr = [];
  let twiced = [];

  for (let i = 0; i < products.length; i++) {
    if (manArr.includes(products[i].manufacture)) {
      twiced.push(products[i].manufacture);
    } else {
      manArr.push(products[i].manufacture);
    }
  }

  const manufacturers = manArr.map((product) => {
    return (
      <div key={product}>
        <input
          type="radio"
          name="manufacturere"
          id={product}
          value={product}
          onChange={showManufacturer}
          checked={checkedRadio}
        />
        <label htmlFor={product}> {product}</label>
      </div>
    );
  });
  // WSZYSTKIE PRODUKTY
  const allProducts = products.map((product) => {
    return (
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <p className="price">{product.amount}</p>
        <p>{product.name}</p>
      </div>
    );
  });

  // PRODUKTY PO ZAZNACZENIU FIRMY PO LEWEJ
  const searchProRadio = products.filter((product) => {
    return product.manufacture === radioValue;
  });

  const productsRadioSearch = searchProRadio.filter((product) =>
    product.name.toLowerCase().includes(radioSearch.toLowerCase())
  );
  const displayProductsRadioSearch = productsRadioSearch.map((product) => {
    return (
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <p className="price">{product.amount}</p>
        <p>{product.name}</p>
      </div>
    );
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
  const displayTogether = radioSearch
    ? displayProductsRadioSearch
    : searchRadio;
  const radioProducts = radioValue === "all" ? allProducts : displayTogether;

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

  const displayProducts = inputValue ? displaySearchProducts : radioProducts;
  return (
    <div className="container">
      <h1 className="header-big">Catalog</h1>
      <div className="catalog">
        <div className="column-left">
          <div className="filter">
            <div className="filter-header">
              <h4>Search</h4>
              <span className="clear" onClick={handleClear}>
                Clear
              </span>
            </div>
            <div>
              <input
                type="text"
                placeholder="search..."
                value={radioValue === "all" ? inputValue : radioSearch}
                onChange={radioValue === "all" ? handleSearch : handleRadio}
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
                  checked={checkedRadio}
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
