import React from "react";

const CostList = () => {
  return (<>
    <div className="flex items-center justify-center gap-10 pt-10 bg-backClrLogin">
            <button className=" bg-gray-500 text-white font-bold py-2 px-4 border-b-4   rounded-full">
              User Work
            </button>
            <button className=" bg-red-500 text-white font-bold py-2 px-4 border-b-4 rounded-full">
              User Pro
            </button>
          </div>
    <div className="w-full h-screen bg-backClrLogin flex justify-center">
         
      <div className="w-3/4 bg-white border-solid border-8 border-red-300 rounded-radius mt-24 ">
        <h1 className="text-center text-3xl ">Cockpit</h1>
        <div class="overflow-x-auto relative ">
          <table class="w-full text-sm text-left text-gray-500 mt-24 dark:text-gray-400 ">
            <thead class="text-xs text-gray-700 uppercase   dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Product name
                </th>
                <th scope="col" class="py-3 px-6">
                  Colors
                </th>
                <th scope="col" class="py-3 px-6">
                  Category
                </th>
                <th scope="col" class="py-3 px-6">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17 Apple MacBook Pro 17 Apple MacBook Pro
                  17"
                </th>
                <td class="py-4 px-6">Status</td>
                <td class="py-4 px-6">Cost</td>
                <td class="py-4 px-6">$2999</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro Microsoft Surface Pro Microsoft Surface
                  Pro
                </th>
                <td class="py-4 px-6">White</td>
                <td class="py-4 px-6">Laptop PC</td>
                <td class="py-4 px-6">$1999</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td class="py-4 px-6">Black</td>
                <td class="py-4 px-6">Accessories</td>
                <td class="py-4 px-6 ">$99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default CostList;
