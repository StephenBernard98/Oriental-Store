import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1250px]  p-4 py-10 mx-auto grid md:grid-cols-3 gap-6">
      <div className="rounded-xl cursor-pointer relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="text-2xl font-bold px-2 pt-4 ">Spaghetti Prawns</p>
          <p className="px-2 pt-2 text-xl md:text-base md:pt-0  lg:text-xl w-1/2 sm:w-full flex-wrap md:w-full lg:w-1/2  font-semibold ">
            A taste of seafood with lovely spaghetti
          </p>
        </div>
        <img
          className="rounded-xl max-h-[300px] md:max-h-[350px] object-cover w-full"
          src="https://media.istockphoto.com/id/1058027626/photo/spicy-spaghetti-with-shrimps-in-tomato-sauce-close-up-horizontal-top-view-from-above.jpg?b=1&s=612x612&w=0&k=20&c=UoxMEjhVdwGM309OXFygK54ufMNls-nBZRrrJC6tVIg="
          alt="spaghetti_prawns"
        />
      </div>
      <div className="rounded-xl cursor-pointer relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="text-2xl font-bold px-2 pt-4 ">Morning Boost</p>
          <p className="px-2 pt-2 text-xl md:text-base md:pt-0  lg:text-xl w-1/2 sm:w-full flex-wrap md:w-full lg:w-1/2  font-semibold ">
            A combo of veg and steak to get your day ready
          </p>
        </div>
        <img
          className="rounded-xl max-h-[300px] md:max-h-[350px] object-cover w-full"
          src="https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="spaghetti_prawns"
        />
      </div>
      <div className="rounded-xl cursor-pointer relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="text-2xl font-bold px-2 pt-4 ">Classic Beef Burger</p>
          <p className="px-2 pt-2 text-xl md:text-base md:pt-0  lg:text-xl w-1/2 sm:w-full flex-wrap md:w-full lg:w-1/2  font-semibold ">
            Classically made tasty for you
          </p>
        </div>
        <img
          className="rounded-xl max-h-[300px] md:max-h-[350px] object-cover w-full"
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="spaghetti_prawns"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
