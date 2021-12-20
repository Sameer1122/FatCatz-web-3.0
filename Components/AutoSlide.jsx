import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoSlide extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 8000,
      pauseOnHover: false,
      autoplaySpeed: 0,
      cssEase: "linear",
      arrows: false,
      initialSlide: 4,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div
        className="py-16  bg-yellow-300 text-black overflow-hidden"
        //   style={{ transform: "rotate(4deg)", overflowY: "hidden" }}
      >
        <Slider {...settings}>
          {/** Text to AutoPlay you can change it down Below */}
          <div>
            <p className="font-bold  text-sm sm:text-lg md:text-2xl">
              FAT CATZ ARE COMING SOON
            </p>
          </div>
          <div>
            <p className="font-bold  text-sm sm:text-lg md:text-2xl">
              FAT CATZ ARE COMING SOON
            </p>
          </div>
          <div>
            <p className="font-bold  text-sm sm:text-lg md:text-2xl">
              {" "}
              FAT CATZ ARE COMING SOON
            </p>
          </div>
          <div>
            <p className="font-bold  text-sm sm:text-lg md:text-2xl">
              FAT CATZ ARE COMING SOON
            </p>{" "}
          </div>
          <div>
            <p className="font-bold  text-sm sm:text-lg md:text-2xl">
              FAT CATZ ARE COMING SOON
            </p>
          </div>
          <div>
            <p className="font-bold  text-sm sm:text-lg md:text-2xl">
              FAT CATZ ARE COMING SOON
            </p>
          </div>
          <div>
            <p className="font-bold  text-sm sm:text-lg md:text-2xl">
              FAT CATZ ARE COMING SOON
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
