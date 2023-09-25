import React from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  footerVariants,
  slideIn,
  staggerChildren,
} from "../utils/motion";

const Footer = () => {
  const scrollToHome = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <motion.footer
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{ once: false, amount: 0.25 }}
        class="bg-white "
      >
        <div class="container px-6 py-8 mx-auto">
          <div class="flex flex-col items-center text-center">
            <motion.a variants={fadeIn("down", "tween", 0.2, 1)} href="#">
              <img class="w-auto h-[4rem]" src="Starie.png" alt="" />
            </motion.a>

            <div class="flex flex-wrap justify-center mt-6 -mx-4">
              <motion.button
                variants={fadeIn("left", "tween", 0.4, 1)}
                onClick={scrollToHome}
                class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
                aria-label="Reddit"
              >
                {" "}
                Home{" "}
              </motion.button>
            </div>
          </div>

          <motion.hr
            variants={footerVariants}
            class="my-6 border-slate-700 md:my-10 "
          />

          <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <motion.p
              variants={slideIn("up", "tween", 1.4, 1)}
              class="text-sm text-gray-500 "
            >
              © Copyright Starie Inc, 2023. All Rights Reserved.
            </motion.p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
