import React from "react";
import Lottie from "lottie-react";
import * as loadingAnimation from "../../assets/animation/loadingAnimation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingAnimation,
  rendererSettings: {
    preserveAspectRatio: "XmidYMid slice",
  },
};

const Loading = () => {
  return (
    <div>
      <Lottie
        animationData={loadingAnimation}
        options={defaultOptions}
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loading;
