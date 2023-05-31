import React from "react";
import products from "../../../db/products";
import stockPrice from "../../../db/stock-price";

function ProductsList() {

  let productsImg = []

  const generateImg = (index) => {
    products.forEach(item => {
      productsImg.push(item.image)
    })
    return productsImg[index];
  }

  return (
    <div className="products">
      <div className="products-subtitle">
        <h2>Popular</h2>
        <p className="see-all">See All</p>
      </div>
      <div className="products-container" id="products">
        {products.map((item, index) => {
      return (
        <div className="item" key={index}>
          <a className="item-title" href={`${item.id}-${item.brand}`}>
            {item.brand}
          </a>
          <div className="img-container">
            <img src={generateImg(index)} />
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
    })}
      </div>
    </div>
  );
}

export default ProductsList;
