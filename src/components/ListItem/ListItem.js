import React, { useEffect, useState } from "react";
import BookDataService from "../../services/BookDataService";
import { Card, Row, Col, Image, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const ListItem = ({ cart, setRefetch }) => {
  const delCarts = (id) => {
    BookDataService.delCart(id)
      .then(() => {
        setRefetch(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Row className="item-wrapper" style={{ marginBlock: "40px" }}>
      <Col span={3} offset={1}>
        <a href={`/products/${cart.product._id}`}>
          <Image width="100%" src={cart.product.imageUrl} preview={false} />
        </a>
      </Col>
      <Col span={15} offset={1}>
        <Row
          style={{
            fontSize: "20px",
            color: "#3d4c99",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          <a href={`/products/${cart.product._id}`}>{cart.product.name}</a>
        </Row>
        <Row
          style={{
            fontSize: "18px",
            color: "#6b6f7a",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          {cart.product.category}
        </Row>
        <Row
          style={{
            fontSize: "20px",
            color: "#353b57",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          ${cart.product.price}
        </Row>
      </Col>
      <Col span={4}>
        <Button
          type="text"
          size="large"
          style={{
            backgroundColor: "#b23831",
            color: "white",
            fontWeight: "600",
          }}
          icon={<DeleteOutlined />}
          onClick={() => delCarts(cart._id)}
        >
          {"Delete"}
        </Button>
      </Col>
    </Row>
  );
};

export default ListItem;
