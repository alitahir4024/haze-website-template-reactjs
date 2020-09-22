import React from "react";
import Pic1 from "../../../img/portfolio-1.jpg"
import Pic2 from "../../../img/portfolio-2.jpg"
import Pic3 from "../../../img/portfolio-3.jpg"
import Pic4 from "../../../img/portfolio-4.jpg"

class Portfolio extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-success portfolio  py-5">
        <div className="row py-5 text-center">
          <div className="pb-3 col-lg-12 d-flex flex-column justify-content-center align-items-center">
            <h2>OUR PORTFOLIO</h2>
            <h1 className="pt-3">Turn Your Dream Into Reality</h1>
          </div>
        </div>
        <div className="row py-5 mx-lg-5 no-gutters  d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
                <img src={Pic1} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={Pic2} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <img src={Pic3} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <img src={Pic4} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
  }
}

export default Portfolio;
