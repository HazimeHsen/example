import React from "react";
import Container from "../Container";
import styles from "./Hero.module.css"; // Import your CSS module for styling
import Image from "next/image";
const Hero = () => {
  return (
    <div className="pt-[60px] h-screen " style={{}}>
      <Container>
        <div className="flex md:flex-row flex-col md:items-center md:justify-between">
          <div className="md:hidden block">
            <Image
              src="/images/dj.png"
              className="mx-auto"
              width={280}
              height={300}
              alt=""
            />
          </div>
          <div
            className={`relative flex flex-col md:justify-center  heroSection ${styles.hero}`}>
            <h1
              className={`text-3xl md:text-5xl font-bold text-center md:max-w-[550px] md:text-start mb-1 ${styles.fadeIn}`}>
              Welcome to the DJ Mix Zone
            </h1>
            <h2
              className={`text-xl md:text-2xl font-semibold text-center md:text-start mt-1 mb-2 ${styles.fadeIn}`}>
              Where Music Comes to Life
            </h2>

            <p
              className={`text-center md:text-start text-gray-500 md:w-[500px] ${styles.fadeIn}`}>
              Dive into a world of beats, rhythms, and melodies. Our DJ
              community is dedicated to bringing the music alive. Join us and
              let the music move you.
            </p>
          </div>
          <div className="md:block hidden">
            <Image
              src="/images/dj.png"
              className="mx-auto"
              width={280}
              height={300}
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
