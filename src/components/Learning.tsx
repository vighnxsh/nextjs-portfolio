"use client";

import React from "react";
import { learningData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Learning() {
 

  return (
    <section
      id="skills"
     
      className="mb-12 max-w-[53rem] scroll-mt-12 text-center sm:mb-12"
    >
      
      <ul className="flex flex-wrap justify-center items-center gap-2 text-lg text-gray-800">
        {learningData.map((skill, index) => (
          <motion.li
            className=" text-xl font-semibold text-slate-600 bg-white/60 borderBlack rounded-xl hover:bg-white/70 px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}