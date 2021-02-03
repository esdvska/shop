import React from "react";

const Product = () => {
  return (
    <div key={product.id} className="featured">
      <img src={product.image} alt={product.name} />
      <p>{product.amount}</p>
      <p>{product.name}</p>
    </div>
  );
};
export default Product;
