import React, { useContext } from "react";
import Header from "../header/header";
import Hero from "../hero/hero";
import { Darkmode } from "../context/dark";
import Wrapp from "../wrapp/wrapp";

function Head() {
  const { dark } = useContext(Darkmode);

  return (
    <div
      className={`${
        dark ? "bg-[#2F607F] bg-img  " : "bg-[#EDF8FF] bg-imgLi"
      } bg-cover px-[100px] bg-no-repeat `}
    >
      <Header />
      <Hero />
    </div>
  );
}

export default Head;
