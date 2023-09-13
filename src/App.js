import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./components/home/Homepage";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import FoodPage from "./components/body/FoodPage";
import Clothes from "./api/clothes/Clothes";
import Electronics from "./api/electronics/Electronics";
import Computer from "./api/computer/Computer";
import Phones from "./api/phones/Phones";
import Footwear from "./api/footwears/Footwear";
import Cart from "./components/redux/Cart";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="foodpage" element={<FoodPage />} />
          <Route path="/cloth" element={<Clothes />} />
          <Route path="/electronic" element={<Electronics />} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/phone" element={<Phones />} />
          <Route path="/footwear" element={<Footwear />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
