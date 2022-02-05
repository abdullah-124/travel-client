import React from "react";
import "./home.css";
import { Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import banner from "./image/oliur-1JNk998-g70-unsplash.jpg";
import Services from "../Services/Services";
import Counter from "./Counter/Counter";
import Provide from "./Provide/Provide";
import Review from "../Reviews/Review";
import Footer from "../Footer/Footer";
import Sppiner from "./Sppiner"

const Home = () => {
   const [spiner, setSpiner] = useState(true)
   useEffect( ()=>{
       setTimeout(()=> setSpiner(false), 700)
   } ,[])

  return spiner ? <Sppiner></Sppiner> : (

    <div>
      <div id="home" className="home container">
        <div className="banner row row-cols-1 align-items-center row-cols-lg-2 mx-auto">
          <div className="col">
            <img src={banner} alt="" />
          </div>
          <div className="col">
            <h1 className="home-title">Life is short and the world is wide!</h1>
            <Link className="btn_outline" to="/services">
              Explore Now
            </Link>
          </div>
        </div>
        <div className="">
          <Provide></Provide>
        </div>
        <div className="my-5 text-center">
          <Review></Review>
          <Link to="/review" className="btn_outline">Add Review</Link>
        </div>
        <div className="">
          <Counter></Counter>
        </div>
        <div className="mt-5">
          <Services></Services>
        </div>
        
      </div>
      <div className="footer mt-5 bg-black">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
