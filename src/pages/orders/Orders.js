import React, { useEffect, useState } from "react";
import "./Orders.css";
import BookDataService from "../../services/BookDataService";
import { NavLink } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [productBuyed, setProductBuyed] = useState([]);
  // const productBuyed = retrieveProductBuyed();

  useEffect(() => {
    retrieveOrders();
    retrieveProductBuyed();
  }, []);

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

  const retrieveProductBuyed = () => {
    BookDataService.getProductBuyed()
      .then((res) => {
        console.log(res.data);
        setProductBuyed(res.data);
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
            <h1>Ordered</h1>
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
                <th span="1" style={{ width: "20%" }} scope="col">
                  Image
                </th>
                <th span="1" style={{ width: "20%" }} scope="col">
                  Price
                </th>
              </tr>
            </thead>
            {/* start map */}
            <tbody>
              {productBuyed.map((p, i) => {
                return (
                  <>
                    <tr key={p._id}>
                      <td>{p.name}</td>
                      <td>
                        <NavLink to={`../products/${p._id}`}>
                          <img src={p.imageUrl} />
                        </NavLink>
                      </td>
                      <td>{p.price}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
            {/* end map */}
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
