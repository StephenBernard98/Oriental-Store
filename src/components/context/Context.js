import { createContext, useContext, useState } from "react";

export const context = createContext();

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState(null)

  const logIn = (user) => {
    setUser(user.username);
    setUserImage(user.image)
  };

  const logOut = () => {
    setUser(null);
    setUserImage(null)
  };

  return (
    <context.Provider value={{ user, logIn, logOut, userImage }}>
      {children}
    </context.Provider>
  );
};


export const useAuth = () => {
    return useContext(context)
}
