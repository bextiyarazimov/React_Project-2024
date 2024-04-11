import React from "react";
import Products from "./Products";
import Footer from "./Footer";
import './Home.css';


const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
       <video src="/assets/video-1.mp4" autoPlay loop muted />
        <div className="card-img-overlay d-flex flex-column 
         justify-content-arround">
            <div classNameName="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
           CHECK OUT ALL THE TRENDS
          </p>
            </div>
       
        </div>
      </div>
      <Products />
      <Footer/>
    </div>


  );
};

export default Home;
