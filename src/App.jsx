import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import FoodDetail from "./pages/FoodDetail";
import Booking from "./pages/Booking";
import OrderHistory from "./pages/OrderHistory";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menus />} />
        <Route path="/menu/:slug" element={<FoodDetail />} />
        <Route path="/booking/:slug" element={<Booking />} />
        <Route path="/tracking-order" element={<OrderHistory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
