import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";
import BookDataService from "../../services/BookDataService";
import Loading from "../../components/Loading/Loading";

const getFilteredItems = (query, products) => {
  if (!query) return products;

  return products.filter((book) => book.name.toLowerCase().includes(query));
};

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const filteredItems = getFilteredItems(query, products);

  useEffect(() => {
    retrieveProducts();
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const retrieveProducts = () => {
    // ;
    BookDataService.getAllProducts()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {loading && <Loading />}
      <h1 className="chonmon">Pick your books!</h1>
      <div className="searchbar">
        <input
          type="search"
          placeholder="Tìm kiếm"
          id="searchbar"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <section className="sanpham">
        <div className="sanpham_left" id="spl">
          {filteredItems.map((product, i) => {
            return (
              <div key={i} className="sanpham_item">
                <NavLink to={`${product._id}`}>
                  <img src={`${product.imageUrl}`} alt="" />
                  <p>{product.name}</p>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
