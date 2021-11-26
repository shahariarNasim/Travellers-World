import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
        <div className='footerStyle'>
            
            <div>
                <h4 >TRAVELLERS-WORLD</h4>  <br />
                <p><i className="fas fa-envelope"> Example.travveler@gmail.com </i></p>
              <p><i className="fas fa-envelope "> Mail.Travel@gmail.com </i> </p>
               <p><i className="fas fa-phone-alt "> +123456789</i> </p>
            <i className="fas fa-map-marker-alt">
            <span className="ms-2">Londoni Road Street 202</span> <br />
            <span className=" ms-3">East Subidbazer, Sylhet</span>
            </i>
         
            </div>
            <div className='support-style'>
                <h4>SUPPORT</h4> <br />
                <p >Contact Us</p> 
                <p > About Us</p>
                <p > Our Blogs </p>
                <p >  Package  </p>
              
            </div>
            <div className='direction-set'>
                <h4>FIND DIRECTION</h4> <br />
                <p> <input type="text" name="" id="" placeholder='Enter Your Location' /></p> <br />
                <a className='btn-direction' href="https://www.google.com/maps/@24.906625,91.8562281,17z">Get Direction</a>
                <p className="fs-4" style={{ color: "tomato" }}> <br />
            <i className="fab fa-facebook me-2"></i>{"  "} 
            <i className="fab fa-instagram me-2"></i>{" "}
            <i className="fab fa-twitter me-2"></i>{" "}
            <i className="fas fa-basketball-ball"></i>
          </p>
            </div>
           
            <div>
                <h4>WE ACCEPTS</h4> <br />
                <img width="70%" src="https://www.kufs.ac.jp/en/faculties/shortprogram/img/img-card.png" alt="" />
            </div>
        </div>
        <div className='footerLast'>
          <h6>© 2021 Travelers World. All rights reserved.</h6>
        </div>
        </div>
    );
};

export default Footer;