import React from "react"
class Footer extends React.Component
{
    render()
    {
        return(
            <footer class="Footer" id="Footerid">
  <div class="container">
    <div class="row ">
      <div class="col-lg-4 col-md-6 col-12 Footer-id ">
        <div class="flex">
          <h3>Hamza Ashfaq</h3>
          <p>The world has become so fast paced that people don'y want to 
            stand by reading a page of information to be they would much
            ratther look at a presentation and understand the message.
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-12 Footer-id text-center">
        <div class="flex">
          <h3>NAVIGATION LINKS</h3>
          <li><a href="#">Home</a></li>
 <li><a href="#">Services</a></li>
          <li><a href="#">Price</a></li>
          <li><a href="#">About</a></li>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 col-12 Footer-id ">
        <div>
 <h3>Newsletter</h3>
          <p>For business Professionals caught between Hight
            ome price and mediocre print and graphic.
  </p>
          <div class="container Newsletter-main">
            <div class="row">
              <div class="col-lg-12 col-12">
                <div class="input-group mb-3">
                  <input type="text" class="form-control news-input" placeholder="Your Email"/>
                  <div class="input-group-append">
                    <span class="input-group-text">Subrcribe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 text-center">
      <p>Copyright @2020 All rights reserved | This Templatr is made with love by Hamza Ashfaq.</p>
    </div>
     <div class="scrolltop float-right">
        <i class="fa fa-arrow-up" onclick="topFunction()" id="myBtn"></i>
     </div>
  </div>

</footer>

        )
    }
}

export default Footer