import React, { useContext } from "react";

import { Darkmode } from "../context/dark";
// images
import group from "../../assets/images/group.png";
import boy from "../../assets/images/boy.png";
function Hero() {
  const { dark } = useContext(Darkmode);
  // console.log(dark);
  return (
    <div className="mt-2">
      <ul className="flex">
        <li className="mt-10">
          <h1
            className={`${!dark && "text-[#007ad4]"} ${
              dark && "text-[#f4f4f4]"
            } text-[60px] font-[700] w-[663px] after:content-['Sizni ko'rib turganimizdan juda ham xursandmiz!']...`}
          >
            Xalqaro darajadagi IT companiyaga xush kelibsizlar
          </h1>

          <p className="text-[#aeabab]  text-[25px] w-[300px]">
            Sizni ko’rib turganimizdan juda ham xursandmiz!
          </p>
        </li>
        <li>
          <img className="h-[700px] translate-y-[-100px]" src={boy} alt="" />
        </li>
        <li>
          <img
            className=" translate-x-[-40px] translate-y-[20px]"
            src={group}
            alt=""
          />
        </li>
      </ul>
    </div>
  );
}

export default Hero;
