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
      id="learning"
      className="mb-8 sm:mb-10 md:mb-12 max-w-[53rem] scroll-mt-12 text-center mx-auto px-4 sm:px-6"
    >
      <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
        {learningData.map((skill, index) => (
          <motion.li
            className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-600 bg-white/60 borderBlack rounded-xl hover:bg-white/70 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 dark:bg-white/10 dark:text-white/80"
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