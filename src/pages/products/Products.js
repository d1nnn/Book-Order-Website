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

  const btnClick = (e) => {
    console.log("btn clicked");
  };

  const postCarts = () => {
    var data = {
      product: params.id,
    };
    BookDataService.postCarts(data);
    console.log(data);
  };

  const downLoad = (e) => {};
  const url111 =
    "https://storage.googleapis.com/bookstore-ff5f4.appspot.com/Children/001-HIDE-AND-SEEK-Free-Childrens-Book-By-Monkey-Pen.pdf?GoogleAccessId=firebase-adminsdk-54f1p%40bookstore-ff5f4.iam.gserviceaccount.com&Expires=1702722857&Signature=G71nYwC363tmXdwzDFmenIv56nNzXTMQD4SaDRDcy5fPHgwtHGEVkIV5IoRM9JMBz3PgDdcIUiSsDiCzeOnodFaIAlUBTZxA8qV7mk2j1yMCes882VM9rejywfWwCxv1qauEDRdot6VGnWUDsEJ0leTNIY%2F8JCIaccot6nj1mlxsPyt80iIXOeLGlQWnPZjU%2BcOKIbSUZa63v0Z907RW98ejQZcq6uCJfubVC3G9ZR%2B1Ry7mwGXYvQ8T6S4tnU0KDsQMmvsOttUZ38XTB4wJuQcRRgmLLpwZN%2BpXz4EDf0ZsDvBQdZFt8sm5qofMNDLax2DUQKQBZQJtVsQEtrClgw%3D%3D";

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
            onClick={btnClick}
            icon={<HeartOutlined />}
            size="large"
          >
            Add to WishList
          </Button>

          <Link to={url111}>
            <Button
              type="dashed"
              icon={<DownloadOutlined />}
              size="large"
              download={url111}
            >
              Download
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
