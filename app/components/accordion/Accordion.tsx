"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsTelegram } from "react-icons/bs";
const Accordion = () => {
  const accordionItems = [
    {
      id: "accordion-button-1",
      title: "Stay Ahead in Web3 and Finance.",
      content:
        "Embrace unbiased insights and unmatched news by joining our Telegram group today-NFA",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="md:max-w-[500px]">
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <div key={item.id} className="accordion-item">
            <button
              id={item.id}
              className={
                index === activeIndex ? "active font-semibold" : "font-semibold"
              }
              onClick={() => toggleAccordion(index)}>
              <span className="accordion-title">{item.title}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            {index === activeIndex && (
              <div className="my-2 pl-2">
                <p className="relative md:text-base text-sm whitespace-nowrap">
                  Embrace unbiased insights and unmatched news{" "}
                  <span className="flex items-center">
                    by joining our Telegram group today-NFA{" "}
                    <a
                      className="ml-2 w-fit h-fit flex "
                      href="https://t.me/AsquaredNews">
                      <Image
                        src="/images/telegram.png"
                        alt="tel"
                        width={20}
                        height={20}
                      />
                    </a>
                  </span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
