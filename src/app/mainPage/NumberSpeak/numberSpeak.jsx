import React from "react"
 class NumberSpeak extends React.Component
 {
     render()
     {
         return(
             <div className="container-fluid numberSpeak">
                  <div className="row py-5 mx-lg-5 ">
            <div className="col-lg-6 pb-4">
                <h2>NUMBER SPEAK</h2>
                <h1>We have a lot of experiance</h1>
                <button className="mt-5 px-5 py-3">Read More</button>
            </div>
            <div className="col-lg-6 pt-3">
                <div className="row">
                    <div className="col-lg-4">
                        <h1>2034</h1>
                    </div>
                    <div className="col-lg-8">
                        <h3 className="pb-3">successful Projects</h3>
                        <p className="pb-4">Since its establishment in 2005, Fashion has been focusing on project management & implementation through cooperation.</p>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <h1>1054</h1>
                        </div>
                        <div className="col-lg-8">
                        <h3 className="pb-3">successful Projects</h3>
                            <p>Since its establishment in 2005, Fashion has been focusing on project management & implementation through cooperation.</p>
                        </div>
                    </div>
                </div>
            </div>
             </div>
         )
     }
 }
 export default NumberSpeak