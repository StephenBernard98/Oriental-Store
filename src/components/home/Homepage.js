import { useState, useEffect } from "react";
import Layout from "../home/Layout";
import { rated } from "../../api/top_rated/Rated";
import Banner from "./Banner";
import Terms from "../body/Terms";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Context";
import { topCloth } from "../../api/clothes/TopClothes";
import { dish } from "../../api/food";
import ScrollTop from "../body/ScrollTop";

const Homepage = () => {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [topRated, setTopRated] = useState(rated);
  const [topClothes, setTopClothes] = useState(topCloth);
  const [dishes, setDishes] = useState(dish);
  const auth = useAuth();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === 'true') {
      const userData = localStorage.getItem("username");
      setUser(userData);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    const element = document.querySelector(".products");
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Layout>
        <div
          className={`max-w-[1250px] m-auto mt-[5rem] px-1 lg:px-0 overflow-x-hidden ${
            auth.user && "mt-[4.5rem] md:mt-[5.5rem] lg:mt-[6.2rem]"
          }`}
        >
          <div className="bg-[#dcdcdc] relative py-10 px-2 lg:px-16 lg:py-2 rounded-lg lg:rounded-2xl animate-slide">
            <div className="flex justify-between items-center ">
              <div>
                <h1 className="font-extrabold text-2xl md:text-3xl lg:text-6xl flex flex-col justify-center w-full items-start h-full max-h-[500px]">
                  First Timer
                </h1>
                <h1 className="font-extrabold text-4xl md:text-5xl lg:text-8xl text-yellow-500">
                  BONUS!!!
                </h1>
              </div>
              <img
                src="https://cdn.sanity.io/images/ejzo4ho1/production/797f8df56017feb72288e218fd6957ef068d7b44-700x700.webp"
                alt="banner_image"
                className="lg:w-[30rem] md:w-[20rem] w-52"
              />
            </div>
            <button
              onClick={handleClick}
              className="absolute bottom-6 left-0 mb-2 lg:bottom-20 lg:left-16 border-2 hover:border-0 bg-black hover:bg-black/90 hover:py-3 px-5 py-2 lg:px-6 lg:py-3 text-white ml-3"
            >
              Search Store
            </button>
            <p className="absolute bottom-6 right-0 mb-2 mr-3 lg:bottom-10 lg:right-10 lg:mr-10 lg:text-lg text-sm text-gray-700 font-mono">
              Blast you into the lyrics
            </p>
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-center text-3xl md:text-4xl lg:text-5xl md:p-5 lg:p-5 m-5 font-extrabold products">
              Top Rated Products
            </h3>
            <div className="max-w-[1250px] mx-auto lg:grid lg:grid-cols-5 grid grid-cols-2 md:grid md:grid-cols-3">
              {topRated.map((item) => (
                <div key={item.id} className="flex ">
                  <div className="borde-2 py-5 px-1 md:p-5  bg-[#dcdcdc] rounded-xl m-4 transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col items-center">
                    <Link to={`/${item.category}`}>
                      <img src={item.image} alt={item.name} className="w-40" />
                      <div className="mt-3">
                        <p className="text-base text-center font-semibold py-1 md:py-2 lg:py3 ">
                          {item.name}
                        </p>
                        <p className="text-base text-center font-semibold ">
                          {item.price}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10">
            <div className="bg-gradient-to-r from-yellow-900 to-yellow-700 p-4 mt-20 flex justify-between items-center text-white max-w-[1250px] m-auto">
              <p className="font-bold text-xl">Here's what's cooking</p>
              <Link to="/foodpage">
                <div className="flex items-center">
                  <px className="font-bold text-base ">SEE ALL</px>
                  <p className="font-bold ml-1"> &gt;</p>
                </div>
              </Link>
            </div>
            <div className="flex flex-wrap bg-[#e2d9d9] text-black max-w-[1250px] m-auto">
              {dishes.map((item) => (
                <div className="max-w-[1250px] m-auto p-5" key={item.id}>
                  <Link to="/foodpage">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-32 h-20 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-black font-semibold mt-2 text-center">
                        {item.name}
                      </p>
                      <p className="text-black font-semibold mt-2 text-center">
                        {item.price}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Banner />
          <div>
            <div className="bg-gradient-to-r from-black/80 to-black/70 p-4 mt-20 flex justify-between items-center text-white max-w-[1250px] m-auto">
              <p className="font-bold text-xl">Wears Best Deals</p>
              <Link to="/cloth">
                <div className="flex items-center">
                  <px className="font-bold text-base ">SEE ALL</px>
                  <p className="font-bold ml-1"> &gt;</p>
                </div>
              </Link>
            </div>
            <div className="flex flex-wrap bg-[#e2d9d9] text-black max-w-[1250px] m-auto">
              {topClothes.map((item) => (
                <div className="max-w-[1250px] m-auto p-5" key={item.id}>
                  <Link to={`/${item.category}`}>
                    <div>
                      <img src={item.image} alt={item.name} className="w-32" />
                    </div>
                    <div>
                      <p className="text-black font-semibold mt-2">
                        {item.name}
                      </p>
                      <p className="text-black font-semibold mt-2 text-center">
                        {item.price}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[1250px] m-auto mt-16">
            <div className="flex flex-col items-center">
              <h3 className="text-center font-extrabold text-2xl mb-3">
                Never Stay Hungry
              </h3>
              <h4 className="text-center text-xl mb-5">
                Order from the assorted menu in the Oriental Foods Store. Tasty
                and yummy making you yearn for more
              </h4>
              <Link to="/foodpage">
                <button className="bg-black hover:bg-black/90 text-yellow-500 font-semibold rounded-xl px-4 py-3">
                  Search Food
                </button>
              </Link>
            </div>
          </div>
          <Terms />
          <ScrollTop />
        </div>
      </Layout>
    </div>
  );
};

export default Homepage;
