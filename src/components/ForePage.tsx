"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { forePageDetails } from "@/data/forePage";
import { useState, useEffect } from "react";

const ForePage: React.FC = () => {
  const [width, setWidth] = useState(1200); // Default fallback width

  useEffect(() => {
    // Set to window width on client side
    setWidth(window.innerWidth);

    // Optional: Update on resize
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div>
      <section
        id="mainPage"
        className="relative flex items-center justify-center pb-0 pt-16 md:pt-16 px-5"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-foreground mx-auto">
            {forePageDetails.heading}
          </h1>
          <p className="mt-4 text-foreground mx-auto">
            {forePageDetails.subheading}
          </p>
        </div>
      </section>
      <div className="mb-16 relative h-auto">
        <Slider {...settings}>
          <Image
            key={"0"}
            src={forePageDetails.centerImageSrc[0]}
            width={width}
            height={10}
            quality={100}
            // sizes="100vw"
            priority={true}
            unoptimized={true}
            alt="app mockup"
            className="relative mt-12 md:mt-16 mx-auto z-10"
          />
          <Image
            key={"1"}
            src={forePageDetails.centerImageSrc[1]}
            width={width}
            height={10}
            quality={100}
            sizes="100vw"
            priority={false}
            unoptimized={true}
            alt="app mockup"
            className="relative mt-12 md:mt-16 mx-auto z-10"
          />
        </Slider>
      </div>
    </div>
  );
};

export default ForePage;
