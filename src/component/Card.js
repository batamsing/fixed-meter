import React from "react";

const Card = ({ heading, details }) => {
  return (
    <div className="w-80 h-80 shadow-md flex flex-col bg-white">
      <div className="h-4/5 w-full p-10 text-center">
        <h2 className="font-bold text-xl mt-5">{heading && heading}</h2>
        <p className="mt-8 text-gray-500">{details && details}</p>
      </div>
      <div className="font-bold bg-slate-200 flex-1 flex justify-center items-center">
        <button className="hover:text-red-600 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;

export const Card2 = ({ img, title, description, logo }) => {
  return (
    <div className="flex flex-col justify-center items-center group hover:cursor-pointer">
      <div className="h-64 w-80 overflow-clip">
        <img className="group-hover:scale-125 transition-all ease-in-out duration-300 group-hover:brightness-50" src={img} alt="img" />
      </div>
      <div className="-mt-20 relative flex items-center bg-white h-56 w-64">
        <div className="bg-slate-200 h-full">{logo}</div>
        <div className="p-5">
          <h1 className="text-black text-2xl font-semibold mb-2">{title}</h1>
          <p className="text-slate-800">{description}</p>
        </div>
        <div
          className="w-14 h-14 rounded-full bg-customRed absolute -top-7 right-7 flex justify-center items-center 
         group-hover:h-28 group-hover:rounded-t-full group-hover:rounded-b-none group-hover:-top-14 
        transition-all duration-200 ease-in-out"
        >
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H20M12 4V20"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const ProcessCard = ({ sl, title, description }) => {
  return (
    <div className="flex flex-col h-64 w-72 items-center text-center border-2 border-t-customRed relative hover:-mt-4 transition-all ease-in-out duration-300 group">
      <div className="bg-white rounded-full w-16 h-16 border-2 border-customRed -mt-8 absolute flex items-center justify-center group-hover:bg-customRed group-hover:text-white transition-all ease-out duration-300">
        <h2 className="font-semibold text-2xl">{sl}</h2>
      </div>

      <div className="my-14 px-5">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-slate-700 mt-5">{description}</p>
      </div>

    </div>
  )
}
