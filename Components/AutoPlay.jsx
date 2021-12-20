import React, { Component } from "react";
import Slider from "react-slick";
import First from "../assest/1.png";
import Second from "../assest/2.png";
import Third from "../assest/3.png";
import Fourth from "../assest/4.png";
import Fifth from "../assest/5.png";
import Six from "../assest/6.png";
import Seven from "../assest/7.png";
import Eight from "../assest/8.png";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      pauseOnHover: false,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 4000,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    };
    return (
      <div className=" overflow-hidden m-auto ">
        {/**AutoPlay Slider */}
        <Slider {...settings}>
          {/**First Image */}
          <div>
            <img
              className="lg:h-64 lg:w-64 md:h-48 md:w-48 w-24 h-24 sm:w-32 sm:h-32 rounded-lg"
              src={First}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:h-64 lg:w-64 md:h-48 md:w-48 w-24 h-24 sm:w-32 sm:h-32 rounded-lg"
              src={Second}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:h-64 lg:w-64 md:h-48 md:w-48 w-24 h-24 sm:w-32 sm:h-32 rounded-lg"
              src={Third}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:h-64 lg:w-64 md:h-48 md:w-48 w-24 h-24 sm:w-32 sm:h-32 rounded-lg"
              src={Fourth}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:h-64 lg:w-64 md:h-48 md:w-48 w-24 h-24 sm:w-32 sm:h-32 rounded-lg"
              src={Fifth}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:h-64 lg:w-64 md:h-48 md:w-48 w-24 h-24 sm:w-32 sm:h-32 rounded-lg"
              src={Six}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:h-64 lg:w-64 md:h-48 md:w-48 w-24 h-24 sm:w-32 sm:h-32 rounded-lg"
              src={Seven}
              alt=""
            />
          </div>
          {/**Last Image */}
          <div>
            <img
              className="lg:h-64 lg:w-64 md:h-48 md:w-48 w-24 h-24 sm:w-32 sm:h-32 rounded-lg"
              src={Eight}
              alt=""
            />
          </div>
          {/**Add More Down Below */}
        </Slider>
      </div>
    );
  }
}
