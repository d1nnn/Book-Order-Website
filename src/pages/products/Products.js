import React, { useEffect, useState } from "react";
import BookDataService from "../../services/BookDataService";
import { useParams } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(params.id);
  }, [params.id]);

  const getProducts = (id) => {
    BookDataService.getProductsById(id)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="products">
      <div className="products_img">
        <img src={require("../../assets/Held.jpeg")}></img>
      </div>
      <div className="products_content">
        <h1>{products.name}</h1>
        <h2>{products.category}</h2>
        {/* <h3>{products.Education}</h3> */}
        <div
          className="des"
          dangerouslySetInnerHTML={{ __html: products.description }}
        />
        <p>
          <b>Price:</b> {products.price}
        </p>
        {/* <div dangerouslySetInnerHTML={{ __html: products.toc }} /> */}
      </div>
    </div>
  );
};

export default Products;
