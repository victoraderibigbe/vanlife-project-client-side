import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <Header
        navlinks={[
          { title: "Host", path: "/host" },
          { title: "About", path: "/about" },
          { title: "Vans", path: "/vans" },
        ]}
      />
      <div className="p-10">
        <h2>Sorry, the page you were looking for was not found.</h2>
        <button className="w-full h-12 mt-16 text-white bg-black rounded-lg hover:opacity-80">
          <Link to="/">Return to home</Link>
        </button>
      </div>
      <Footer absolute={true} />
    </>
  );
};

export default Error404;
