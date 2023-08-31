import React from "react";
import Container from "../Container";
import Image from "next/image";
import ReadMoreModale from "../readMoreModal/ReadMoreModal";
const About = () => {
  return (
    <div id="about" className="bg-gray-100 py-10">
      <h1 className="font-bold text-3xl text-center mb-8">About Us</h1>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[250px]">
            <Image
              src="/images/about3.jpg"
              alt="about"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="md:text-xl font-semibold text-sm leading-relaxed mb-3">
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
            <ReadMoreModale />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
