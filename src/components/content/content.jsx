import React, { useContext } from "react";
import { Darkmode } from "../context/dark";
import { MotionVa } from "motion";
import { motion } from "framer-motion";
import { fadeIn } from "../core/fade";

function Content() {
  const { dark } = useContext(Darkmode);
  return (
    <div
      className={`${
        dark ? "bg-[#282525] text-white" : "bg-white text-black"
      } pt-[160px] px-[100px]  `}
    >
      <ul className="flex justify-between ">
        <li className=" w-[500px]">
          <motion.div
            variants={fadeIn("left", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className={` text-[48px]  font-bold w[500px]`}
          >
            Yorqin kelajakni yaratadigan kursingizni toping
          </motion.div>
          <motion.div
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="my-5"
          >
            Surxondaryo viloyatidagi Angor tumanida Recor IT Academiyasi
            2023-yil tashkil etilgan.Bu mazkazda siz ITdan malakali ustozlar
            yordamida bilim olishingiz mumkin.Bu o’quv markaz o’qitish bilan
            birga IT bo’yicha ishlarni ham qabul qiladi
          </motion.div>

          <h6 className="text-[20px]">
            Recor IT Academiyasi Xalqaro komponiyalar bilan shartnoma qilgan
          </h6>

          <button className=" px-8 mt-5 text-white py-2 bg-blue-600 hover:scale-95 rounded ">
            Batafsil
          </button>
        </li>
        <li>
          <iframe
            width="630"
            height="453"
            src="https://www.youtube.com/embed/dLz1rxdZZSM?si=sGd6pShJGR4QR6Ws"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </li>
      </ul>
    </div>
  );
}

export default Content;
