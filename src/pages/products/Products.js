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
      <p>{products.name}</p>
      <p>{products.category}</p>
      <p>{products.Education}</p>
      <p>{products.description}</p>
      {/* <p>{products.file.path}</p> */}
      <p>{products.price}</p>
      <p>{products.toc}</p>
    </div>
  );
};

export default Products;
