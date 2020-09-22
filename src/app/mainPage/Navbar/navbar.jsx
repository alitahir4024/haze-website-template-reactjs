import React from "react"

class Navbar extends React.Component
{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#191919"}}>
                <a className="navbar-brand ml-lg-5" href="#">Hazze<span>.</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item mr-5">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#">About US</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#">Gallery</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar