import React from "react";
import RegisterB from "../Assests/registerb.svg";

const UserWorkR = () => {
  return (
    <>
      <div className="w-full flex">
        <div className="p-10 w-2/4 bg-red-500">
          <span className="font-bold  text-4xl text-white ">Devifix</span>
        </div>
        <div className="w-2/4 bg-backClrLogin"></div>
      </div>{" "}
      <div className="bg-backClrLogin w-full flex flex-row">
        <div className="bg-red-500 w-2/4 p-9  ">
          <div className="flex justify-center items-start  h-screen bg-red-500 ">
            <img className="w-fit" src={RegisterB} alt="" srcset="" />
          </div>
        </div>
        <div className="bg-backClrLogin w-2/4 justify-center items-start flex ">
          <div className=" bg-backClrLogin ">
            <div className="bg-backClrLogin">
              <div className=" mx-auto max-w-6xl ">
                <div className="flex items-center justify-center gap-10 ">
                  <button className=" bg-gray-500 text-white font-bold py-2 px-4 border-b-4   rounded-full">
                    User Work
                  </button>
                  <button className=" bg-red-500 text-white font-bold py-2 px-4 border-b-4 rounded-full">
                    User Pro
                  </button>
                </div>
                <div class="flex min-h-full items-center justify-center py-4 px-4 sm:px-6 lg:px-8 ">
                  <div class="w-screen max-w-md space-y-8">
       
                    <form class="mt-8 space-y-6" action="#" method="POST">
                      <input type="hidden" name="remember" value="true" />
                      <div class="-space-y-px rounded-md shadow-sm mb-4">
                        <div className="py-3">
                          <label for="email-address" class="sr-only">
                            Email address
                          </label>
                          <input
                            className="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="company"
                            type="text"
                            placeholder="Title"
                          />
                        </div>
                        <div className="py-3">
                          <label for="email-address" class="sr-only">
                            Email address
                          </label>
                          <input
                            className="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="company"
                            type="text"
                            placeholder="Title"
                          />
                        </div>
                        <div className="py-3">
                          <label for="email-address" class="sr-only">
                            Email address
                          </label>
                          <input
                            className="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="company"
                            type="text"
                            placeholder="Title"
                          />
                        </div>
                        <div className="py-3">
                          <label for="password" class="sr-only">
                            Password
                          </label>
                          <input
                            className="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="company"
                            type="text"
                            placeholder="Title"
                          />
                        </div>
                      </div>
                      

                      <div class="flex items-center justify-between">
                        <div class="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="remember-me"
                            class="ml-2 block text-sm text-gray-900"
                          >
                            Remember me
                          </label>
                        </div>

                        <div class="text-sm">
                          <a
                            href="#"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Forgot your password?
                          </a>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          class="group relative flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
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

export default UserWorkR;
