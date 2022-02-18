import React from "react";
import Event from "../components/Event";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <Event />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
