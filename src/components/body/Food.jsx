import { useRef, useState, useEffect } from "react";
import { data } from "../body/data";
import ScrollTop from "./ScrollTop";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../components/redux/features/cart/basketSlice";

const Food = () => {
  const [foods, setFoods] = useState(data);
  const textRef = useRef();
  const dispatch = useDispatch();
  const addItem = (item) => {
    dispatch(addItemToCart(item));
  };

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (minPrice, maxPrice) => {
    setFoods(
      data.filter((item) => {
        const itemPrice = parseInt(item.price.replace("₦", ""), 10);
        return itemPrice >= minPrice && itemPrice <= maxPrice;
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1250px] m-auto px-4 py-12 overflow-x-hidden">
      <h1 className="text-yellow-700 font-bold text-4xl text-center mb-6">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap md:mb-4 lg:w-[500px]">
            <button
              onClick={() => setFoods(data)}
              className="bg-black text-yellow-500 hover:bg-black/90 lg:mr-4 mt-4 px-8 py-2 mr-2 font-semibold"
            >
              All
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="bg-black text-yellow-500 hover:bg-black/90 lg:mr-4 mt-4 px-8 py-2 mr-2 font-semibold"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("rice")}
              className="bg-black text-yellow-500 hover:bg-black/90 lg:mr-4 mt-4 px-8 py-2 mr-2 font-semibold"
            >
              Rice
            </button>
            <button
              onClick={() => filterType("desert")}
              className="bg-black text-yellow-500 hover:bg-black/90 lg:mr-4 mt-4 px-8 py-2 mr-2 font-semibold"
            >
              Desert
            </button>
            <button
              onClick={() => filterType("salad")}
              className="bg-black text-yellow-500 hover:bg-black/90 lg:mr-4 mt-4 px-8 py-2 mr-2 font-semibold"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("burger")}
              className="bg-black text-yellow-500 hover:bg-black/90 lg:mr-4 mt-4 px-8 py-2 mr-2 font-semibold"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="bg-black text-yellow-500 hover:bg-black/90 lg:mr-4 mt-4 px-8 py-2 mr-2 font-semibold"
            >
              Chicken
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[400px] w-full mb-4 flex-wrap">
            <button
              onClick={() => filterPrice(500, 5000)}
              className="bg-black text-yellow-500 hover:bg-black/90 lg:mr-4 mt-4 px-8 py-2 mr-2 font-semibold"
            >
              &lt;₦5000
            </button>
            <button
              onClick={() => filterPrice(5001, 7000)}
              className="bg-black text-yellow-500 hover:bg-black/90 lg:mr-4 mt-4 px-8 py-2 mr-2 font-semibold"
            >
              &lt;₦7000
            </button>
            <button
              onClick={() => filterPrice(7001, 11000)}
              className="bg-black text-yellow-500 hover:bg-black/90 lg:mr-4 mt-4 px-8 py-2 mr-2 font-semibold"
            >
              &lt;₦11000
            </button>
            <button
              onClick={() => filterPrice(11001, 99000)}
              className="bg-black text-yellow-500 hover:bg-black/90 lg:mr-4 mt-4 px-8 py-2 mr-2 font-semibold"
            >
              ₦11500&gt;
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 pt-4 justify-between">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-t-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[250px] object-cover rounded-t-lg"
            />
            <div className="flex lg:flex-col lg:w-full lg:text-center sm:flex justify-between px-2 py-4">
              <p className={`font-bold lg:mb-3`}>
                {item.name} -- {item.price}
              </p>
              <p>
                <div>
                  <span
                    ref={textRef}
                    onClick={() => addItem(item)}
                    className={`bg-black text-yellow-500 hover:bg-black/90 px-6  py-2 font-semibold  rounded-xl cursor-pointer`}
                  >
                    Buy Now
                  </span>
                </div>
              </p>
            </div>
          </div>
        ))}
      </div>
      <ScrollTop />
    </div>
  );
};

export default Food;
