import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const roundedRating = Math.round(product.rating.rate);

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="product-image" />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p className="product-rating">
        {"★".repeat(roundedRating)}
        {"☆".repeat(5 - roundedRating)}
      </p>
      <button onClick={() => navigate(-1)} className="back-button">
        Назад
      </button>
    </div>
  );
};

export default ProductDetails;
