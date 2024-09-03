import React, { useState } from "react";
import "./FilteredProducts.css";
import CardProduct from "../CardProduct";

function FilteredProducts(props) {
  console.log("All products", props.allProducts);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeDish, setActiveDish] = useState("");

  // Show products on Click
  const showFilteredProductHandler = (category) => {
    setActiveDish(category);
    const filteredProductsAre = props.allProducts.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filteredProductsAre);
  };

  // List all categories
  const allCategories = props.allProductCategories.map((category, index) => (
    // If category is equal to activeDish, it adds the class active to the class list.
    // Otherwise, it adds an empty string.
    <li
      className={`category-item ${category === activeDish ? "active" : ""}`}
      onClick={() => showFilteredProductHandler(category)}
      key={index}
    >
      {category}
    </li>
  ));

  return (
    <div className="filteredProducts">
      <div className="container">
        <div className="text-center">
          <h2>Choose Your Products</h2>
          <p className="fp">
            At BUY-SMART, we pride ourselves on offering a carefully curated
            selection of products designed to meet all your needs. Whether
            you’re looking for the latest in fashion, cutting-edge electronics,
            or unique home decor, our extensive catalog has something for
            everyone.
          </p>
        </div>
        <div className="categorycontainer">
          <ul className="listcat">{allCategories}</ul>
        </div>
        <div className="filtered-dishes-results">
          < ul className="product">
            {activeDish && filteredProducts.length === 0 ? (
              <p>No products available for this category.</p>
            ) : (
              filteredProducts.map((product) => (
                <li key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <h4>{product.title}</h4>
                  
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilteredProducts;
