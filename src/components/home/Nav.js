import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdShoppingBasket } from "react-icons/md";
import { BiLogOut, BiSolidGroup, BiUserPlus } from "react-icons/bi";
import { useAuth } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeAllItemsFromCart } from "../redux/features/cart/basketSlice";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [show, handleShow] = useState(false);
  const auth = useAuth();
  const cartItems = useSelector((state) => state.basket.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 25) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const logout = () => {
    auth.logOut();
    setNav(false);
    dispatch(removeAllItemsFromCart());
  };

  const handleClick = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector(".terms");
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
    setNav(false);
  };

  return (
    <div className="max-w-[1250px] mx-auto top_nav">
      <div
        className="flex justify-between max-w-[1250px] mx-auto items-center p-4 z-10 transition-all duration-500 cursor-pointer
       bg-yellow-500 fixed w-full top-0 rounded-br-xl rounded-bl-xl"
      >
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
          <Link to="/">
            <h1 className="text-xl  sm:text-2xl font-extrabold lg:text-3xl text-[#272727] px-2 cursor-pointer flex ml-2 sm:ml-0">
              ORIENTAL<span className="font-bold"> &nbsp;STORE</span>
            </h1>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <Link to="/cart">
            <div className="flex flex-row items-center mr-3">
              <MdShoppingBasket size={32} className="mr-1" />
              <span className="text-2xl font-bold">{cartItems.length}</span>
            </div>
          </Link>

          {!auth.user ? (
            <Link to="/login">
              <BiUserPlus size={45} />
            </Link>
          ) : (
            <span className="bg-yellow-500">
              <img
                className={`rounded-full mr-2 p-1 w-12 h-12 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-yellow-500 ${
                  auth.user ? "lg:flex" : "lg:hidden"
                }`}
                src={auth.userImage}
                alt=""
              />
            </span>
          )}
        </div>
      </div>

      {/*Starting  Mobile Menu */}
      {/* This overlays the page to return the menu list */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side Drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500 overflow-y-scroll"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500 overflow-y-scroll"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={25}
          className="absolute rounded-full border border-gray-500 right-4 top-4 cursor-pointer"
        />
        <Link to="/">
          <h2 className="text-2xl p-4 font-extrabold text-[#272727]">
            ORIENTAL <span className="font-bold cursor-pointer">STORE</span>
          </h2>
        </Link>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 font-semibold">
            {!auth.user ? (
              <Link to="/login">
                <li
                  className={`text-xl py-4  hover:bg-yellow-600 hover:text-white/80 duration-500 cursor-pointer flex items-center ${
                    auth.user ? "hidden" : "block"
                  }`}
                >
                  <BiUserPlus size={25} className="ml-4 mr-3" /> Login
                </li>
              </Link>
            ) : (
              <li className="flex w-full bg-[#666666] h-full justify-between p-2 items-center">
                <span className="">
                  {" "}
                  <img
                    className="rounded-full mr-2 p-1 w-20 h-16"
                    src={auth.userImage}
                    alt=""
                  />
                </span>
                <span className="text-lg font-bold text-white  p-4 w-full">
                  Hello {auth.user}
                </span>
              </li>
            )}
            <Link to="/">
              <li
                onClick={handleClick}
                className="text-xl cursor-pointer py-4 flex items-center hover:bg-yellow-600 hover:text-white/80 duration-500"
              >
                <BiSolidGroup size={25} className="ml-4 mr-3 " /> About Us
              </li>
            </Link>

            <Link to="/cart">
              <li className="text-xl cursor-pointer py-4 flex items-center hover:bg-yellow-600 hover:text-white/80 duration-500 w-full">
                <BsFillCartFill size={30} className="ml-4 mr-3 " /> Cart{" "}
                <span className="text-end w-full text-2xl pr-4">
                  {cartItems.length}
                </span>
              </li>
            </Link>

            {auth.user && (
              <li
                onClick={logout}
                className={`text-xl py-4  hover:bg-yellow-600 hover:text-white/80 duration-500 cursor-pointer flex items-center ${
                  auth.user ? "block" : "hidden"
                }`}
              >
                <BiLogOut size={25} className="ml-4 mr-3" /> Logout
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
