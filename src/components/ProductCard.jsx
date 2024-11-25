import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const roundedRating = Math.round(product.rating.rate);

  return (
    <div className="product-card">
      <h3 className="product-title">{product.title}</h3>
      <p className="product-rating">
        {"★".repeat(roundedRating)}
        {"☆".repeat(5 - roundedRating)}
      </p>
    </div>
  );
};

export default ProductCard;
