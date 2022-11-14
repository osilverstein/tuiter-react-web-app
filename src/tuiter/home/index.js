import React from "react";
import { useSelector } from "react-redux";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  const tuits = useSelector(state => state.tuits);
  return (
    //"Home" at the top of the page
    <div>
      <h1>Home</h1>
      <WhatsHappening/>
      <TuitsList />
    </div>

  );
};

export default HomeComponent;