import { React, useState } from "react";
import "./Login.css";
import { useCollapse } from "react-collapsed";

const Collapsible = (props) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div>
      <button className="collapse-header" onClick={toggle}>
        {props.label}
      </button>
      {open && <div className="collapse-body">{props.children}</div>}
    </div>
  );
};

const Login = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const collapseLogin = () => {
    setOpenLogin(!openLogin);
    setOpenSignup(false);
  };
  const collapseSignup = () => {
    setOpenSignup(!openSignup);
    setOpenLogin(false);
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
                <form>
                  <div class="form-login">
                    <label for="inputUsername">Username</label>
                    <input
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      type="text"
                      value=""
                    />
                  </div>
                  <div class="form-login">
                    <label for="inputPassword">Password</label>
                    <input
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      type="password"
                    />
                  </div>
                  <div>
                    <div>
                      <button class="submit">Continue</button>
                    </div>
                  </div>
                </form>
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
                <form>
                  <div class="form-signup">
                    <label for="inputEmailSignup">Email</label>
                    <input
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      type="text"
                      value=""
                    />
                  </div>
                  <div class="form-signup">
                    <label for="inputUsernameSignup">Username</label>
                    <input
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      type="text"
                      value=""
                    />
                  </div>
                  <div class="form-signup">
                    <label for="inputPassword">Password</label>
                    <input
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      type="password"
                    />
                  </div>
                  <div>
                    <div>
                      <button className="submit">Continue</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Login;
