"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Container from "../components/Container";
const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      id="about"
      className="py-10">
      <h1 className="font-bold text-3xl text-center mb-8">About Us</h1>
      <Container>
        <div className="">
          <div className="relative flex items-center justify-center h-[250px] w-full my-5">
            <Image
              src="/images/about3.jpg"
              alt="about"
              layout="fill"
              objectFit="cover"
              className="rounded-lg max-w-[500px] flex justify-center mx-auto"
            />
          </div>
          <div>
            <p className="md:text-xl text-start font-semibold text-sm leading-relaxed mb-4">
              <span className="font-bold">
                Greetings, I'm Anthony Antoun, the founder of A² Crypto
              </span>
              . My journey into the crypto world is not your typical one. With a
              background in civil engineering, I achieved top honors during my
              university years and embarked on an immensely successful career
              spanning various countries and prestigious companies, including
              France, Canada, Dubai, and Lebanon. Establishing my own thriving
              civil engineering office in Lebanon was a pinnacle achievement.
            </p>
            <p className="md:text-xl text-start font-semibold text-sm leading-relaxed mb-4">
              Mathematics and numbers have always fascinated me, driving my
              analytical mindset. As my career flourished, I stumbled upon the
              captivating realm of cryptocurrencies. What started as curiosity
              soon transformed into a deep exploration. I was drawn to the
              crypto space due to its fusion of numbers and groundbreaking
              technology, which aligned perfectly with my passions.
            </p>
            <p className="md:text-xl text-start font-semibold text-sm leading-relaxed mb-4">
              Venturing into this dynamic space came with its share of
              challenges. Like many, I faced setbacks and experienced the sting
              of market volatility. However, these experiences became invaluable
              lessons, teaching me the ins and outs of the crypto landscape. I
              recognized that the crypto world was a space where learning was
              continuous, and adapting to change was imperative.
            </p>
            <p className="md:text-xl text-start font-semibold text-sm leading-relaxed mb-4">
              As my involvement in the Web3 landscape deepened over the years,
              an idea crystallized in my mind. With a desire to share my
              knowledge and protect others from the pitfalls I encountered, I
              founded A² Crypto. This platform is dedicated to empowering
              individuals to navigate the crypto space safely and with
              confidence.
            </p>
            <p className="md:text-xl text-start font-semibold text-sm leading-relaxed mb-4">
              At A² Crypto, our mission is to provide you with the tools,
              understanding, and fundamental insights to make informed decisions
              in the crypto world. I firmly believe that knowledge is the key to
              success in this ever-evolving realm. By leveraging my background
              in numbers, my penchant for technology, and my firsthand
              experiences, I aspire to help you build a strong foundation and
              stay ahead in the exciting journey of decentralized technologies.
            </p>
            <p className="md:text-xl text-start font-semibold text-sm leading-relaxed mb-4">
              Join us at A² Crypto as we embark on a journey of empowerment,
              innovation, and growth in the Web3 world. Together, we'll navigate
              the complexities, seize opportunities, and build a future where
              crypto is not just a challenge, but a pathway to success.
            </p>
            <p className="md:text-xl flex items-center font-semibold text-sm">
              Founder’s Threads:
              <a
                className="ml-2 w-fit block"
                href="https://www.threads.net/@antounanthony">
                <svg
                  aria-label="Threads"
                  viewBox="0 0 192 192"
                  width={30}
                  height={30}
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="x19hqcy"
                    d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path>
                </svg>
              </a>
            </p>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default About;
