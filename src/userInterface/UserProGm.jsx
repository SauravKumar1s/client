import React from "react";
import gdMorning from "../Assests/gdmorning.svg";

const UserProGm = () => {
  return (
    <div className="w-full h-screen bg-backClrLogin flex justify-center">
      <div className="w-3/4 bg-white border-solid border-8 border-red-300 rounded-radius mt-24">
        <div className="bg-backClrLogin relative  flex flex-col-reverse md:flex-row md:space-x-5 space-y-0 md:space-y-0 rounded-xl shadow-lg max-w-xs md:max-w-4xl md:h-80 mx-auto mt-4">
          <div className="w-full  flex flex-col space-y-2 p-3">
            <div className="flex flex-col p-2 ">
              <h3 className="font-black text-getTextClr md:text-3xl text-2xl p-2">
                Good Morning
              </h3>
              <h3 className="font-black text-getTextClr md:text-2xl text-xl p-2">
                User Pro
              </h3>
              <p className="font-link md:text-lg text-gray-600 text-base w-11/12 p-2 mt-14">
              We hope you are having an amazing day!
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/4 grid place-items-center">
            <img
              src={gdMorning}
              alt="tailwind logo"
              className="rounded-xl lg:absolute md:w-96 md:mr-10"
            />
          </div>
        </div>
        <div className="ml-32">
          <button
            type="button"
            className="font-link p-2 w-32 text-xs sm:mt-8 mt-8 bg-red-500 rounded-xl text-white font-bold"
          >
            Angebot erstellen
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default UserProGm;
