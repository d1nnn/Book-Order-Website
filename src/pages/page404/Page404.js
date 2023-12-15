import React from "react";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
import * as animation404 from "../../assets/animation/error404.json";
import { Button } from "antd";
import "./Page404.css";

const Page404 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className="animation">
        <Lottie
          animationData={animation404}
          options={defaultOptions}
          height={100}
          width={100}
        />
      </div>
      <div className="button">
        <NavLink to="/">
          <Button type="primary" dander>
            Back to Home
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Page404;
