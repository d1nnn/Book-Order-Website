import React, { useEffect, useState } from "react";
import BookDataService from "../../services/BookDataService";
import { useParams } from "react-router-dom";

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
    <div>
      <img src={require("../../assets/Held.jpeg")}></img>
      <p>{products.name}</p>
      <p>{products.category}</p>
      <p>{products.Education}</p>
      <div dangerouslySetInnerHTML={{ __html: products.description }} />
      <p>Price: {products.price}</p>
      <div dangerouslySetInnerHTML={{ __html: products.toc }} />
    </div>
  );
};

export default Products;
