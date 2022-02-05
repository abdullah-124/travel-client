import React from "react";
import "./provide.css";
import protection from "./image/protection.png";
import safeDeposite from "./image/safe.png";
import hotel from "./image/hotel.png";
import flexibility from "./image/flexibility.png";

const Provide = () => {
  return (
    <div className="my-5 provide">
      <h1 className="title">We Provide</h1>
      <div className="row mx-auto row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div className="col mx-auto">
          <div className="card m-2">
            <div>
              <img src={protection} alt="" />
            </div>
            <h3 className="card-title">Protection</h3>
            <p>Insure your trip, even in case of Covid-19</p>
          </div>
        </div>
        <div className="col mx-auto">
          <div className="card m-2">
            <div>
              <img src={safeDeposite} alt="" />
            </div>
            <h3 className="card-title">Safe Deposite</h3>
            <p>Book your trip with a just a deposit</p>
          </div>
        </div>
        <div className="col mx-auto">
          <div className="card m-2">
            <div>
              <img src={hotel} alt="" />
            </div>
            <h3 className="card-title">Hotel</h3>
            <p>Offer best hotel in cheap price at your range</p>
          </div>
        </div>
        <div className="col mx-auto">
          <div className="card m-2">
            <div>
              <img src={flexibility} alt="" />
            </div>
            <h3 className="card-title">Flexibility</h3>
            <p>The freedom to cancel your flight whenever you want. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
