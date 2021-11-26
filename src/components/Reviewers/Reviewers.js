import Button from '@restart/ui/esm/Button';
import React from 'react';
const Reviwers = () => {
    return (
        <div>
             <div className="row gap-5 mx-1 my-5 justify-content-center">
            <h1 className="text-center fw-bolder my-3 text-primary">What Our Traveller Say About Us</h1>
            <div className="col-lg-3 p-4 rounded-3 "> 
                <img width="100%" src="https://media.istockphoto.com/photos/young-woman-checking-her-train-in-time-board-picture-id628109306?k=20&m=628109306&s=612x612&w=0&h=jJfcJUB-p_hLZfEfMYYUy-XoPAV7evU7P6W0NDoDsvw=" alt="" />
                <h2>Dina Dimple</h2>
                <h5 className='text-primary fw-bold mt-3'>Traveller</h5>
                 
                <p>This is definitely one of the best travel, but it certainly reads true. When you travel, the whole world opens up. Travel has helped us to understand the meaning of life and it has helped.</p>
                <Button className="btn btn-outline-info">Contact me</Button>
            </div>
            <div className="col-lg-3 p-4"> 
                <img width="100%" src='https://media.istockphoto.com/photos/theres-so-much-to-see-picture-id855413388?k=20&m=855413388&s=612x612&w=0&h=mj_yC5JyEc10zei9vxL06DUqBiRqHlNU6viUe-0IcKA=' alt="" />
                <h2>Peter Berker </h2>
                <h5 className='text-primary fw-bold mt-3'>Traveller</h5>
               
                <p>Throughout our lives, people have thought that because we keep traveling and searching for new things to do, we are not focused. They have often thought we were flaky or unfocused. </p>
                <Button className="btn btn-outline-info">Contact me</Button>
            </div>
            <div className="col-lg-3 p-4"> 
                <img width="100%" src='https://st.focusedcollection.com/9163412/i/650/focused_165997400-stock-photo-young-male-traveler-outdoors.jpg' alt="" />
                <h2>John wall</h2>
                <h5 className='text-primary fw-bold mt-3'>Traveller</h5>
                
                <p>This isn’t just one of those cute travel quotes, it is also a motto everyone should live by in life. We need to give back to this world. People often feel they can take home a trophy</p>
                <Button className="btn btn-outline-info">Contact me</Button>
                
            </div>
        </div>
        </div>
    );
};

export default Reviwers;