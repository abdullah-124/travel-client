import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../Firebase/useFirebase";
import Review from "./Review";
import "./style.css";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useFirebase();
  const onSubmit = (data) => {
    data.name = user.displayName;
    data.image = user.photoURL;
    // console.log(data);
    fetch("https://travel-vai-server.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
    //   console.log(result);
    if(result.status === 200){
        alert('Review Adding successfull')
        reset()
    }
    });
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center ">
        <form className="shadow p-4 m-3" onSubmit={handleSubmit(onSubmit)}>
            <h4>Add a review</h4>
          <input {...register("text")} placeholder="Type your review" />

          <input className="btn_outline" type="submit" />
        </form>
      </div>
      <Review></Review>
    </div>
  );
};

export default AddReview;
