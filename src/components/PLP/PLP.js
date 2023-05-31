import React from "react";
import Header from "./UI/Header";
import Categories from "./UI/Categories";
import ProductsList from "./Products/ProductsList";

function PLP() {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="greeting">
        <p className="greeting-name">Hi Mr. Michael,</p>
        <h1 className="greeting-title">Welcome Back!</h1>
      </div>
      <div className="search">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="7.06471"
            cy="7.06471"
            r="6.31471"
            stroke="#0F0D23"
            strokeWidth="1.5"
          />
          <path
            d="M12.0924 11.8441L15 14.6466"
            stroke="#0F0D23"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Search burger, pizza, drink or etc..."
        />
      </div>
      <Categories></Categories>
      <ProductsList></ProductsList>
    </React.Fragment>
  );
}

export default PLP;
