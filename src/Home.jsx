import React from "react";
import { NavLink } from "react-router-dom";
import web from "./Image/Home.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
