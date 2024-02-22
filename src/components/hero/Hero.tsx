// import React from 'react'
import "./Hero.css";

function Hero(): JSX.Element {
  return (
    <>
      <div className="heroContainer">
        <div className="imgContainer">
          <img className="heroImg" src="Outlook-Image.jpg" alt="" />
        </div>
        <div className="headingContainer">
          <h1 className="heroHeading">Karateto kako nacin na zivot</h1>
          <h3 className="heroSubHeading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            assumenda?
          </h3>
        </div>
      </div>
    </>
  );
}

export default Hero;

