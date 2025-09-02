import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import Header from "./components/header/Header";
import MyProfile from "./pages/MyProfile";
import Home from "./pages/Home";
import Listing from "./pages/Listing";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register/' element={<Register />} />
        <Route path='/login/' element={<Login />} />
        <Route path='/forget-password/' element={<ForgetPassword />} />
        <Route path='/my-profile/' element={<MyProfile />} />
        <Route path='/listing/' element={<Listing />} />
      </Routes>
    </Router>
  );
}

export default App;
