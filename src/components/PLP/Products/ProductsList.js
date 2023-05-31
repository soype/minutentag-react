import React from "react";
import products from "../../../db/products";
import stockPrice from "../../../db/stock-price";

function ProductsList() {
  const renderItem = () => {
    products.map((item, index) => {
      return (
        <div className="item">
          <a className="item-title" href="/127-ModeloEspecial">
            {item.brand}
          </a>
          <div className="img-container">
            <img src={item.image} />
          </div>
          <div className="item-menu">
            <div className="item-price">$ 28.65</div>
            <div className="add-button">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="products">
      <div className="products-subtitle">
        <h2>Popular</h2>
        <p className="see-all">See All</p>
      </div>
      <div className="products-container" id="products"></div>
    </div>
  );
}

export default ProductsList;
