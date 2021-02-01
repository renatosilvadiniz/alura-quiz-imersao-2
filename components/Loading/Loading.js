/* eslint-disable */

import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../src/lottie/8555-loading.json";

const Example = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Example;
