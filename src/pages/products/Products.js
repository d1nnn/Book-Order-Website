import React from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";
// import { NavLink } from "reactstrap";

const Products = () => {
  return (
    <div>
      <h1 className="chonmon">Pick your books!</h1>
      <div className="searchbar">
        <input type="search" placeholder="Tìm kiếm" id="searchbar" />
      </div>
      <section className="sanpham">
        <div className="sanpham_left" id="spl">
          <div className="sanpham_item">
            <NavLink to={`detail/1`}>
              <img src={require("../../assets/Held.jpeg")} alt="" />
              <p>Held</p>
            </NavLink>
          </div>
          <div className="sanpham_item">
            <NavLink to={`detail/2`}>
              <img
                src={require("../../assets/theRestIsHistory2.jpeg")}
                alt=""
              />
              <p>The Rest Is History</p>
            </NavLink>
          </div>
          <div className="sanpham_item">
            <NavLink to={`detail/3`}>
              <img
                src={require("../../assets/theTempleOfFortuna.jpeg")}
                alt=""
              />
              <p>The Temple Of Fortuna</p>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
