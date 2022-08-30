import React, { FC } from "react";
// import "./Header.css";
import "./Header.scss";
const logoSrc = require("../assets/image/logo.png");
const birdSrc = require("../assets/image/brid.png");
const wawaSrc = require("../assets/image/wawa.png");
const githubSrc = require("../assets/image/github.png");
const Header: FC = () => {
  return (
    <div className="wrapperOuter">
      <div className="wrapperInner">
        <span className="active"> Home</span>
        <span className="da">Swap</span>
        <span className="fa">Farm</span>
        <span className="ga">$ve721</span>
        <span className="ha">Claim</span>
      </div>
      <img src={logoSrc} className="logo" />
      <div className="wrapper-inner-right">
        <div className="link-list">
          <a href="" target="_blank">
            <img src={birdSrc} className="image-brid" />
          </a>
          <a href="" target="_blank">
            <img src={wawaSrc} className="image-wawa" />
          </a>
          <a href="" target="_blank">
            <img src={githubSrc} className="image-github" />
          </a>
        </div>

        <div className="wrapper-tool-list">
          {/* <input type="button" value=""> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
