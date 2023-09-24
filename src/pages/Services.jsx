import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../utils/motion";

const Services = () => {
  return (
    <div className="bg">
      {/* <a id="services" className="anchor"></a> */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="px-[3rem] pb-[20rem] mt-[-10rem]"
      >
        <motion.h3
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-left text-semibold text-slate-800 text-[1.5rem] md:text-[1.9rem]"
        >
          Our{" "}
          <span className="text-blue-800 font-bold text-[1.8rem] md:text-[2.2rem] ">
            Features
          </span>
        </motion.h3>
        <div className="flex flex-row flex-wrap gap-8 justify-center  items-center pt-[2rem]">
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="cot md:w-[30%] h-[19rem] md:h-[22rem] transition-all ease-in w-[80%] bg-white border-2 py-[2rem] border-blue-800 hover:bg-blue-800 hover:text-white transition-all ease-in-out rounded p-[1rem] flex flex-col items-center"
          >
            <p className="icos bg-blue-800 px-4 py-2 text-white rounded-full text-[1.5rem] mb-[1rem]">
              <i class="bx bxs-building-house"></i>
            </p>
            <h4 className="texts font-semibold text-[1.1rem] text-slate-700 pb-4">
              Affordable housing
            </h4>
            <p className="textss text-[.9rem] text-slate-700">
              These platform provide help to student and Ex student and the
              broader community finding affordable option at a reasonable pay
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1)}
            className="cot h-[19rem] md:h-[22rem] hover:bg-blue-800 transition-all ease-in md:w-[30%] w-[80%] bg-white border-2 border-blue-800 rounded p-[1rem] py-[2rem] flex flex-col items-center"
          >
            <p className="icos bg-blue-800 px-4 py-2 text-white rounded-full text-[1.5rem] mb-[1rem]">
              <i class="bx bxs-message-detail"></i>
            </p>
            <h4 className="texts font-semibold text-[1.1rem] text-slate-700 pb-4">
              Community Engagement
            </h4>
            <p className="textss text-[.9rem] text-slate-700">
              These platform allows landlord and tenant to connect through
              community platform These help track tenancy tenure and upcoming
              rent payment
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.8, 1)}
            className="cot h-[19rem] md:h-[22rem] py-[2rem] hover:bg-blue-800 transition-all ease-in md:w-[30%] w-[80%] bg-white border-2 border-blue-800 rounded p-[1rem] flex flex-col items-center"
          >
            <p className="icos bg-blue-800 px-4 py-2 text-white rounded-full text-[1.5rem] mb-[1rem]">
              <i class="bx bxs-check-shield"></i>
            </p>
            <h4 className="texts font-semibold text-[1.1rem] text-slate-700 pb-4">
              Referral Saving Platform
            </h4>
            <p className="textss text-[.9rem] text-slate-700">
              Tenant can use these platforms to save gradually Eliminating the
              need for lump Sum rent. These promote financial planning and rent
              payment
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 1.0, 1)}
            className="cot h-[19rem] md:h-[22rem] py-[2rem] hover:bg-blue-800 transition-all ease-in md:w-[30%] w-[80%] bg-white border-2 border-blue-800 rounded p-[1rem] flex flex-col items-center"
          >
            <p className="icos bg-blue-800 px-4 py-2 text-white rounded-full text-[1.5rem] mb-[1rem]">
              <i class="bx bx-world"></i>
            </p>
            <h4 className="texts font-semibold text-[1.1rem] text-slate-700 pb-4">
              Tourism🌍
            </h4>
            <p className="textss text-[.9rem] text-slate-700">
              Planning a weekend getaway or a dream vacation? we've got you
              covered. Discover, book, and experience unforgettable stays around
              the world with ease.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
