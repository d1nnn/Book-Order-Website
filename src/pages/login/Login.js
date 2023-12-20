import { React, useState } from "react";
import "./Login.css";
import BookDataService from "../../services/BookDataService";
import { Form, Input, Checkbox, Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const navigate = useNavigate();

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleOk = () => {
    console.log("Clicked ok button");
    setOpen(false);
  };

  const collapseLogin = () => {
    setOpenLogin(!openLogin);
    setOpenSignup(false);
  };
  const collapseSignup = () => {
    setOpenSignup(!openSignup);
    setOpenLogin(false);
  };

  const onLoginFinish = async (data) => {
    try {
      const res = await BookDataService.logIn(data);
      sessionStorage.setItem("accessToken", res.data.result.accessToken);
      setModalText("Sign in success");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        window.location.reload();
        navigate("/");
      }, 2000);
    } catch (error) {
      setModalText("Fail to sign in");
      setOpen(true);
    }
  };
  const onSignupinish = async (data) => {
    try {
      const res = await BookDataService.signUp(data);
      setModalText("Sign up success");
      setOpen(true);
    } catch (error) {
      setModalText("Fail to sign up", error);
      setOpen(true);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-main">
        <h2>Welcome to BaBook</h2>
        <div className="collapse-area">
          <button className="collapse-header" onClick={collapseLogin}>
            Sign In
          </button>
          {openLogin && (
            <div className="collapse-body">
              <div class="detailArea">
                <Form
                  initialValues={{ remember: true }}
                  onFinish={onLoginFinish}
                  autoComplete="on"
                  layout="vertical"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    className="login-form-item"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    className="login-form-item"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password size="large" />
                  </Form.Item>
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 0 }}>
                    <Button
                      className="submit"
                      type="primary"
                      htmlType="submit"
                      size="large"
                    >
                      Continue
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          )}
        </div>
        <hr />
        <div className="collapse-area">
          <button className="collapse-header" onClick={collapseSignup}>
            Sign Up
          </button>
          {openSignup && (
            <div className="collapse-body">
              <div class="detailArea">
                <Form
                  initialValues={{ remember: true }}
                  onFinish={onSignupinish}
                  autoComplete="on"
                  layout="vertical"
                >
                  <Form.Item
                    className="login-form-item"
                    label="Name"
                    name="displayName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    className="login-form-item"
                    label="Email"
                    name="email"
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
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    className="login-form-item"
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                      {
                        min: 6,
                        message: "Username must have a minimum length of 6",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    className="login-form-item"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      {
                        min: 8,
                        message: "Password must have a minimum length of 8",
                      },
                    ]}
                  >
                    <Input.Password size="large" />
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 0 }}>
                    <Button
                      className="submit"
                      type="primary"
                      htmlType="submit"
                      size="large"
                    >
                      Continue
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          )}
        </div>
        <hr />
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

export default Login;
