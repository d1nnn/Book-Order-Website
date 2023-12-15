import React, { useState, useEffect } from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";
import BookDataService from "../../services/BookDataService";
import Loading from "../../components/Loading/Loading";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    retrieveProducts();
  }, []);

  const retrieveProducts = () => {
    setLoading(true);
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
        <input type="search" placeholder="Tìm kiếm" id="searchbar" />
      </div>
      <section className="sanpham">
        <div className="sanpham_left" id="spl">
          {products.map((product, i) => {
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
