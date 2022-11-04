import React from "react";

const TextWithImg = () => {
  return (
    <>
      {/* search */}

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

      {/* textAvatar Card */}
      <div className="w-full h-screen bg-white flex justify-center ">
        <div className="flex  items-center justify-around  w-11/12 bg-white border-solid border-8 border-red-300 rounded-radius mt-8">
          <div class=" ml-14 p-6 max-w-xl rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex ">
              <div class="flex items-center space-x-4 mb-4">
                <img
                  class="w-10 h-10  rounded-full"
                  src="https://cdn.pixabay.com/photo/2022/10/21/21/17/interior-7537974_1280.jpg"
                  alt=""
                />
                <div class="font-medium dark:text-white">
                  <div>Jese Leos</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    Joined in August 2014
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <a href="#">
                <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Bio
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                leo integer nunc tortor. Erat ultrices magna vulputate quam
                molestie velit faucibus. Accumsan lacinia nisl, scelerisque
                mauris et nibh. Netus venenatis, vulputate natoque etiam
                parturient aliquet. Lobortis congue arcu, habitant habitant
                massa ante eleifend. Aliquam ut habitant ut id amet venenatis.
                In amet, adipiscing odio metus. Pharetra enim enim et aliquam
                laoreet. Pharetra hendrerit at in posuere mauris. Nulla sit
                neque ultrices enim sit consequat bibendum amet, lorem. Euismod
                ornare adipiscing luctus sit. Vitae platea in non et. Amet,
                consectetur elementum cum odio. Odio dignissim quis ut sed
                scelerisque vitae venenatis.
              </p>
            </div>
          </div>
          {/* Order plan carrd */}
          <div>
            <div class="w-2/4 rounded-lg shadow-md overflow-hidden mb-4 ml-44 b-2 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6 ">
                <div class="flex justify-center">
                  <span class="inline-flex px-4 py-1 dark:text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                    Package
                  </span>
                </div>
                <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold dark:text-white">
                  <span class="ml-1 mr-3 text-xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                    Starting At
                  </span>
                  $10
                  <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
              </div>
              <div class="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6 ">
                <p>Order Details</p>
                <p className="text-gray-600 mt-10">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti, eveniet adipisicing elit. Deleniti,
                  evenietadipisicing elit. Deleniti, evenietadipisicing elit.
                  Deleniti, eveniet autem labore odio, rerum tenetur, ipsum
                  voluptatem neque nostrum illum impedit at nisi quasi?
                </p>
                <div class="mt-6  flex items-center justify-center">
                  <button className=" bg-red-500 text-white font-bold py-2 px-4 border-b-4 rounded-full">
                    Order Now
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

export default TextWithImg;
