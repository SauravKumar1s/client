import React from "react";

const AttachedFile = () => {
  return (
    <>
      <div className="w-full h-screen bg-backClrLogin flex justify-center">
        <div className="w-3/4 bg-white border-solid border-8 border-red-300 rounded-radius mt-24">
          <div className="flex items-center justify-center gap-10 mt-10">
            <button className=" bg-gray-500 text-white font-bold py-2 px-4 border-b-4   rounded-full">
              User Work
            </button>
            <button className=" bg-red-500 text-white font-bold py-2 px-4 border-b-4 rounded-full">
              User Pro
            </button>
          </div>
          <form>
            <div className=" rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
              <div className=" flex justify-between mb-6">
                <div className="md:w-2/4 px-3 mb-6 md:mb-0">
                  <input
                    className="w-2/4   text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    id="company"
                    type="text"
                    placeholder="Title"
                  />
                </div>

                <div className="md:w-2/4 px-3 mb-6 md:mb-0">
                  <input
                    className="w-2/4 ml-52 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    id="company"
                    type="text"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className=" flex justify-between mb-6">
                <textarea
                  className="w-3/5 h-3/4 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="company"
                  type="text"
                  placeholder="Descritipion"
                />

                <div className="md:w-2/4 px-3 mb-6 md:mb-0">
                  <input
                    className="w-2/4 ml-40  text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    id="company"
                    type="date"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="max-w-xl">
                <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-600">
                      Drop files to Attach, or
                      <span className="text-blue-600 underline">browse</span>
                    </span>
                  </span>
                  <input type="file" name="file_upload" className="hidden" />
                </label>
              </div>
            </div>
          </form>
          <div className="flex items-center justify-center gap-10 mt-10">
            <button className=" bg-gray-500 text-white font-bold py-2 px-4 border-b-4   rounded-full">
              User Work
            </button>
            <button className=" bg-red-500 text-white font-bold py-2 px-4 border-b-4 rounded-full">
              User Pro
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttachedFile;
