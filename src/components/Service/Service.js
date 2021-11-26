import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, img, title, description,cost } = service;

  return (
    <div className="col-lg-3 my-5 ">
      <img width="100%" src={img} alt="" />
      <h4 style={{ color: "tomato", marginTop: '20px' }}>{title}</h4>
       <span style={{ color: "gray", marginRight: '20px', fontSize:'20px'}}>{description}</span>
       <span style={{ color: "tomato", fontSize:'18px' }}>{cost}</span> 
      <Link to={`/Details/${_id}`}>
        <Button className="btn bg-primary text-white py-1 mt-2" variant="primary">
          Book Now
        </Button>
      </Link>  
      
    </div>
  );
};

export default Service;
