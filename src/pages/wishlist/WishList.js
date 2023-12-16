import React, { useEffect, useState } from "react";
import BookDataService from "../../services/BookDataService";
import "./WishList.css";

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

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
                {/* <th span="1" style={{ width: "20%" }} scope="col">
                  Remove
                </th> */}
              </tr>
            </thead>
            {/* start map */}
            {wishList.map((wl, i) => {
              return (
                <>
                  <tbody>
                    {wl.product && (
                      <tr key={wl.product.id}>
                        <td>{wl.product.name}</td>
                        <td>{wl.product.price}$</td>
                        <td>
                          <img className="wlimg" src={wl.product.imageUrl} />
                        </td>
                        <td>
                          <button className="btn btn-primary">
                            Add to Cart
                          </button>
                        </td>
                        {/* <td>
                          <button className="btn btn-danger">Remove</button>
                        </td> */}
                      </tr>
                    )}
                  </tbody>
                </>
              );
            })}
            {/* end map */}
          </table>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-12">
          <h2>Total: {totalAmount}</h2>
        </div>
      </div> */}
    </>
    // <div>
  );
};

export default WishList;
