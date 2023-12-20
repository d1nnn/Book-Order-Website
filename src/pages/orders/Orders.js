import React, { useEffect, useState } from "react";
import "./Orders.css";
import BookDataService from "../../services/BookDataService";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    retrieveOrders();
  });

  const retrieveOrders = () => {
    BookDataService.getOrders()
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
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
            <h1>Orders</h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <table className="table table-hover">
            <thead style={{ width: "100%" }}>
              <tr>
                <th span="1" style={{ width: "20%" }} scope="col">
                  Order No.
                </th>
                <th span="1" style={{ width: "10%" }} scope="col">
                  Amount
                </th>
              </tr>
            </thead>
            {/* start map */}
            {orders.map((order, i) => {
              return (
                <>
                  <tbody>
                    <tr key={order._id}>
                      <td>{order.payment}</td>
                      <td>{order.total}$</td>
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

export default Orders;
