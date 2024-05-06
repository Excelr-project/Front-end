import React from "react";
import { Route, Routes } from "react-router-dom";
import Adminlogin from "../../pages/Adminlogin";
import Home from "../../pages/Home";
import Landingpage from "../../pages/Landingpage";
import Login from "../../pages/Login";
import Register from "../../pages/register";
import UserCarPage from "../../pages/userCarPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeroSlider from "../UI/HeroSlider";

const Layout = () => {
  return (
    <Routes>

      <Route
        path="/home"
        element={
          <>
            <Home />
          </>
        }
      />


      <Route
        path="/"
        element={
          <><Header />
            {/* <Home /> */}
            <HeroSlider />
            <Footer />
          </>
        }
      />


      <Route
        path="/register"
        element={
          <>
            <Header />
            <Register />
            <Footer />
          </>
        }
      />

      <Route
        path="/adminlogin"
        element={
          <>
            <Header />
            <Adminlogin />
            <Footer />
          </>
        }
      />

      <Route
        path="/login"
        element={
          <>
            <Header />
            <Login />
            <Footer />
          </>
        }
      />

      <Route
        path="/search"
        element={
          <>
            <Header />
            <Landingpage />
            <Footer />
          </>
        }
      />


      <Route
        path="/usercarpage"
        element={
          <>
            <Header />
            <UserCarPage />
            <Footer />
          </>
        }
      />


    </Routes>
  );
};

export default Layout;
