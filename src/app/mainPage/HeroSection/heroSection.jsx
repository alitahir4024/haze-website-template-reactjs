import React from "react";
import Pic1 from "../../../img/hero-bg.jpg";

class HeroSec extends React.Component {
  render() {
    return (
      <div className="container-fluid HeroCont d-flex align-items-center ">
        <div className="container mt-5 d-flex flex-column justify-content-between align-items-start">
          <h3 className="pb-3">OFFICE FASHION</h3>
          <h1 className="pb-1">New Fashion</h1>
          <p className="pb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            <br />
            do eiusmod tempor incididunt ut labore et dolore magna
            <br /> aliqua.
          </p>
          <button className="mt-5">Read More</button>
        </div>
      </div>
    );
  }
}
export default HeroSec;
