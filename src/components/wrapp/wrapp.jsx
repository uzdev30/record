import React, { useContext } from "react";
import { Darkmode } from "../context/dark";
//images
import online from "../../assets/images/online.png";
import master from "../../assets/images/master.png";
import result from "../../assets/images/result.png";

function Wrapp() {
  const { dark } = useContext(Darkmode);
  return (
    <div
      className={`${
        dark ? "bg-[#282525]" : "bg-white"
      } px-20 py-12 w-[1300px] h-[192px] z-[2] absolute ml-[110px]   translate-y-[-99px] rounded mx-auto shadow-lg`}
    >
      <ul className="flex justify-between ">
        <li className="flex  w-[190px] justify-between">
          <div className="mt-3">
            <img width={"72px"} src={online} alt="rasm yuq" />
          </div>
          <div className="">
            <p className={`${dark && "text-white"} text-[36px] font-[500]`}>
              100+
            </p>
            <span className="text-[#086CF9] text-[16px]">Online Kurslar</span>
          </div>
        </li>
        <li className="flex  w-[190px] justify-between">
          <div className="mt-3">
            <img width={"72px"} src={master} alt="rasm yuq" />
          </div>
          <div className="">
            <p className={`${dark && "text-white"} text-[36px] font-[500]`}>
              30+
            </p>
            <span className="text-[#086CF9] text-[16px]">Mutaxasislar </span>
          </div>
        </li>
        <li className="flex  w-[250px] justify-between">
          <div className="mt-3">
            <img width={"72px"} src={result} alt="rasm yuq" />
          </div>
          <div className="">
            <p className={`${dark && "text-white"} text-[36px] font-[500]`}>
              120+
            </p>
            <span className="text-[#086CF9] text-[16px]">
              Muvafaqqiyatli natijalar{" "}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Wrapp;
