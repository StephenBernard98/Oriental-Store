import { useState, useEffect } from "react";
import { useAuth } from "../context/Context";

import Typed from "react-typed";
import { Link, useNavigate } from "react-router-dom";

import { userData } from "../body/userData";
import Modal from "../modal/Modal";

const Register = () => {
  //   const [pwdFocus, setPwdFocus] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = userData.some((existingUser) => {
      return existingUser.email === user;
    });
    if (userExists) {
      setOpenModal(true);
    } else {
      const newUser = {
        id: Math.random().toString(36).substring(7),
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: user,
        balance: "0",
        image: imageFile
          ? URL.createObjectURL(imageFile)
          : "https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
      };
      userData.push(newUser);
      auth.logIn(newUser);
      navigate("/");
    }
  };

  const openedModal = () => {
    setOpenModal(!openModal);
    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setMatchPassword("");
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="w-full max-h-full md:h-screen pb-32 bg-black z-10 pt-20">
        {openModal ? (
          <Modal isOpen={openModal}>
            <div className="p-4 w-full m-auto relative">
              <h3 className="text-yellow-500 font-extrabold text-center p-2 mb-4 text-3xl">
                Account already exist
              </h3>
              <p className="font-bold text-yellow-500 text-xl md:text-2xl mb-28 sm:mb-48 md:mb-44 lg:mb-36">
                Please click on the sign in button to go to login page and sign
                into your account or cancel to try again
              </p>
              <div className="absolute bottom-0 right-0 m-4 font-semibold">
                <button
                  className=" mr-3 shadow-xl text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black hover:ring-black px-5 py-2 ring-2 ring-yellow-500 ring-opacity-50"
                  onClick={openedModal}
                >
                  Cancel
                </button>
                <Link to="/login">
                  <button className="px-5 py-2 shadow-xl bg-yellow-500 text-black rounded-lg hover:bg-black hover:text-yellow-500 hover:ring-2 hover:ring-yellow-500 ring-opacity-50">
                    Sign in
                  </button>
                </Link>
              </div>
            </div>
          </Modal>
        ) : (
          <div className="max-w-[350px] md:max-w-[650px] lg:max-w-[1000px] m-auto ">
            <h1 className="font-extrabold text-xl sm:text-2xl  md:text-3xl px-6 pt-4 text-yellow-500 text-center font-blackOps mb-8">
              <Typed
                strings={["Signup to create an Oriental account!"]}
                typeSpeed={40}
                onComplete={(self) => self.cursor.remove()}
              />
            </h1>
            <form
              onSubmit={handleSubmit}
              className=" w-full text-white"
              //   sm:max-w-[450px] m-auto mt-10 py-4 px-2 sm:px-4 md:px-6 lg:px-8 bg-transparent
            >
              <div>
                <div className="md:flex">
                  <label
                    htmlFor="firstname"
                    className="font-bold inline-block pb-2 text-2xl mr-4"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={firstName}
                    placeholder="&#128394; first name"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded placeholder-gray-700 mr-4 text-black font-semibold md:font-bold text-lg p-2 bg-[#f7e9e9] mb-6"
                  />{" "}
                  <label
                    htmlFor="lastname"
                    className="font-bold inline-block pb-2 text-2xl mr-4"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={lastName}
                    placeholder="&#128394; last name"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded placeholder-gray-700 mr-4 text-black font-semibold md:font-bold text-lg p-2 bg-[#f7e9e9] mb-6"
                  />{" "}
                </div>
                <div className="md:flex md:py-8">
                  <label
                    htmlFor="email"
                    className="font-bold inline-block pb-2 text-2xl mr-4"
                  >
                    Email:
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="&#128394; input email"
                    // ref={userRef}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded placeholder-gray-700 mr-4 text-black font-semibold md:font-bold text-lg p-2 bg-[#f7e9e9] mb-6"
                  />{" "}
                  <br />
                  <label
                    htmlFor="username"
                    className="font-bold inline-block pb-2 text-2xl mr-4"
                  >
                    Username:
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    placeholder="&#128394; username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full rounded placeholder-gray-700 text-black font-semibold md:font-bold text-lg p-2 bg-[#f7e9e9] mb-6"
                  />
                </div>
                <div className="md:flex md:py-8">
                  <label
                    htmlFor="password"
                    className="font-bold inline-block pb-2 text-2xl mr-4"
                  >
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="&#128065; input password"
                    // ref={userRef}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded placeholder-gray-700 mr-4 text-black font-semibold md:font-bold text-lg p-2 bg-[#f7e9e9] mb-6"
                  />{" "}
                  <br />
                  <label
                    htmlFor="match-password"
                    className="font-bold inline-block pb-2 text-2xl mr-4"
                  >
                    Confirm Password:
                  </label>{" "}
                  <br />
                  <input
                    type="password"
                    name="match-password"
                    id="password"
                    // value={password}
                    placeholder="&#128065; confirm password"
                    onChange={(e) => setMatchPassword(e.target.value)}
                    required
                    className="w-full rounded placeholder-gray-700 text-black font-semibold md:font-bold text-lg p-2 bg-[#f7e9e9] mb-6"
                  />
                </div>
              </div>

              <p className="text-red-600">{errMsg}</p>
              <div className="flex lg:justify-between lg:flex-row lg:items-center flex-col">
                <Link to="/login">
                  <p className="text-white text-xl pb-4 cursor-pointer underline lg:text-2xl font-semibold">
                    Sign in
                  </p>
                </Link>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="bg-yellow-600 hover:bg-yellow-700 cursor-pointer rounded w-full mt-4 font-bold text-lg p-2"
                // disabled={!user || !password}
              >
                Sign up
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
