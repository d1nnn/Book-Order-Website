import React, { useEffect, useState } from "react";
import BookDataService from "../../services/BookDataService";
import { Button } from "antd";
import "./Cart.css";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    retrieveCart();
  }, []);

  const retrieveCart = () => {
    BookDataService.getCart()
      .then((res) => {
        console.log(res.data);
        setCarts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // setTotalAmount(
  //   carts.reduce((total, cart) => {
  //     if (carts.product) return total + cart.product.price;
  //     return total;
  //   }, 0)
  // );

  {
    carts.length == 0 && <div>No items are added</div>;
  }
  return (
    <div className="cart">
      <div className="content">
        {carts.map((cart, i) => {
          return (
            <ul key={i}>
              {cart.product && (
                <li>
                  <img src={cart.product.imageUrl} />
                  {cart.product.name} x {cart.product.price}$
                </li>
              )}
            </ul>
          );
        })}
      </div>
      <div className="btn1">
        <Button type="primary" size="large">
          Order
        </Button>
      </div>
      {/* <p>Total amount: {totalAmount}</p> */}
    </div>
  );
};

export default Cart;
