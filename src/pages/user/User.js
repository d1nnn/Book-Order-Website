import React, { useEffect, useState } from "react";
import { Row, Col, Menu, Card, Input, Form, Button } from "antd";
import "./User.css";
import BookDataService from "../../services/BookDataService";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser();
    console.log(user);
  }, []);
  const getUser = () => {
    BookDataService.getUser()
      .then((res) => {
        if (res.status == 200) setUser(res.data);
        else navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const onClick = (e) => {
    console.log("click ", e);
    if (e.key == "sign_out") {
      sessionStorage.clear();
    }
  };
  return (
    <div className="cart-wrapper">
      <div
        style={{
          background: "white",
          marginBlock: "2%",
          color: "#474d66",
        }}
      >
        <h1 className="cart-title">My account</h1>
      </div>
      <div style={{ background: "#f0f0f2", padding: "2% 0px" }}>
        <Row>
          <Col span={5} offset={2}>
            <div
              className="user-hello"
              style={{
                backgroundColor: "white",
              }}
            >
              <h2>{`Hello ${user.displayName}`}</h2>
              <Menu
                className="user-child"
                onClick={onClick}
                style={{ width: "100%" }}
                defaultSelectedKeys={["account_overview"]}
                defaultOpenKeys={["account_overview"]}
                mode="inline"
                items={[
                  {
                    key: "account_overview",
                    label: "Account Overview",
                  },
                  {
                    key: "sign_out",
                    label: "Sign Out",
                  },
                ]}
              />
            </div>
          </Col>
          <Col span={10}>
            <div
              style={{
                backgroundColor: "white",
              }}
            >
              <Row>
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: "100%" }}
                >
                  <Form layout="vertical">
                    <Form.Item label="Display name" wrapperCol={6}>
                      <Input placeholder={user.displayName} />
                    </Form.Item>
                    <Form.Item label="Email address" wrapperCol={6}>
                      <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 0 }}>
                      <Button
                        className="submit"
                        type="primary"
                        htmlType="submit"
                        size="large"
                      >
                        SAVE CHANGES
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Row>
              <Card
                title="Change password"
                bordered={false}
                style={{ width: "100%" }}
              >
                <Form layout="vertical">
                  <Form.Item label="Current password" wrapperCol={6}>
                    <Input.Password />
                  </Form.Item>
                  <Form.Item label="New password" wrapperCol={6}>
                    <Input.Password />
                  </Form.Item>
                  <Form.Item label="Confirm password" wrapperCol={6}>
                    <Input.Password />
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 0 }}>
                    <Button
                      className="submit"
                      type="primary"
                      htmlType="submit"
                      size="large"
                    >
                      SAVE CHANGES
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
