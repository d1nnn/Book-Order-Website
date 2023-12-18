import React, { useEffect, useState } from "react";
import BookDataService from "../../services/BookDataService";
import { useParams } from "react-router-dom";
import "./Products.css";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// import 'antd/dist/antd.css';
import {
  ShoppingCartOutlined,
  HeartOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const Products = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts(params.id);
  }, [params.id]);

  const getProducts = (id) => {
    setLoading(true);
    BookDataService.getProductsById(id)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
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
    console.log("da add wishlist");
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
    <>
      {loading ? (
        <Loading />
      ) : (
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
              <>
                {/* Button trigger modal */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#wishListModal"
                  onClick={postWishList}
                >
                  <icon>{<HeartOutlined />}</icon>
                  Add to Wishlist
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="wishListModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Success!
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">Added to Wish List</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        {/* <button type="button" className="btn btn-primary">
                          Save changes
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#cartModal"
                  onClick={postCarts}
                >
                  <icon>
                    <ShoppingCartOutlined />
                  </icon>
                  Add to Cart
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="cartModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Success!
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">Added to Cart</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        {/* <button type="button" className="btn btn-primary">
                          Save changes
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </>

              {/* <Button
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
              </Button> */}

              <Link to={products.url && products.url[0]} target="_blank">
                <Button type="dashed" icon={<DownloadOutlined />} size="large">
                  Download
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
