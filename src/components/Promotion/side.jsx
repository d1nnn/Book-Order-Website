import React from "react";
import "./side.css";
import { NavLink } from "react-router-dom";

const Side = () => {
  return (
    <div className="thuy_side">
      <div className="aside-div-component">
        <div className="blog-div">
          <h3>New blog</h3>
          <hr />
          <NavLink to="/promotions/2" className={"navlink"}>
            <div className="row">
              <div className="col-4">
                <img
                  src={require("../../assets/promotion-birthday-banner.jpg")}
                  alt="promtion"
                />
              </div>
              <div className="col-8">
                <h6>BaBook sale birthday</h6>
                <p>
                  <b>BaBook</b> khuyến mãi dịp Sinh nhật, nhiều ưu đãi hấp dẫn.
                </p>
              </div>
            </div>
          </NavLink>
          <br />
          <NavLink to="/promotions/3" className={"navlink"}>
            <div className="row">
              <div className="col-4">
                <img
                  src={require("../../assets/promotion-banner1.jpg")}
                  alt="promtion"
                />
              </div>
              <div className="col-8">
                <h6>BaBook Share Hobby - Share Money</h6>
                <p>
                  Hãy cùng chia sẻ quyển sách yêu thích của bạn với{" "}
                  <b>BaBook</b>. Cơ hội mua những đấu sách hot hiện nay với giá{" "}
                  <b>1đ</b>.
                </p>
              </div>
            </div>
          </NavLink>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Side;
