import React from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
  zoomIn,
} from "../utils/motion";

const About = () => {
  return (
    <div className="bg-white py-[6rem] px-4 md:px-6 lg:px-8">
      <a id="aboutus" className="anchor"></a>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        className=" pb-[12rem] pt-[2rem] "
      >
        <motion.h3
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-left text-[1.8rem] text-slate-400"
        >
          About <span className="text-[2rem] text-blue-800 font-bold">Us</span>
        </motion.h3>
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 ">
          <motion.div variants={zoomIn(0.2, 1)} className="w-[80%] md:w-[40%] ">
            <span className="w-[100%] md:w-[70%] ">
              <img className="w-full " src="hero.jpg" alt="" />
            </span>
          </motion.div>
          <div className="text-left w-[100%] md:w-[50%] flex flex-row gap-4 flex-wrap justify-left items-center cursor-pointer">
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className=" p-4 rounded transition-all ease-in-out hover:scale-100 hover:shadow-md hover:border-b-2 hover:border-slate-400 hover:shadow-slate-200 w-[100%]"
            >
              <h3 className="text-left text-slate-800 text-[1.2rem] font-semibold pl-2 rounded mb-2 w-[80%]">
                Our{" "}
                <span className=" font-bold text-blue-800 text-[1.5rem]">
                  Brand
                </span>
              </h3>
              <p className="text-slate-600 text-[1rem] font-semibold">
                Starie Incorporated Tech is a real estate company with a mission
                to provide services for students, ex-students and the broader
                community at large.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className=" p-4 rounded transition-all ease-in-out hover:scale-100 hover:shadow-md hover:border-b-2 hover:border-slate-400 hover:shadow-slate-200 w-[100%]"
            >
              <h3 className="text-left text-slate-800 text-[1.2rem] font-semibold pl-2 pb-2 rounded mb-2 w-[80%]">
                Our{" "}
                <span className="text-blue-800 text-[1.5rem] font-bold">
                  Origin
                </span>
              </h3>
              <p className="text-slate-600 text-[1rem] font-semibold">
                This idea was conceived by the co-founder to reduce the service
                charge of the traditional house agent who aims to exhort the
                masses due to the high demand of housing.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.8, 1)}
              className=" p-4 rounded transition-all ease-in-out hover:scale-100 hover:shadow-md hover:border-b-2 hover:border-slate-400 hover:shadow-slate-200 w-[100%]"
            >
              <h3 className="text-left text-slate-800 text-[1.2rem] font-semibold pl-2 pb-2 rounded mb-2 w-[90%] ">
                How SIT{" "}
                <span className="text-blue-800 text-[1.5rem] font-bold">
                  Started
                </span>
              </h3>
              <p className="text-slate-600 text-[1rem] font-semibold">
                Starie Incorporated Tech Started August 2023 by great minded
                individual to ease the pressure incurred by traditional agent
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 1.0, 1)}
              className=" p-4 rounded transition-all ease-in-out hover:scale-100 hover:shadow-md hover:border-b-2 hover:border-slate-400 hover:shadow-slate-200 w-[100%]"
            >
              <h3 className="text-left text-slate-800 text-[1.2rem] font-semibold pl-2 pb-2 rounded mb-2 w-[80%]">
                Who Do We{" "}
                <span className="text-blue-800 font-bold text-[1.5rem]">
                  Serve
                </span>
              </h3>
              <p className="text-slate-600 text-[1rem] font-semibold">
                Starie Inc Tech serves majorly students and ex-students with an
                outreach of getting to broader community.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
