import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              hic possimus reiciendis officia maxime exercitationem consectetur,
              ex ea odit? Iste illo modi, sequi aut sint itaque accusantium
              adipisci neque ducimus! Dicta quis ducimus qui aliquid placeat ut
              corrupti, maxime corporis veritatis tempora ex quos minus
              provident earum atque eaque, rem animi optio dolor! Praesentium
              quos dolorum fugit quaerat architecto repudiandae! Perspiciatis
              molestiae, tempore corporis doloremque unde nesciunt non autem
              voluptas possimus voluptatum aut fugiat ab illo laborum!
              Laboriosam asperiores fugiat deleniti iure id nisi debitis enim
              totam, quam odit perferendis. Animi perspiciatis iure at
              distinctio praesentium nisi debitis, nihil ipsam est commodi,            </p>
            <NavLink to="/contact" className="btn  btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex">
            <img src="/assets/bgg.jpg" alt="About Us" height="500px" width="470px"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
