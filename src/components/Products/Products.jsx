import React, { useEffect, useState } from "react";
import "./Products.css";
import { getAllProducts, getProductCategories } from "../../Api service/api";
import FilteredProducts from "../FilteredProducts/FilteredProducts";
// import CardProduct from "../CardProduct";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    const fetchCategories = async () => {
      const categoryData = await getProductCategories();
      setCategories(categoryData);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const maxSpecialDishes = 6;

  return (
    <div className="products-container">
      <div className="product-grid">
        {products.slice(0, maxSpecialDishes).map((item) => (
          <div className="product-item" key={item.id}>
            {/* <CardProduct item={item} /> */}
          </div>
        ))}
      </div>
      <div className="filtered-products-section">
        <FilteredProducts allProductCategories={categories} allProducts={products} />
      </div>
    </div>
  );
}

export default Products;
