import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <image href="/images/logo.png" width={68}/>
    </Svg>
  );
};

export default Icon;
