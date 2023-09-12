import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/Context";

import Typed from "react-typed";
import { Link, useNavigate } from "react-router-dom";

import { userData } from "../body/userData";
import Modal from "../modal/Modal";

const Login = () => {
  const [userFocus, setUserFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [fetchedUsers, setFetchedUsers] = useState(userData);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const userRef = useRef();
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bioData = fetchedUsers.find((username) => {
      return username.email === user || username.image === user;
    });
    if (bioData) {
      auth.logIn(bioData);
      navigate("/");
    } else {
      setOpenModal(true);
      navigate("/login");
    }
    if (user === "") {
      setErrMsg("Email Required");
    } else {
      setErrMsg("");
    }
    if (password === "") {
      setPasswordValue("Password Required");
    }
  };

  return (
    <div>
      <div className="w-full h-screen bg-black z-10 pt-20">
        {openModal ? (
          <Modal isOpen={openModal}>
            <div className="p-4 w-full m-auto relative">
              <h3 className="text-yellow-500 font-extrabold text-center p-2 mb-4 text-3xl">
                User not found
              </h3>
              <p className="font-bold text-yellow-500 text-xl md:text-2xl mb-28 sm:mb-48 md:mb-44 lg:mb-36">
                Please click on the sign up button to create an account or
                cancel to try again
              </p>
              <div className="absolute bottom-0 right-0 m-4 font-semibold">
                <button
                  className=" mr-3 shadow-xl text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black hover:ring-black px-5 py-2 ring-2 ring-yellow-500 ring-opacity-50"
                  onClick={() => setOpenModal(!openModal)}
                >
                  Cancel
                </button>
                <Link to="/register">
                  <button className="px-5 py-2 shadow-xl bg-yellow-500 text-black rounded-lg hover:bg-black hover:text-yellow-500 hover:ring-2 hover:ring-yellow-500 ring-opacity-50">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </Modal>
        ) : (
          <div className="sm:max-w-[650px] max-w-[370px] m-auto">
            <h1 className="font-extrabold text-xl sm:text-2xl  md:text-3xl px-6 pt-4 text-yellow-500 text-center font-blackOps">
              <Typed
                strings={["Please Login to access your account!"]}
                typeSpeed={40}
                onComplete={(self) => self.cursor.remove()}
              />
            </h1>
            <form
              onSubmit={handleSubmit}
              className=" sm:max-w-[450px] m-auto mt-10 py-4 px-2 sm:px-4 md:px-6 lg:px-8 bg-transparent text-white"
            >
              <label
                htmlFor="email"
                className="font-bold inline-block pb-2 text-2xl"
              >
                Email:
              </label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                value={user}
                placeholder="&#128394; input email"
                ref={userRef}
                required
                onChange={(e) => setUser(e.target.value)}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                className="w-full rounded placeholder-gray-700 text-black font-semibold md:font-bold text-lg p-2 bg-[#f7e9e9] mb-6"
              />{" "}
              <br />
              <label
                htmlFor="password"
                className="font-bold inline-block pb-2 text-2xl"
              >
                Password:
              </label>{" "}
              <br />
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="&#128065; input password"
                onChange={(e) => setPassword(e.target.value)}
                required
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                className="w-full rounded placeholder-gray-700 text-black font-semibold md:font-bold text-lg p-2 bg-[#f7e9e9] mb-6"
              />
              <p className="text-red-600">{errMsg}</p>
              <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col h-full mt-5">
                <div className=" flex lg:items-center lg:justify-between ">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="outline-none rounded-2xl"
                  />{" "}
                  <span className=" ml-0.5 ">Forgot password?</span>
                </div>
                <span className="mt-2 lg:mt-0">
                  Don't have an account?{" "}
                  <Link to="/register">
                    <span className="underline">sign up</span>{" "}
                  </Link>
                </span>{" "}
              </div>
              <button
                onClick={handleSubmit}
                className="bg-yellow-600 hover:bg-yellow-700 cursor-pointer rounded w-full mt-4 font-bold text-lg p-2"
                disabled={!user || !password}
              >
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
