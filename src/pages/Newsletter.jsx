import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Newsletter = () => {
  return (
    <div className="relative">
      <a id="news" className="anchor"></a>
      <img
        src="bluemap.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="relative bg-opacity-75 bg-slate-200"
      >
        <svg
          className="absolute inset-x-0 bottom-[-1px] text-white"
          viewBox="0 0 1160 163"
        >
          {/* <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          /> */}
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <motion.h1
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-blue-800 text-3xl font-semibold  md:text-3xl"
          >
            Get the latest news by subscribing to our newsletter
          </motion.h1>
          <p className="font-semibold text-slate-800 text-[1rem] md:text-[1.1rem] px-8 md:px-2">
            Connect with ease. Join us for convenience, savings, and connected
            living.
          </p>

          <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border-2 border-blue-800 rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
            <motion.form
              variants={zoomIn(0.4, 1)}
              className="flex flex-col md:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-10 px-4 py-2 m-1 text-blue-800 placeholder-gray-800 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="button"
                className="h-10 px-4 py-2 m-1 text-white font-semibold transition-colors duration-300 transform bg-blue-800 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                Join Us
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
