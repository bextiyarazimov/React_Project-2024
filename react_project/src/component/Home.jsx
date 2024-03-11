import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div classNameName="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/b1.jpg" className="card-img" alt="Background" height="650px" />
        <div className="card-img-overlay d-flex flex-column 
         justify-content-arround">
            <div classNameName="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
           CHECK OUT ALL THE TREND
          </p>
            </div>
       
        </div>
      </div>
      <Products />
    </div>


  );
};

export default Home;
