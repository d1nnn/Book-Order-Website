import React, { useState, useEffect } from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";
import BookDataService from "../../services/BookDataService";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    retrieveProducts();
  }, []);

  const retrieveProducts = () => {
    BookDataService.getAllProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h1 className="chonmon">Pick your books!</h1>
      <div className="searchbar">
        <input type="search" placeholder="Tìm kiếm" id="searchbar" />
      </div>
      <section className="sanpham">
        <div className="sanpham_left" id="spl">
          {products.map((product, i) => {
            return (
              <div className="sanpham_item">
                <NavLink to={`detail/${product._id}`}>
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

export default Products;
