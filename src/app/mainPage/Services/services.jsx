import React from "react"

class Services extends React.Component
{
    render()
    {
        return(
            <div className="container-fluid bg-success services  pb-5">
                <div className="row pb-5 text-center">
                    <div className=" col-lg-12 d-flex flex-column justify-content-center align-items-center">
                        <h2>OUR SERVICES</h2>
                        <h1 className="pt-3">Best Services Save The World</h1>
                    </div>
                </div>
                <div className="row  d-flex justify-content-center align-items-center text-center">
                <div className="col-lg-3 bg-light d-flex flex-column justify-content-center mx-4 my-5 py-5">
                        <span className="p-4" ><i class="fas fa-tshirt"></i></span>
                        <h1 className="p-4">Modern Design</h1>
                        <p className="p-4">
                            Brook embraces a modern look with various enhanced pre-defined page elements.</p>        
                    </div>
                    <div className="col-lg-3 bg-light d-flex flex-column justify-content-center mx-4 my-5 py-5">
                        <span className="p-4" ><i class="fas fa-tshirt"></i></span>
                        <h1 className="p-4">Modern Design</h1>
                        <p className="p-4">
                            Brook embraces a modern look with various enhanced pre-defined page elements.</p>        
                    </div>
                    <div className="col-lg-3 bg-light d-flex flex-column justify-content-center mx-4 my-5 py-5">
                        <span className="p-4" ><i class="fas fa-tshirt"></i></span>
                        <h1 className="p-4">Modern Design</h1>
                        <p className="p-4">
                            Brook embraces a modern look with various enhanced pre-defined page elements.</p>        
                    </div>
                </div>
            </div>
        )
    }
}
export default Services