import React from "react";

const Card = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-10 pt-10  bg-white">
        <button className=" bg-gray-500 text-white font-bold py-2 px-4 border-b-4   rounded-full">
          User Work
        </button>
        <button className=" bg-red-500 text-white h-auto font-bold py-2 px-4 border-b-4 rounded-full">
          User Pro
        </button>
      </div>

      <div className="w-full  bg-white flex justify-center ">
        <div className="w-3/4 bg-white border-solid border-8 border-red-300 rounded-radius mt-8">
          {/* Card */}

          <div className="w-full  bg-whiteflex mt-8 mb-8">
            <div className="mx-auto   h-56 w-3/4 rounded border-2 border-gray-300 dark:bg-gray-800 shadow text-center p-4">
              <div className="flex h-full items-center justify-start ">
                <div>
                  <div className="text-gray-900 text-start font-bold text-xl mb-2 ml- w-2/4">
                    Best Mountain Trails 2020
                    <p className="text-gray-500 text-xs mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between">
                  <p className="text-gray-900 dark:text-white text-4xl font-bold">
                    <span className="text-sm">$</span>
                    199
                    <span className="text-gray-300 text-sm">/ month</span>
                  </p>

                  <button className=" w-44 bg-red-500 text-white font-bold py-2 px-2 border-b-4 rounded-full">
                    User Work
                  </button>
                  <button className="w-44 bg-red-500 text-white font-bold py-2 px-2 border-b-4 rounded-full">
                    User Pro
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card2 */}

          <div className="w-full bg-white flex mt-8  mb-8">
            <div className="mx-auto   h-56 w-3/4 rounded border-2 border-gray-300 dark:bg-gray-800 shadow text-center p-4">
              <div className="flex h-full items-center justify-start ">
                <div>
                  <div className="text-gray-900 text-start font-bold text-xl mb-2 ml- w-2/4">
                    Best Mountain Trails 2020
                    <p className="text-gray-500 text-xs mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between">
                  <p className="text-gray-900 dark:text-white text-4xl font-bold">
                    <span className="text-sm">$</span>
                    199
                    <span className="text-gray-300 text-sm">/ month</span>
                  </p>

                  <button className=" w-44 bg-red-500 text-white font-bold py-2 px-2 border-b-4 rounded-full">
                    User Work
                  </button>
                  <button className="w-44 bg-red-500 text-white font-bold py-2 px-2 border-b-4 rounded-full">
                    User Pro
                  </button>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Card;
