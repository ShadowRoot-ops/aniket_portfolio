"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSucess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Lets Collaborate";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSucess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPELATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          setSucess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-12 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div className="text-gray-400">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-12 lg:h-full lg:w-1/2 bg-customgrey rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span className="text-gray-400">Dear,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-white outline-none resize-none"
            name="user_message"
          />
          <span className="text-gray-400">My mail adress is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-white outline-none"
          />
          <span className="text-gray-400">Regards</span>
          <button className="bg-purple-300 font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your messgae has sent successfully
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
