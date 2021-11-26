import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';

const Banner = () => {


  
    return (
        <div>
         <Carousel variant="dark">
      <Carousel.Item>
    <img
      className=" d-block w-100"
      src="https://metropolis.com.ar/wp-content/uploads/2018/11/puerto-madero.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <h3 className="bannerStyle" >Take memories, leave footprints.
</h3>
    <p className="bannerStyle"> Wherever you go, go with all your heart!</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://turismo.buenosaires.gob.ar/sites/turismo/files/puente_de_la_mujer_panoramica_madero_1200_3.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    <h3 className="bannerStyle">Always say yes to new adventures</h3>
    <p className="bannerStyle">The best travel quotes paired with beautiful photos.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://turismo.buenosaires.gob.ar/sites/turismo/files/vista_general_madero_1200_gastro_0.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3 className="bannerStyle"> Keep calm and travel on</h3>
   <p className="bannerStyle">An adventure a day keeps the doctor away</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
        </div>
    );
};

export default Banner;