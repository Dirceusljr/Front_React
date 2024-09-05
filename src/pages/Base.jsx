import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Base = () => {
  return (
    <section className="bg-lightGray h-screen ">
      <Header />
      <NavBar />
        <Outlet />
      <Footer />
    </section>
  );
};

export default Base;
