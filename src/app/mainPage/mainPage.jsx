import React from "react"
import Navbar from "./Navbar/navbar.jsx"
import HeroSec from "./HeroSection/heroSection.jsx"
import About from "./About/about.jsx"
import Services from "./Services/services.jsx"
import Portfolio from "./Portfolio/portfolio.jsx"
import NumberSpeak from "./NumberSpeak/numberSpeak.jsx"
import Team from "./Team/team.jsx"
import Footer from "./Footer/footer.jsx"

class MainPage extends React.Component
{
    render()
    {
        return(
            <>
            <Navbar/>
            <HeroSec/>
            <About/>
            <Services/>
            <Portfolio/>
            <NumberSpeak/>
            <Team/>
            <Footer/>
            </>
        )
    }
}
export default MainPage