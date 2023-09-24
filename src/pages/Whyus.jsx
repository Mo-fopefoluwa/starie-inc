import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";

const Whyus = () => {
  return (
    <div>
      <a id="whyus" className="anchor"></a>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className="px-8 py-[10rem] bg-opacity-30 bg-blue-100"
      >
        <motion.h3
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-left text-[1.5rem] md:text-[1.9rem] text-slate-800"
        >
          Why Choose{" "}
          <span className="text-blue-800 font-bold text-[1.9rem] md:text-[2.2rem]">
            Us?
          </span>
        </motion.h3>

        <p className="text-center text-slate-800 font-semibold px-[2rem] md:px-[6rem] md:text-[1.4rem] py-8">
          Unlock Affordable Living with Starie Incorporated – Your Key to
          Savings, Comfort, and Community.
        </p>

        <p className="text-slate-500 px-4 pb-12">
          Our brand exudes trust, innovation, and a commitment to financial
          inclusion. We're here to make student hostel accommodation and
          community housing accessible while fostering financial freedom.
        </p>
        <div className="pt-[4rem] flex md:flex-row flex-wrap items-center justify-center gap-16 flex-col">
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="px-4 w-[80%] md:w-[30%] flex flex-col gap-8 items-center bg-white py-4"
          >
            <motion.p
              variants={zoomIn(0.4, 1)}
              className="  text-slate-600 bg-white rounded-full px-[.8rem]  mt-[-3.3rem] text-[2.4rem]"
            >
              <i class="bx bxs-check-square"></i>
            </motion.p>
            <div className="text-left">
              <h4 className="font-semibold text-[1.1rem] text-center text-slate-700 pb-4">
                We'll Find You The Perfect Space
              </h4>
              {/* <p className="text-[.9rem] text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                delectus quisquam eaque voluptatum aliquid! Quisquam corporis
                quos repudiandae earum sapiente tempore!
              </p> */}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1)}
            className="px-4 flex  w-[80%] md:w-[30%] flex-col gap-8 items-center bg-white py-4"
          >
            <motion.p
              variants={zoomIn(0.6, 1)}
              className="  text-slate-600 bg-white rounded-full px-[.8rem]  mt-[-3.3rem] text-[2.4rem]"
            >
              <i class="bx bxs-home-circle"></i>
            </motion.p>
            <div className="text-left">
              <h4 className="font-semibold text-[1.1rem] text-center text-slate-700 pb-4">
                List Your Properties Stress free
              </h4>
              {/* <p className="text-[.9rem] text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                delectus quisquam eaque voluptatum aliquid! Quisquam corporis
                quos repudiandae earum sapiente tempore!
              </p> */}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.8, 1)}
            className="px-4 flex w-[80%] md:w-[30%]  flex-col gap-8 items-center bg-white py-4"
          >
            <motion.p
              variants={zoomIn(0.8, 1)}
              className=" text-slate-600 bg-white rounded-full px-[.8rem]  mt-[-3.3rem] text-[2.4rem] "
            >
              <i class="bx bxs-happy"></i>
            </motion.p>
            <div className="text-left">
              <h4 className="font-semibold text-[1.1rem] text-center text-slate-700 pb-4">
                Say Goodbye to Excessive Agent Fee
              </h4>
              {/* <p className="text-[.9rem] text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                delectus quisquam eaque voluptatum aliquid! Quisquam corporis
                quos repudiandae earum sapiente tempore!
              </p> */}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 1.0, 1)}
            className="px-4 w-[80%] md:w-[30%]  flex flex-col gap-8 items-center bg-white py-4"
          >
            <motion.p
              variants={zoomIn(1.0, 1)}
              className="text-slate-600 text-[2.4rem] bg-white rounded-full px-[.8rem]  mt-[-3.3rem]"
            >
              <i class="bx bxs-wallet"></i>
            </motion.p>
            <div className="text-left">
              <h4 className="font-semibold text-[1.1rem] text-center py-6 text-slate-700 pb-4">
                Enjoy Flexible Payments
              </h4>
              {/* <p className="text-[.9rem] text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                delectus quisquam eaque voluptatum aliquid! Quisquam corporis
                quos repudiandae earum sapiente tempore!
              </p> */}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Whyus;
