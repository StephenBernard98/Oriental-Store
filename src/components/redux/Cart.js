import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../home/Layout";
import Protect from "../routes/protected_routes/Protect"
import { BsChevronCompactUp, BsChevronCompactDown } from "react-icons/bs";
import {
  removeItemFromCart,
  addItemToCart,
  decrementItemFromCart,
  removeAllItemsFromCart,
} from "../../components/redux/features/cart/basketSlice";
import Modal from "../modal/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);
  const cartItems = useSelector((state) => state.basket.cart);
  const [refreshCart, setRefreshCart] = useState(false);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace(/[₦,]/g, ""));

    return total + itemPrice * item.quantity;
  }, 0);

  const formatedTotalPrice = totalPrice.toLocaleString();

  const handleDecrement = (item) => {
    dispatch(decrementItemFromCart(item.id));
  };

  const handleCheckOut = () => {
    setOpenModal(false);
    setCheckedOut(false);
    setRefreshCart(true);
    dispatch(removeAllItemsFromCart());
  };

  return (
    <div>
      <Layout>
        <div className="max-w-[1250px] m-auto mt-[5rem] bg-[#dcdcdc] p-4  md:rounded-2xl">
          <div>
            {cartItems.length === 0 ? (
              <div>
                <div className="flex flex-col items-center">
                  <h2 className="font-extrabold text-xl md:text-2xl text-center my-3">
                    Your cart is empty. Please order an item to add to cart
                  </h2>
                  <img
                    className="w-64"
                    src="https://thenounproject.com/api/private/icons/237706/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                    alt=""
                  />
                  <Link to="/">
                    <button className="bg-black text-yellow-500 px-5 py-3 hover:bg-black/90 font-semibold">
                      Back to Store
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <h2>
                {cartItems.length === 1 ? (
                  <h2 className="font-extrabold text-xl md:text-2xl text-center mt-5">
                    Here is your item. Please review and then proceed to
                    checkout
                  </h2>
                ) : (
                  <h2 className="font-extrabold text-xl md:text-2xl text-center mt-5">
                    Here are your items. Please review and then proceed to
                    checkout
                  </h2>
                )}
              </h2>
            )}
            {cartItems.map((item) => (
              <div className="flex  items-center my-10 lg:my-16 md:mx-5">
                <div className="mr-4 md:mr-6 lg:mr-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 md:w-36 lg:w-44 rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-between items-center h-full p-3 md:p-0">
                  <p className="m-2 md:m-3 lg:m-5 font-bold text-xl">
                    <span className="md:mr-2">{item.name}</span>{" "}
                    <span className="hidden md:inline-block">
                      <span className="hidden md:inline">
                        || Quantity - &nbsp;
                      </span>
                    </span>
                    <span className="hidden md:inline">{item.quantity}</span>
                  </p>
                  <p className="m-2 md:m-3 lg:m-5 font-bold text-xl">
                    {item.price}
                  </p>
                  <div>
                    <button
                      onClick={() =>
                        dispatch(
                          removeItemFromCart(item.id),
                          toast.success("Removed from Cart!")
                        )
                      }
                      className="bg-black hover:bg-black/90 text-yellow-500 px-3 py-1  lg:px-5 lg:py-3 rounded font-semibold"
                    >
                      Remove from Cart
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
                <div className="md:flex flex-col md:items-start justify-end  hidden ">
                  <BsChevronCompactUp
                    onClick={() => dispatch(addItemToCart(item))}
                    size={35}
                    className=" lg:text-4xl cursor-pointer mb-10 md:mb-14 lg:mb-24"
                  />
                  <BsChevronCompactDown
                    onClick={() => handleDecrement(item)}
                    size={35}
                    className="lg:text-4xl cursor-pointer "
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            className={`text-center mt-5 ${cartItems.length === 0 && "hidden"}`}
          >
            <p className="font-bold text-xl">
              Total Price: ₦{formatedTotalPrice}
            </p>

            <button
              onClick={() => setOpenModal(true)}
              className="bg-black text-yellow-500 font-semibold md:text-lg lg:text-xl px-4 py-2 my-3 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
          {openModal && (
            <Modal>
              <div className="bg-[#dcdcdc] rounded-lg w-full max-w-[900px] m-auto p-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
                  Cart info:
                </h2>
                <div className="my-4">
                  <p className="text-lg md:text-xl font-semibold mb-3">
                    {cartItems.length === 1 ? (
                      <p>You have {cartItems.length} item in your cart</p>
                    ) : (
                      <p>You have {cartItems.length} items in your cart</p>
                    )}
                  </p>
                  <p className="text-lg md:text-xl font-semibold">
                    Total price: ₦{formatedTotalPrice}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Protect>
                    {" "}
                    <button
                      onClick={() => setCheckedOut(true)}
                      className="bg-black text-yellow-500 mr-3 font-semibold md:text-lg lg:text-xl px-4 py-2 my-3 rounded"
                    >
                     Order Now{" "}
                    </button>
                  </Protect>
                  <button
                    onClick={() => setOpenModal(false)}
                    className="bg-black text-yellow-500 font-semibold md:text-lg lg:text-xl px-4 py-2 my-3 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>
          )}
          {checkedOut && (
            <Modal>
              <div className="bg-[#dcdcdc] rounded-lg w-full max-w-[900px] m-auto p-4">
                <div className="">
                  <h2 className="text-xl mb-3 md:text-2xl lg:text-3xl font-bold text-center">
                    Thanks for your patronage!!
                  </h2>
                  <p className="text-lg md:text-xl font-semibold text-center">
                    {cartItems.length === 1 ? (
                      <p>
                        You would be contacted as soon as your item is ready for
                        delivery
                      </p>
                    ) : (
                      <p>
                        You would be contacted as soon as your items are ready
                        for delivery
                      </p>
                    )}
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleCheckOut}
                    className="bg-black text-yellow-500 font-semibold md:text-lg lg:text-xl px-4 py-2 my-3 rounded"
                  >
                    Okay
                  </button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Cart;
