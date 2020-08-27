import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../assets/code-solid.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Marko Jelenković</span>
            </div>
            <div className='line'>
              <span>Full-Stack Developer</span>
            </div>
          </h2>
          <div className='btn-row'>
            <Link to="/skills">SKILLS<RightArrow /></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
