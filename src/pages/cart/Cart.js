import React, { useEffect, useRef, useState } from "react";
import BookDataService from "../../services/BookDataService";
import { Button, Input, Row, Col, Card, Modal, Form } from "antd";
import "./Cart.css";
import ListItem from "../../components/ListItem/ListItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    retrieveCart();
  }, [refetch]);

  const handleCancel = () => {
    setRefetch(true);
    setOpen(false);
  };

  const handleOk = () => {
    setRefetch(true);
    setOpen(false);
  };

  const retrieveCart = () => {
    BookDataService.getCart()
      .then((res) => {
        setCarts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const submit = async (data) => {
    BookDataService.postOrders({
      ...data,
      carts: carts && carts.map((cart) => cart._id),
      total: totalS,
    })
      .then((res) => {
        setModalText("Order created successfully");
        setOpen(true);
      })
      .catch((e) => {
        setModalText("Order created failed");
        setOpen(true);
      });
  };

  const listItem = carts.map((cart, i) => {
    return (
      <>{cart.product && <ListItem cart={cart} setRefetch={setRefetch} />}</>
    );
  });

  const totalS = carts.reduce((tong, item) => {
    return tong + item.product.price;
  }, 0);

  {
    carts.length == 0 && <div>No items are added</div>;
  }
  return (
    <div className="cart-wrapper">
      <div
        style={{
          background: "white",
          marginBlock: "2%",
          color: "#474d66",
        }}
      >
        <h1 className="cart-title">Basket</h1>
      </div>
      <div style={{ background: "#f0f0f2", padding: "2% 0px" }}>
        <Row>
          <Col className="cart-list-parent" span={16}>
            <div
              style={{
                background: "white",
                marginLeft: "100px",
                marginRight: "2%",
              }}
            >
              <Card
                // className="cart-list-parent"
                size="default"
                title="Your basket"
                headStyle={{
                  fontSize: "2rem",
                  color: "#6e717a",
                  fontWeight: "550",
                  padding: "16px 24px 17px 100px",
                }}
                style={{ width: "100%" }}
              >
                <Card
                  className="cart-list-child"
                  title={`${carts.length} item(s)`}
                  headStyle={{
                    color: "#353b57",
                    backgroundColor: "#fafafc",
                    borderBottom: "2px solid #c5c9db",
                  }}
                >
                  {listItem}
                </Card>
              </Card>
            </div>
          </Col>
          <Col className="cart-list-parent2" span={8}>
            <div
              style={{
                background: "white",
                marginRight: "100px",
                marginLeft: "3%",
              }}
            >
              <div className="cart-info">
                <Row>
                  <Col span={12}>
                    <p className="cart-row">Quantity </p>
                  </Col>
                  <Col span={12}>
                    <p className="cart-row">{`${
                      carts && carts.length
                    } item(s)`}</p>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <p className="cart-row">Order Total</p>
                  </Col>
                  <Col span={12}>
                    <p className="cart-row">{totalS}$</p>
                  </Col>
                </Row>
              </div>
              <div className="cart-form-parent">
                <Form layout="vertical" onFinish={submit}>
                  <Form.Item
                    className="cart-form"
                    label="Email"
                    name="email"
                    style={{
                      fontSize: "100px",
                    }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your email" />
                  </Form.Item>
                  <Form.Item
                    className="cart-form"
                    label="Payment"
                    name="payment"
                    rules={[
                      {
                        required: true,
                        message: "Please input your card number!",
                      },
                      {
                        type: "regexp",
                        pattern: new RegExp(/\d+/g),
                        message: "Wrong format card number!",
                      },
                      {
                        min: 16,
                        message: "Card number must have a minimum length of 16",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your card number" />
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 0 }}>
                    <Button
                      style={{
                        width: "90%",
                        marginTop: "18px",
                        marginBottom: "50px",
                        height: "60px",
                        borderRadius: "0",
                        backgroundColor: "#252e52",
                        fontWeight: "700",
                        fontSize: "20px",
                      }}
                      type="primary"
                      htmlType="submit"
                      size="large"
                    >
                      PROCEED TO CHECKOUT
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Modal
        title="Notification"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        {modalText}
      </Modal>
    </div>
  );
};

export default Cart;
