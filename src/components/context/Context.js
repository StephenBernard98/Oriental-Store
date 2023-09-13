import { createContext, useContext, useEffect, useState } from "react";

export const context = createContext();

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");
    const image = localStorage.getItem("image")

    if (isLoggedIn && username) {
      setUser(username);
    }
     if (image) {
       setUserImage(image);
     }
  }, []);

  const logIn = (userData) => {
    setUser(userData.username);
    setUserImage(userData.image);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("username", userData.username);
    localStorage.setItem("image", userData.image)
  };

  const logOut = () => {
    setUser(null);
    setUserImage(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("image");
  };

  return (
    <context.Provider value={{ user, logIn, logOut, userImage }}>
      {children}
    </context.Provider>
  );
};

export const useAuth = () => {
  return useContext(context);
};
