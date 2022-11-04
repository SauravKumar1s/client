import React from "react";
import demo from "../Assests/home11.svg";

const CardWithText = () => {
  return (
    <>
      <div className="">
        <div class="flex items-center justify-around mt-10 ">
          <div class="flex border-2 rounded-xl">
            <input type="text" class="px-4 py-2 w-80" placeholder="Search..." />
            <button class="flex items-center justify-center rounded-full px-4 border-l bg-red-600">
              <svg
                class="w-6 h-6 text-white"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center gap-10 ">
            <button className=" bg-gray-500 text-white font-bold py-2 px-4 border-b-4   rounded-full">
              User Work
            </button>
            <button className=" bg-red-500 text-white font-bold py-2 px-4 border-b-4 rounded-full">
              User Pro
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-white flex justify-center ">
        <div className="flex flex-col items-center justify-center  w-11/12 bg-white border-solid border-8 border-red-300 rounded-radius mt-8">
          <h1 className="text-2xl mt-10 text-bold">Gespeicherte Suche</h1>
          <div class="container max-w-7xl  m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
            <div class="w-full lg:w-1/2 p-3">
              <div class="flex flex-col lg:flex-row rounded overflow-hidden h-44 border  shadow-lg">
                <img
                  class="block h-auto w-full lg:w-48 flex-none bg-cover "
                  src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
                />
                <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="flex items-center space-x-4">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt=""
                    />
                    <div class="flex justify-between  font-medium dark:text-white">
                      <div className="text-black">
                        Avatar
                        <p>Joined in August 2014</p>
                      </div>

                      <div
                        className="ml-24
                      "
                      >
                        <h1 className="text-2xl text-black m-0">$669</h1>
                      </div>
                    </div>
                  </div>

                  <p class="text-black font-bold text-xs mb-2 leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quia necessitatibus alias illum? Vitae, quidem?
                  </p>
                  <div className="flex justify-between">
                    <div>
                      {" "}
                      <p class="text-grey-darker text-base">Read more</p>
                    </div>
                    <div>
                      <button className=" bg-red-500 text-white font-bold py-2 px-4 border-b-4 rounded-full">
                        User Pro
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/2 p-3">
              <div class="flex flex-col lg:flex-row rounded overflow-hidden h-44 border  shadow-lg">
                <img
                  class="block h-auto w-full lg:w-48 flex-none bg-cover "
                  src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
                />
                <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="flex items-center space-x-4">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt=""
                    />
                    <div class="flex justify-between  font-medium dark:text-white">
                      <div className="text-black">
                        Avatar
                        <p>Joined in August 2014</p>
                      </div>

                      <div
                        className="ml-24
                      "
                      >
                        <h1 className="text-2xl text-black m-0">$669</h1>
                      </div>
                    </div>
                  </div>

                  <p class="text-black font-bold text-xs mb-2 leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quia necessitatibus alias illum? Vitae, quidem?
                  </p>
                  <div className="flex justify-between">
                    <div>
                      {" "}
                      <p class="text-grey-darker text-base">Read more</p>
                    </div>
                    <div>
                      <button className=" bg-red-500 text-white font-bold py-2 px-4 border-b-4 rounded-full">
                        User Pro
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/2 p-3">
              <div class="flex flex-col lg:flex-row rounded overflow-hidden h-44 border  shadow-lg">
                <img
                  class="block h-auto w-full lg:w-48 flex-none bg-cover "
                  src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
                />
                <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="flex items-center space-x-4">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt=""
                    />
                    <div class="flex justify-between  font-medium dark:text-white">
                      <div className="text-black">
                        Avatar
                        <p>Joined in August 2014</p>
                      </div>

                      <div
                        className="ml-24
                      "
                      >
                        <h1 className="text-2xl text-black m-0">$669</h1>
                      </div>
                    </div>
                  </div>

                  <p class="text-black font-bold text-xs mb-2 leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quia necessitatibus alias illum? Vitae, quidem?
                  </p>
                  <div className="flex justify-between">
                    <div>
                      {" "}
                      <p class="text-grey-darker text-base">Read more</p>
                    </div>
                    <div>
                      <button className=" bg-red-500 text-white font-bold py-2 px-4 border-b-4 rounded-full">
                        User Pro
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/2 p-3">
              <div class="flex flex-col lg:flex-row rounded overflow-hidden h-44 border  shadow-lg">
                <img
                  class="block h-auto w-full lg:w-48 flex-none bg-cover "
                  src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
                />
                <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="flex items-center space-x-4">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt=""
                    />
                    <div class="flex justify-between  font-medium dark:text-white">
                      <div className="text-black">
                        Avatar
                        <p>Joined in August 2014</p>
                      </div>

                      <div
                        className="ml-24
                      "
                      >
                        <h1 className="text-2xl text-black m-0">$669</h1>
                      </div>
                    </div>
                  </div>

                  <p class="text-black font-bold text-xs mb-2 leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quia necessitatibus alias illum? Vitae, quidem?
                  </p>
                  <div className="flex justify-between">
                    <div>
                      {" "}
                      <p class="text-grey-darker text-base">Read more</p>
                    </div>
                    <div>
                      <button className=" bg-red-500 text-white font-bold py-2 px-4 border-b-4 rounded-full">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardWithText;
