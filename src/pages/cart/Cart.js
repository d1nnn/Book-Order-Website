import React, { useEffect, useState } from "react";
import BookDataService from "../../services/BookDataService";
import { Button, Input } from "antd";
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
                  Price
                </th>
                <th span="1" style={{ width: "20%" }} scope="col">
                  Cover
                </th>
                <th span="1" style={{ width: "20%" }} scope="col">
                  Remove
                </th>
                {/* <th span="1" style={{ width: "20%" }} scope="col">
                Remove
              </th> */}
              </tr>
            </thead>
            {/* start map */}
            {carts.map((cart, i) => {
              return (
                <>
                  <tbody>
                    {cart.product && (
                      <tr key={cart.product.id}>
                        <td>{cart.product.name}</td>
                        <td>{cart.product.price}$</td>
                        <td>
                          <img className="wlimg" src={cart.product.imageUrl} />
                        </td>
                        <td>
                          <button className="btn btn-danger">Remove</button>
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
    // <div className="cart">
    //   <div className="content">
    //     {carts.map((cart, i) => {
    //       return (
    //         <ul key={i}>
    //           {cart.product && (
    //             <li>
    //               <img src={cart.product.imageUrl} />
    //               {cart.product.name} x {cart.product.price}$
    //               <button className="btn btn-danger"> Remove</button>
    //             </li>
    //           )}
    //         </ul>
    //       );
    //     })}
    //   </div>
    //   <div className="btn1">
    //     <h5>Promotion Code</h5>

    //     <Input className="inp"></Input>

    //     <Button type="primary" size="large">
    //       Proceed To Order
    //     </Button>
    //   </div>
    //   {/* <p>Total amount: {totalAmount}</p> */}
    // </div>
  );
};

export default Cart;
