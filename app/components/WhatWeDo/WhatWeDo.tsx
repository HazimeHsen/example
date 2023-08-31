"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Container from "../Container";
import Card from "./Card";
const WhatWeDo = () => {
  const data = [
    {
      title: "Start with Confidence",
      text: [
        "Embarking on your crypto journey can be daunting, but we're here to simplify the process.",
        "We provide step-by-step live guidance to ensure you start your Web3 adventure with a solid foundation.",
      ],
      image: "/images/1.gif",
    },
    {
      title: "Choose Wisely",
      text: [
        "With so many options in the crypto space, finding what suits you best is key.",
        "We provide insights that empower you to make informed decisions, aligning your choices with your goals and aspirations.",
      ],
      image: "/images/2.gif",
    },
    {
      title: "Optimize Your Path",
      text: [
        "The crypto landscape is ever-evolving, and we're here to help you stay ahead.",
        " Our optimization strategies and expert tips enable you to maximize your crypto experience, from security to portfolio management.",
      ],
      image: "/images/3.gif",
    },
    {
      title: "Fundamental Analysis",
      text: [
        "Our team includes experienced fundamental analysts who offer valuable insights into the underlying factors that drive the crypto market.",
        "Through in-depth research, we help you understand the projects and technologies you're investing in, enabling you to make well-informed decisions.",
        "We specialize in uncovering hidden crypto gems with promising potential and lower market caps compared to their top competitors, guiding you to better understand and discover lucrative opportunities within the cryptocurrency market.",
      ],
      image: "/images/4.gif",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      id="ourwork"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-[#F1F1F1]">
      <Container>
        <div className="w-full flex justify-center mt-10 py-5">
          <div className="max-w-4xl w-full">
            <h1 className="font-bold text-center text-4xl mb-4">
              Our Expertise
            </h1>
            <p className={`text-center text-gray-600 mb-5`}>
              Join us at A² Crypto, where we help you take control of your
              crypto future. We're here to support you every step of the way as
              you explore the exciting opportunities of the decentralized world.
            </p>
            {data.map((info) => (
              <Card key={info.image} info={info} />
            ))}
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default WhatWeDo;
