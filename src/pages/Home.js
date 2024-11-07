import React, { useEffect, useState } from "react";
import img1 from "../assets/images/drawing-room-3.jpg";
import img2 from "../assets/images/drawing-room2.jpg";
import img3 from "../assets/images/drawing-room1.jpg";
import img4 from "../assets/images/kitchen1.jpg";
import img5 from "../assets/images/kitchen2.jpg";
import img6 from "../assets/images/kitchen3.jpg";
import img7 from "../assets/images/kitchen4.jpg";
import Card, { Card2, ProcessCard } from "../component/Card";

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

  const coveredIndustries = [
    {
      img: img1,
      title: "Residential",
      description:
        "Indignation and dislike men who are so beguiled and our the charms moment.",
      logo: "logo1",
    },
    {
      img: img2,
      title: "Commercial",
      description:
        "Righteous indignation work are so beguiled demoralized the blinded by desire.",
      logo: "logo2",
    },
    {
      img: img3,
      title: "Industries",
      description:
        "Our power of choice is and when nothing prevents work every pleasure interior.",
      logo: "logo3",
    },
  ];

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
          <div className="w-[500px] h-[500px] border"></div>

          <div className="w-1/4">
            <h3 className="font-bold text-red-500">ABOUT COMPANY</h3>
            <h1 className="font-semibold text-3xl">
              A SMALL EFFICIENT INTERIOR DESIGNING TEAM
            </h1>
            <p className="mt-20">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee the pain and
              trouble that are bound. Indignation and dislike men who are so
              beguiled and demoralized by the charms pleasure of the moment, so
              blinded by desire, that they cannot foresee.
            </p>
          </div>
        </div>

        {/* covered areas */}
        <div className="mt-32 min-h-[600px] flex flex-col items-center py-20 w-full bg-gray-800 opacity-80">
          <div className="text-center">
            <h6 className="text-md font-bold text-red-500">Working Area</h6>
            <h1 className="text-white text-3xl m-5">
              <strong>COVERED</strong> INDUSTRIES
            </h1>
            <p className="text-slate-300 text-lg">
              We are an Interior Designer, Who believe in excellence, quality
              and honesty, yes we<br></br> design beautiful home interiors.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-10 my-10">
            {coveredIndustries && coveredIndustries.length > 0
              ? coveredIndustries.map((item) => (
                  <Card2
                    img={item.img}
                    title={item.title}
                    description={item.description}
                    logo={item.logo}
                  />
                ))
              : ""}
          </div>
        </div>

        {/* completed projects */}
        <div className="flex flex-col items-center my-20">

          <div className="flex justify-between px-5 sm:w-full md:w-full lg:w-1/2">
            <div>
              <h6 className="text-customRed font-semibold my-5">PROJECTS</h6>
              <h1 className="text-3xl">
                <strong>RECENTLY COMPLETED</strong> WORKS
              </h1>
            </div>
            <button className="font-bold hover:text-customRed">More Projects</button>
          </div>

          <div className="w-full grid grid-cols-5 gap-5 px-5 my-10">

            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img6} />
              
          </div>


        </div>

        {/* our working process */}
        <div className="flex flex-col items-center">
          <div>
            <h6 className="text-customRed font-semibold">TO DO GOOD DESIGN</h6>
            <h1 className="text-3xl"><strong>OUR WORKING</strong> PROCESS</h1>
          </div>

          <div className="flex justify-center gap-10 py-20">
              <ProcessCard 
              sl="01"
              title="Idea & Design"
              description="With righteous indignation and works off beguiled demoralized charm."
              />
              <ProcessCard 
              sl="02"
              title="Specification"
              description="Our power of choice is untrammelled and when nothing prevents."
              />
              <ProcessCard 
              sl="03"
              title="Execution"
              description="Wing to the claims of duty the obligations will frequently occur."
              />
          </div>

        </div>




      </div>
      {/* body end */}
    </div>
  );
};

export default Home;
