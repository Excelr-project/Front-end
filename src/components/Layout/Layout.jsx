import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import AdminActivity from "../../pages/AdminActivity";
import Adminlogin from "../../pages/Adminlogin";
import Blog from "../../pages/Blog";
import BookingDetails from "../../pages/BookingDetails";
import Cars from "../../pages/Cars";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Landingpage from "../../pages/Landingpage";
import Login from "../../pages/Login";
import UserCarPage from "../../pages/UserCarPage";
import Register from "../../pages/register";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Header1 from "../Header/Header1";
import HeroSlider from "../UI/HeroSlider";
import PaymentMethod from "../UI/PaymentMethod";
import ServicesList from "../UI/ServicesList";
import Testimonial from "../UI/Testimonial";

const Layout = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <><Header />
            <HeroSlider />
            <Footer />
          </>
        }
      />

      <Route
        path="/home"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Header />
            <About />
          </>
        }
      />

      <Route
        path="/cars"
        element={
          <>
            {/* <Header1 /> */}
            <Cars />
          </>
        }
      />

      <Route
        path="/blogs"
        element={
          <>
            <Header />
            <Blog />
            {/* <BlogDetails /> */}
          </>
        }
      />

      <Route
        path="/contact"
        element={
          <>
            <Header />
            <Contact />
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
            {/* <Header /> */}
            <Header1 />
            <Landingpage />
            <ServicesList />
            <Testimonial />
            <Footer />
          </>
        }
      />


      <Route
        path="/usercarpage"
        element={
          <>
            <Header1 />
            <UserCarPage />
            <Footer />
          </>
        }
      />


      <Route
        path="/AdminActivity"
        element={
          <>
            <Header />
            <AdminActivity />
          </>
        }
      />

      <Route
        path="/BookingDetails"
        element={
          <>
            <Header1 />
            <BookingDetails />
            <Footer />
          </>
        }
      />

      <Route
        path="/payment"
        element={
          <>
            <Header1 />
            <PaymentMethod />
            <Footer />
          </>
        }
      />


    </Routes>
  );
};

export default Layout;
