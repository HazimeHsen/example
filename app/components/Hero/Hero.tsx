import React from "react";
import AutoTypeAnimation from "../auto-Type/AutoTypeAnimation";
import Container from "../Container";
import styles from "./Hero.module.css"; // Import your CSS module for styling
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-white">
      <Container>
        <div
          className={`relative flex flex-col items-center justify-center heroSection ${styles.hero}`}>
          <h1
            className={`text-3xl md:text-5xl font-bold text-center mb-1 ${styles.fadeIn}`}>
            Igniting Innovation
          </h1>
          <AutoTypeAnimation />
          <h2
            className={`text-xl md:text-2xl font-semibold text-center mt-1 mb-2 ${styles.fadeIn}`}>
            Shaping a Better Tomorrow
          </h2>
          <div
            className={`h-1 w-24 max-w-[6rem] md:max-w-[16rem] bg-[#999] mb-4 ${styles.slideIn}`}></div>
          <p className={`text-center text-gray-600 ${styles.fadeIn}`}>
            At A² Crypto, our focus is on helping you navigate the crypto space
            with confidence. We offer guidance tailored to your needs, ensuring
            you have the tools to start, choose wisely, and optimize your crypto
            ventures.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
