import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <h3 className="test">Hỗ trợ</h3>
        <li>Đặt hàng ngay</li>
        <li>Thông tin giao hàng</li>
      </ul>
      <ul>
        <h3>Hướng dẫn</h3>
        <li>Chính sách đổi trả</li>
        <li>Chính sách bảo mật</li>
        <li>Điều khoản dịch vụ</li>
        <li>Tìm kiếm</li>
      </ul>
    </div>
  );
};

export default Footer;
