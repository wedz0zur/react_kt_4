import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>Страница не найдена</h1>
      <button
        onClick={() => navigate("/products")}
        className="back-to-products"
      >
        Перейти к списку товаров
      </button>
    </div>
  );
};

export default NotFoundPage;
