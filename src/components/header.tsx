import React, { FC } from "react";
import "./Header.css";
const Header: FC = () => {
  return (
    <div className="wrapper-outer">
      <div className="wrapper-inner">
        <span className="sa active"> Home</span>
        <span className="da">Swap</span>
        <span className="fa">Farm</span>
        <span className="ga">$ve721</span>
        <span className="ha">Claim</span>
      </div>
      <img src={require("src/assets/image/logo.png")} />
      <div className="wrapper-inner-right"></div>
    </div>
  );
};

export default Header;
