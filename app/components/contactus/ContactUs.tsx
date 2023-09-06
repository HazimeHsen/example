"use client";
import { sendEmail } from "@/app/sendEmail";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { BsTelegram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {};

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
    <div
      id="contact"
      className="flex  py-10 flex-wrap md:flex-nowrap justify-evenly items-center  px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="relative w-full md:w-[50%] md:mt-0 mt-5 z-[1] rounded-lg px-5 bg-[#F1F1F1] py-10 shadow-lg">
        <h2 className="text-3xl font-bold text-center">Contact us</h2>
        <div className="w-full mb-10 text-center">
          <div className="flex flex-col justify-center items-center mt-5 font-semibold">
            <div className="flex justify-center items-center">
              Phone: +96103030030
            </div>
            <div className="flex justify-center items-center">
              Email: email@gmail.com
            </div>
          </div>
        </div>

        <form
          className="flex flex-col items-center w-full"
          onSubmit={handleSubmit}
          action={async (FormData) => {
            await sendEmail(FormData);
            setEmail("");
            setMessage("");
            setName("");
          }}>
          <div className="relative mb-4 w-full flex justify-center ">
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="peer text-black block min-h-[auto] w-full  rounded bg-white leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-[#99999] border border-white px-2 py-4 "
              id="exampleInput90"
              placeholder="Name"
            />
          </div>
          <div className="relative mb-4 w-full flex justify-center">
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="peer text-black block min-h-[auto] w-full  rounded bg-white leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-[#99999] border border-white px-2 py-4 "
              id="exampleInput91"
              placeholder="Email address"
            />
          </div>
          <div className="relative mb-4 w-full flex justify-center">
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="peer text-black block min-h-[auto] w-full  rounded bg-white leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-[#99999] border border-white px-2 py-4 "
              id="exampleFormControlTextarea1"
              rows={3}
              placeholder="Your message"></textarea>
          </div>
          <button
            type="submit"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="inline-block w-full  rounded bg-[#111111] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-0">
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
