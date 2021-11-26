/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Details = () => {
  const [service, setService] = useState([]);
  const { key } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://travellers-world.herokuapp.com/Services/${key}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  console.log(service);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    data.title = service.title;
    data.img = service.img;
    data.status = "pending";

    fetch("https://travellers-world.herokuapp.com/Order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Added to My Orders");
          reset();
        }
      });
  };

  return (
    <div className="row text-center justify-content-evenly my-5 mx-1 ">
      <h3 className='fw-bolder mt-3'>Order Placement</h3>
      <div className="col-lg-5 my-5">
        <img
          style={{ borderRadius: "10px" }}
          width="100%"
          src={service?.img}
          alt=""
        />
        <h3 style={{ color: "#2F2C41", fontWeight: "600", marginTop: "20px" }}>
          <i className="fas fa-map-marker-alt"></i> {service?.title}
        </h3>
        <h6>Info: {service?.description}</h6>
      </div>
      <div className="col-lg-6 mb-5 my-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-75 my-2 px-2 py-1"
            defaultValue={user?.displayName}
            placeholder="Your Name"
            {...register("name")}
          />
          <br />
          <input
            className="w-75 my-2 px-2 py-1"
            defaultValue={user?.email}
            placeholder="Your Email"
            {...register("email")}
          />
          <br />
          <label htmlFor="place">Place</label> <br />
          <input
            className="w-75 my-2 px-2 py-1"
            defaultValue={service?.title}
            placeholder="title"
            {...register("title")}
          />
          <br />
          <label htmlFor="from">From</label>
          <input style={{width: "30%"}} className="my-2 px-2 py-1 ms-2 me-4 my-4" type="date" {...register("from")}/>
          
          <label htmlFor="to">To</label>
          <input style={{width: "30%"}} className="my-2 px-2 py-1 ms-2" type="date" {...register("to")} /> 
          <input
            className="w-75 mb-4 mt-2 px-2 py-1"
            placeholder="Your Mobile No."
            type="number"
            {...register("mobile", { required: true })}
          />{" "}
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Details;
