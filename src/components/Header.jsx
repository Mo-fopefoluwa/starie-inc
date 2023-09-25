import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../utils/motion";
import useHeaderShadow from "../hooks/useHeaderShadow";
import { useOnOutsideClick } from "../hooks/useOnClickOutside";
import useHeaderColor from "../hooks/useHeaderColor";

const Header = () => {
  const [open, setOpen] = useState("");
  const headerShadow = useHeaderShadow();
  const headerColor = useHeaderColor();
  const { innerBorderRef } = useOnOutsideClick(() => setOpen(false));

  const scrollToHome = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services").scrollIntoView({ behaviour: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("aboutus").scrollIntoView({ behaviour: "smooth" });
    // window.scrollTo({ top: 2380, left: 0, behavior: "smooth" });
  };

  const scrollToWhy = () => {
    document.getElementById("whyus").scrollIntoView({ behaviour: "smooth" });
  };

  const Nav = () => {
    return (
      <ul className="flex flex-col gap-8 w-[100%] text-center absolute z-10 bg-white top-[8rem] right-0 py-16 font-semibold text-slate-500">
        <button onClick={scrollToHome}>
          <li className="transition-all duration-500 ease-in-out hover:text-slate-600 hover:text-1.5rem hover:font-bold">
            Home
          </li>
        </button>
        <button onClick={scrollToServices}>
          <li className="transition-all duration-500 ease-in-out hover:text-slate-600 hover:text-1.5rem hover:font-bold">
            Features
          </li>
        </button>
        <button onClick={scrollToWhy}>
          <li className="transition-all duration-500 ease-in-out hover:text-slate-600 hover:text-1.5rem hover:font-bold">
            Why us
          </li>
        </button>
        <button onClick={scrollToAbout}>
          <li className="transition-all duration-500 ease-in-out hover:text-slate-600 hover:text-1.5rem hover:font-bold">
            About us
          </li>
        </button>
      </ul>
    );
  };
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="fixed z-50 w-full"
        style={{ boxShadow: headerShadow, backgroundColor: headerColor }}
      >
        <div className="bg-[#fff0] flex justify-between items-center md:px-24 md:py-12  px-12 py-8 w-full">
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <img className="w-[15%]" src="Starie.png" alt="" />
            {/* <h1 className="text-[1.2rem] font-bold">Logo</h1> */}
          </motion.div>
          <ul className="hidden md:flex flex-row gap-[2.2rem] lg:gap-[1.8rem] text-[1.3rem] font-semibold text-slate-600 ">
            <motion.button
              variants={fadeIn("left", "tween", 0.4, 1)}
              onClick={scrollToHome}
            >
              <li className="transition-all duration-500 ease-in-out hover:text-slate-800 hover:text-1.5rem hover:font-bold">
                Home
              </li>
            </motion.button>
            <motion.button
              variants={fadeIn("left", "tween", 0.6, 1)}
              onClick={scrollToServices}
            >
              <li className="transition-all duration-500 ease-in-out hover:text-slate-800 hover:text-1.5rem hover:font-bold">
                Features
              </li>
            </motion.button>
            <motion.button
              variants={fadeIn("left", "tween", 1.0, 1)}
              onClick={scrollToWhy}
            >
              <li className="transition-all duration-500 ease-in-out flex flex-row gap-2 hover:text-slate-800 hover:text-1.5rem hover:font-bold">
                <span>Why</span> <span>us</span>
              </li>
            </motion.button>
            <motion.button
              variants={fadeIn("left", "tween", 0.8, 1)}
              onClick={scrollToAbout}
            >
              <li className="transition-all duration-500 ease-in-out flex flex-row gap-2 hover:text-slate-800 hover:text-1.5rem hover:font-bold">
                <span>About</span>
                <span> us</span>
              </li>
            </motion.button>
          </ul>
          <div className="md:hidden" ref={innerBorderRef}>
            <button
              className=" text-[2.5rem] text-slate-800 "
              onClick={() => setOpen(!open)}
            >
              {open ? <i class="bx bx-x"></i> : <i class="bx bx-menu"></i>}
            </button>
            {open && <Nav />}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
