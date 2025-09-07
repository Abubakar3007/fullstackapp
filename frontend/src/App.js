import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import Header from "./components/header/Header";
import MyProfile from "./pages/MyProfile";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Details from "./pages/Details";
import SellCar from "./pages/SellCar";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register/' element={<Register />} />
        <Route path='/login/' element={<Login />} />
        <Route path='/forget-password/' element={<ForgetPassword />} />
        <Route path='/listing/' element={<Listing />} />
        <Route path='/details/' element={<Details />} />
        <Route element={<DashboardLayout />}>
          <Route path='/sell-car/' element={<SellCar />} />
          <Route path='/my-profile/' element={<MyProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
