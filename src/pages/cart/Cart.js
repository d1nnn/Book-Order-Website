import React, { useEffect, useRef, useState } from "react";
import BookDataService from "../../services/BookDataService";
import { Button, Input } from "antd";
import "./Cart.css";
import ListItem from "../../components/ListItem/ListItem";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  // const [totalAmount, setTotalAmount] = useState(0);
  let [tA, setTa] = useState(0);
  let totalAmount = useRef(0);

  useEffect(() => {
    retrieveCart();
    // setTa((tA += Number(totalAmount.current.innerText)));
  }, [carts]);
  // let total = 0;
  const retrieveCart = () => {
    BookDataService.getCart()
      .then((res) => {
        // console.log(res.data);
        setCarts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const calSum = () => {
    // setTa((tA += Number(totalAmount.current.innerText)));
    console.log(totalAmount);
  };

  const listItem1 = carts.map((cart, i) => {
    return (
      <>
        {cart.product && <ListItem id2={cart.product._id} cartId={cart._id} />}
      </>
    );
  });
  // setTa(tA + Number(totalAmount.current.innerText));

  // for (var i = 0; i < carts.length; i++) {
  //   total += carts[i].product.price;
  // }
  // console.log(total);

  // var prices = carts.map((p) => {
  //   p.product.price;
  // });
  // console.log(prices)

  // let x = carts.reduce((total, cart) => {
  //   return total + cart.product.price;
  // }, 0);
  // console.log(x);

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
                  ID
                </th>
                <th span="1" style={{ width: "10%" }} scope="col">
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
              </tr>
            </thead>
            {/* start map */}
            {listItem1}
            {/* {carts.map((cart, i) => {
              return <>{cart.product && <ListItem id2={cart.product._id} />}</>;
            })} */}
            {/* end map */}
          </table>
        </div>
      </div>
      {/* <div className="row">
        <button className="btn btn-primary" onClick={calSum}>
          Cal Sum
        </button>
        <div className="col-12">
          <h2>Total: {tA}</h2>
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
