import React, { useEffect, useState } from "react";
import BookDataService from "../../services/BookDataService";
import { useParams } from "react-router-dom";
import "./Products.css";
import { Button } from "antd";
// import 'antd/dist/antd.css';
import {
  ShoppingCartOutlined,
  HeartOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

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

  const postWishList = () => {
    var data = {
      product: params.id,
    };
    BookDataService.postWishList(data);
    console.log(data);
  };

  const postCarts = () => {
    var data = {
      product: params.id,
    };
    BookDataService.postCarts(data);
    console.log(data);
  };

  // const downLoad = () => {
  //   console.log("da down");
  //   return products.url[0];
  // };

  // const handleDownload = () => {
  //   try {
  //     const response = fetch(url);
  //     const blob = response.blob();
  //     const link = document.createElement("a");
  //     link.href = URL.createObjectURL(blob);
  //     link.download = "your_file_name.pdf"; // Set the desired file name
  //     link.click();
  //   } catch (error) {
  //     console.error("Error downloading file:", error);
  //   }
  // };

  return (
    <div className="products">
      <div className="products_img">
        <img src={products.imageUrl} />
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
        <div class="btnantd">
          <Button
            type="primary"
            onClick={postCarts}
            icon={<ShoppingCartOutlined />}
            size="large"
          >
            Add to Cart
          </Button>
          <Button
            type="default"
            onClick={postWishList}
            icon={<HeartOutlined />}
            size="large"
          >
            Add to WishList
          </Button>

          <Link to={products.url && products.url[0]} target="_blank">
            <Button type="dashed" icon={<DownloadOutlined />} size="large">
              Download
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
