import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Menu, Card, Input, Form, Button, Space, Modal } from "antd";
import "./User.css";
import BookDataService from "../../services/BookDataService";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
export default () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMess] = useState("");
  const [currentUser, setCurrentUser] = useContext(Context);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleOk = () => {
    console.log("Clicked ok button");
    setOpen(false);
    navigate(0);
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    BookDataService.getUser()
      .then((res) => {
        if (res.status == 200) {
          setUser(res.data);
        } else navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const signOut = (e) => {
    if (e.key == "sign_out") {
      sessionStorage.clear();
      setCurrentUser(undefined);
      navigate("/");
      // navigate(0);
    }
  };

  const update = async (data) => {
    console.log(data);
    BookDataService.updateUser(data)
      .then((res) => {
        setMess("Update successfully!");
        setOpen(true);
      })
      .catch((e) => {
        setMess("Wrong current password!");
        setOpen(true);
      });
  };

  return (
    user && (
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
            <Col span={5} offset={1}>
              <div
                className="user-hello"
                style={{
                  backgroundColor: "white",
                }}
              >
                <h2>{`Hello ${user.displayName}`}</h2>
                <hr />
                <Menu
                  className="user-child"
                  onClick={signOut}
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
            <Col span={12}>
              <div
                className="user-hello"
                style={{
                  marginLeft: "10%",
                }}
              >
                <Space direction="vertical" style={{ width: "100%" }} size={40}>
                  <Row className="change-pass">
                    <Card
                      title="My details"
                      bordered={false}
                      style={{ width: "100%" }}
                    >
                      <Form
                        form={form}
                        className="user-form"
                        layout="vertical"
                        onFinish={update}
                        initialValues={{
                          username: user.username,
                          email: user.email,
                          displayName: user.displayName,
                        }}
                      >
                        <Form.Item
                          className="user-form"
                          name="username"
                          label="Username"
                          wrapperCol={6}
                        >
                          <Input disabled />
                        </Form.Item>
                        <Form.Item
                          className="user-form"
                          name="displayName"
                          label="Display name"
                          wrapperCol={6}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          className="user-form"
                          name="email"
                          label="Email address"
                          wrapperCol={6}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 0 }}>
                          <Button
                            style={{
                              width: "100%",
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
                            SAVE CHANGES
                          </Button>
                        </Form.Item>
                      </Form>
                    </Card>
                  </Row>
                  <Row className="change-pass">
                    <Card
                      title="Change password"
                      bordered={false}
                      style={{ width: "100%" }}
                    >
                      <Form
                        className="user-form"
                        layout="vertical"
                        onFinish={update}
                      >
                        <Form.Item
                          className="user-form"
                          name="currentPassword"
                          label="Current password"
                          wrapperCol={6}
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                        >
                          <Input.Password placeholder="Current password" />
                        </Form.Item>
                        <Form.Item
                          className="user-form"
                          name="newPassword"
                          label="New password"
                          wrapperCol={6}
                          rules={[
                            {
                              required: true,
                              message: "Please input your new password!",
                            },
                            {
                              min: 6,
                              message:
                                "Username must have a minimum length of 6",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input.Password placeholder="New password" />
                        </Form.Item>
                        <Form.Item
                          className="user-form"
                          name="confirm-password"
                          label="Confirm password"
                          required
                          wrapperCol={6}
                          rules={[
                            {
                              required: true,
                              message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (
                                  !value ||
                                  getFieldValue("newPassword") === value
                                ) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  new Error(
                                    "The new password that you entered do not match!"
                                  )
                                );
                              },
                            }),
                          ]}
                          hasFeedback
                        >
                          <Input.Password placeholder="Confirm password" />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 0 }}>
                          <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            style={{
                              width: "100%",
                              marginTop: "18px",
                              marginBottom: "50px",
                              height: "60px",
                              borderRadius: "0",
                              backgroundColor: "#252e52",
                              fontWeight: "700",
                              fontSize: "20px",
                            }}
                          >
                            SAVE CHANGES
                          </Button>
                        </Form.Item>
                      </Form>
                    </Card>
                  </Row>
                </Space>
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
          {message}
        </Modal>
      </div>
    )
  );
};
