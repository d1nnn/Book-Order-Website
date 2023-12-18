import React, { useEffect, useState } from "react";
import BookDataService from "../../services/BookDataService";
import "./WishList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ShoppingCartOutlined } from "@ant-design/icons";

const WishList = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    retrieveWishList();
  }, []);

  const retrieveWishList = () => {
    BookDataService.getWishList()
      .then((res) => {
        console.log(res.data);
        setWishList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const postCarts = (id) => {
    var data = {
      product: id,
    };
    BookDataService.postCarts(data);
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Wish List</h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <table className="table table-hover">
            <thead style={{ width: "100%" }}>
              <tr>
                <th span="1" style={{ width: "20%" }} scope="col">
                  Name
                </th>
                <th span="1" style={{ width: "10%" }} scope="col">
                  Price
                </th>
                <th span="1" style={{ width: "20%" }} scope="col">
                  Cover
                </th>
                <th span="1" style={{ width: "20%" }} scope="col">
                  Add to Cart
                </th>
                <th span="1" style={{ width: "20%" }} scope="col">
                  Remove
                </th>
              </tr>
            </thead>
            {/* start map */}
            {wishList.map((wl, i) => {
              return (
                <>
                  <tbody>
                    <tr key={wl.product._id}>
                      <td>{wl.product.name}</td>
                      <td>{wl.product.price}$</td>
                      <td>
                        <img className="wlimg" src={wl.product.imageUrl} />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#wishListModal"
                          onClick={() => {
                            postCarts(wl.product._id);
                          }}
                        >
                          <icon>
                            <ShoppingCartOutlined />
                          </icon>
                          Add to Cart
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
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-danger">Remove</button>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
            {/* end map */}
          </table>
        </div>
      </div>
    </>
  );
};

export default WishList;
