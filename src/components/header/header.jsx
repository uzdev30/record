import React, { useContext } from "react";
import { Darkmode } from "../context/dark";
//images
import logo from "../../assets/images/logo.svg";
import darkLi from "../.././assets/images/dark.svg";

function Header() {
  const { dark, darkFn } = useContext(Darkmode);

  return (
    <div className="pt-2">
      <ul className="flex justify-between">
        <li className="flex w-[210px] max-[376px]:w-[140px] justify-between">
          <img
            className="w-[100px] h-[85px] max-[376px]:w-[52px]"
            src={logo}
            alt="img"
          />
          <h2 className="text-[#0079d0] max-[376px]:pt-6   pt-4 max-[376px]:text-[25px]  font-bold text-[32px]">
            Record
          </h2>
        </li>
        <li
          className={`${
            dark ? "text-white" : "text-black"
          }  text-[22px] max-[376px]:hidden pt-5 ml-20  font-[600] flex justify-between w-[500px]`}
        >
          <a className=" hover:opacity-[0.6] cursor-pointer" href="#">
            Bosh sahifa
          </a>

          <a className="hover:!opacity-[0.6] cursor-pointer" href="#">
            Kurslar
          </a>

          <a className=" hover:!opacity-[0.6] cursor-pointer" href="#">
            Bloglar
          </a>
          <a className=" hover:!opacity-[0.6] cursor-pointer" href="#">
            Bog'lanish
          </a>
        </li>
        <li className="max-[376px]:w-[100px]  pt-6 h-[50px] flex ">
          <button>
            <img
              onClick={darkFn}
              className=" max-[376px]:w-[39px]    max-[376px]:mr-2"
              src={darkLi}
              alt=""
            />
          </button>
          <i className="fas hidden ml-3   max-[376px]:inline fa-bars w-[29px] text-[35px] pt-1 h-[35px]"></i>
        </li>
      </ul>
    </div>
  );
}

export default Header;
