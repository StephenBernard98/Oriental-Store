import React from "react";
import { categories } from "./data";

const Category = () => {
  return (
    // This page is for the food icons at the end of all the foods (Fast food, Restaurant awards. etc)
    <div className="max-w-[1250px] m-auto px-4 py-12">
      <h1 className="text-yellow-500 font-bold text-center text-2xl">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl ">{item.name}</h2>
            <img className="w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
