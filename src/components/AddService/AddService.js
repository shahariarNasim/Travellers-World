import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
      console.log(data);
  
      axios.post("https://travellers-world.herokuapp.com/Services", data)
      .then(res => { 
          if(res.data.insertedId) {
              alert('Added SuccessFully');
              reset();
          }
       })
    };
    return (
        <div className="my-5 text-center">
            <h4 className="pt-4"> Add a New Service</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="my-3 w-50 "
          {...register("img", { required: true })}
          placeholder="Image URL"/> <br />
        <input
          className="my-2 w-50"
          {...register("cost")}
          placeholder="Cost"
        />
        <br />
        <input
          className="my-3 w-50"
          {...register("description")}
          placeholder="description"
        />
        <br />
        <input
          className="mt-3 w-50 "
          placeholder="title"
          {...register("title")}
        />
        <br />
        <br />
        <input
          className="btn btn-outline-primary"
          value="Submit"
          type="submit"
        />
      </form>
        </div>
    );
};

export default AddService;