import React from "react";
import { motion } from "framer-motion";
import { staggerChildren, zoomIn } from "../utils/motion";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("aboutus").scrollIntoView({ behaviour: "smooth" });
    // window.scrollTo({ top: 2000, left: 0, behavior: "smooth" });
  };
  const scrollToNews = () => {
    document.getElementById("news").scrollIntoView({ behaviour: "smooth" });
    // window.scrollTo({ top: 5850, left: 0, behavior: "smooth" });
  };

  return (
    <div className=" pb-[18rem] ">
      {/* <a href="/" id="home" className="anchor"></a> */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="relative "
      >
        <img
          src="img2.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-40 bg-slate-500 md:pt-[14rem] pb-[12rem] px-6 md:px-[4rem]">
          <svg
            className="absolute inset-x-0 bottom-[-1px] text-white pt-[2rem]"
            viewBox="0 0 1160 163"
          >
            <path
              fill="#fff"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276
               13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44
                162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-0 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 md:py-4">
            <div className="flex flex-col items-center justify-center gap-2 md:gap-8 md:flex-row mt-[-8rem]">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16  py-[1rem] text-left">
                <motion.h2
                  variants={zoomIn(0.4, 1)}
                  className="md:pt-[8rem] mb-[-.4rem] md:mb-[-.6rem] pt-[16rem] max-w-lg mb-6 font-sans text-[1.8rem] sm:text-[2rem] font-bold tracking-tight text-slate-700 md:text-[3rem] md:leading-none"
                >
                  Welcome to
                </motion.h2>
                <motion.span
                  variants={zoomIn(0.4, 1)}
                  className="text-blue-800 text-[2rem] sm:text-[2.2rem] font-bold md:text-[3.2rem]"
                >
                  Starie Incorporated
                </motion.span>
                <motion.p className="pt-[1.2rem] text-blue-600 font-bold">
                  Your Hub for Student Hostels and Community Housing Solutions!
                </motion.p>
                <motion.p
                  variants={zoomIn(0.6, 1)}
                  className="max-w-xl mb-4 text-base text-slate-800 md:px-6 py-4 font-bold md:text-lg"
                >
                  Redefining student hostel living and community housing
                  solutions. Say goodbye to excessive agent fees and hello to
                  hassle-free, affordable housing.
                </motion.p>
                <div className="flex flex-row gap-8">
                  <button
                    type="submit"
                    onClick={scrollToAbout}
                    className="mt-8 flex flex-row justify-center items-center  w-[45%] gap-2  py-2  md:py-6 bg-blue-800 text-white rounded-xl hover:bg-blue-600 transition-all ease-in font-semibold"
                  >
                    <p> Get Started</p> <i class="bx bxs-right-arrow-alt"></i>
                  </button>
                  <button
                    type="submit"
                    onClick={scrollToNews}
                    className="mt-8 flex flex-row justify-center items-center  w-[45%] gap-2  py-2 md:py-6 bg-blue-800 text-white rounded-xl hover:bg-blue-600 transition-all ease-in font-semibold"
                  >
                    Sign up <i class="bx bxs-right-arrow-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
