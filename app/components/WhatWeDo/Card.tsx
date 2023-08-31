"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Card = ({
  info,
}: {
  info: { title: string; text: string[]; image: string };
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row md:items-center mb-10"
      key={info.title}>
      <div className="md:w-1/4 w-full md:mr-8">
        <Image src={info.image} width={100} height={100} alt={info.title} />
      </div>
      <div className="md:w-3/4 w-full ">
        <h2 className="font-bold text-xl underline justify-start text-[#cab169] mb-4">
          {info.title}:
        </h2>
        <ul className="font-semibold text-gray-600 pl-8">
          {info.text.map((text, index) => (
            <li className="mb-2 list-disc" key={index}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Card;
