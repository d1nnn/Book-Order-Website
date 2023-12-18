import React, { useEffect, useRef, useState } from "react";
import BookDataService from "../../services/BookDataService";
import { Button, Input } from "antd";
import "./Cart.css";
import ListItem from "../../components/ListItem/ListItem";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    retrieveCart();
  }, [carts]);
  // let total = 0;
  const retrieveCart = () => {
    BookDataService.getCart()
      .then((res) => {
        setCarts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const listItem1 = carts.map((cart, i) => {
    return (
      <>
        {cart.product && <ListItem id2={cart.product._id} cartId={cart._id} />}
      </>
    );
  });

  const totalS = carts.reduce((tong, item) => {
    return tong + item.product.price;
  }, 0);

  {
    carts.length == 0 && <div>No items are added</div>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Cart</h1>
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
                  Category
                </th>
                <th span="1" style={{ width: "30%" }} scope="col">
                  Cover
                </th>
                <th span="1" style={{ width: "10%" }} scope="col">
                  Price
                </th>
                <th span="1" style={{ width: "10%" }} scope="col">
                  Remove
                </th>
              </tr>
            </thead>
            {/* start map */}
            {listItem1}
            {/* end map */}
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Total: {totalS}</h2>
        </div>
        <div className="btn1">
          <h5>Promotion Code</h5>
          <Input className="inp"></Input>
          <Button type="primary" size="large">
            Proceed To Order
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
