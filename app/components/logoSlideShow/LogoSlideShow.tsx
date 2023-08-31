import React from "react";
import "./style.css";
const LogoSlideShow = () => {
  return (
    <div id="ourwork" className="py-5 my-10">
      <h1 className="text-3xl font-bold text-center w-full">OUR WORK</h1>
      <div className="flex overflow-hidden slideshow">
        <div className="ml-4 flex justify-center gap-4 logos-slide-container">
          <div className="logos-slide !w-[200px] ">
            <img alt="logo" src="/images/1.png" />
          </div>
          <div className="logos-slide !w-[200px] ">
            <img alt="logo" src="/images/2.png" />
          </div>
          <div className="logos-slide !w-[200px] ">
            <img alt="logo" src="/images/3.png" />
          </div>
          <div className="logos-slide !w-[200px] ">
            <img alt="logo" src="/images/4.png" />
          </div>
          <div className="logos-slide !w-[200px] ">
            <img alt="logo" src="/images/5.png" />
          </div>
          <div className="logos-slide !w-[200px] ">
            <img alt="logo" src="/images/1.png" />
          </div>
          <div className="logos-slide !w-[200px] ">
            <img alt="logo" src="/images/2.png" />
          </div>
          <div className="logos-slide !w-[200px] ">
            <img alt="logo" src="/images/3.png" />
          </div>
          <div className="logos-slide !w-[200px] ">
            <img alt="logo" src="/images/4.png" />
          </div>
          <div className="logos-slide !w-[200px] ">
            <img alt="logo" src="/images/5.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlideShow;
