import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image href="/images/tokens/0x479E0638F61ab12c6D1a947CD667d522bC69910d.png" width={32}/>
    </Svg>
  );
};

export default Icon;
