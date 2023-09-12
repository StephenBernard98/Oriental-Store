import React, { useState, useEffect } from 'react'
import {computers} from "./computerData"
import Layout from '../../components/home/Layout';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../components/redux/features/cart/basketSlice";
import { ToastContainer, toast } from "react-toastify";
import ScrollTop from '../../components/body/ScrollTop';

const Computer = () => {
  const [getComputer, setGetComputer] = useState(computers)
  const dispatch = useDispatch();
  const addItem = (item) => {
    dispatch(addItemToCart(item), toast.success("Added to Cart!"));
  };

   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  
  return (
    <div>
      <Layout>
        <div className="max-w-[1250px] m-auto mt-[5rem]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
            {getComputer.map((item) => (
              <div
                key={item.id}
                className="mx-1 md:mx-4 my-5 border-2 border-gray-200 rounded-xl px-3 py-3 flex  flex-col justify-between items-center"
              >
                <div className="">
                  <Link to="/computer">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-36 lg:w-64"
                    />
                  </Link>
                </div>
                <p className="font-semibold lg:text-xl">{item.name}</p>
                <p className="font-semibold lg:text-xl">{item.price}</p>
                <div>
                  <button
                    onClick={() => addItem(item)}
                    className="bg-black text-yellow-500 hover:bg-black/90 rounded px-3 py-2 md:px-6 md:py-3 lg:px-7 mt-4 md:font-bold lg:text-lg"
                  >
                    Order Now
                  </button>
                  <ToastContainer
                    className="hidden md:block"
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </div>
              </div>
            ))}
          </div>
          <ScrollTop />
        </div>
      </Layout>
    </div>
  );
}

export default Computer
