import React, { useEffect, useState } from "react";
import img1 from "../assets/images/drawing-room-3.jpg";
import img2 from "../assets/images/drawing-room2.jpg";
import img3 from "../assets/images/drawing-room1.jpg";
import img4 from "../assets/images/kitchen1.jpg";
import img5 from "../assets/images/kitchen2.jpg";
import img6 from "../assets/images/kitchen3.jpg";
import img7 from "../assets/images/kitchen4.jpg";
import Card from "../component/Card";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // function to handle next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // auto-slide effect
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // change slide every 3 second
    return () => clearInterval(interval); // clean up interval on unmount
  }, []);

  return (
    <div className="text-gray-800">
      {/* heading here */}
      <div className="w-full h-[600px] overflow-hidden relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="absolute top-1/3 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* Navigation Buttons */}
        <button
          onClick={goToPreviousSlide}
          className="prev-btn absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded"
        >
          ‹
        </button>
        <button
          onClick={goToNextSlide}
          className="next-btn absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded"
        >
          ›
        </button>
      </div>
      {/* heading end */}

      {/* body here */}
      <div>
        {/* card components here */}
        <div className="flex justify-center gap-20 -mt-20 z-20 relative animate-fly-in">
          <Card
            heading="Concept Designs"
            details="Indignation dislike  who are beguile works & demoralized the charms."
          />
          <Card
            heading="Project Designs"
            details="Our power of choice is untrammelled and all nothing prevents best."
          />
          <Card
            heading="Make Overs"
            details="Every pleasure is to be welcomed & every circumstances & owing power."
          />
        </div>

        {/* about company here */}
        <div className="flex justify-center gap-20 sm:flex-col md:flex-row mt-56">
          <div className="w-[500px] h-[500px] border">

          </div>

          <div className="w-1/4">
            <h3 className="font-bold text-red-500">ABOUT COMPANY</h3>
            <h1 className="font-semibold text-3xl">A SMALL EFFICIENT INTERIOR DESIGNING TEAM</h1>
            <p className="mt-20">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.

Indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee.</p>
          </div>
        </div>



      </div>
      {/* body end */}


    </div>
  );
};

export default Home;
