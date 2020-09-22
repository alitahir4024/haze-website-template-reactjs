import React from "react"
import Pic1 from "../../../img/about-us.jpg"

class About extends React.Component
{
    render()
    {
        return(
            <div className="container-fluid py-4  AboutUs">
                <div className="m-lg-5 py-5">
                    <div className="row py-5">
                        <div className="col-lg-6 ">
                            <img className="img-fluid" src={Pic1} alt="About"/>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <h3 className="mt-5 pb-3">ABOUT US</h3>
                            <h1 className="pb-3">About Story</h1>
                            <p className="pb-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className="mt-4">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About