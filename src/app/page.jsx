"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

function App() {
  const [startScroll, setStartScroll] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const words = ["Crafting", "Code", "&", "Building", "Dreams"];

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const timer = setTimeout(() => {
      setStartScroll(true);
    }, 3000);

    const handleMouseMove = (e) => {
      // Remove the type annotation here
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateTransform = () => {
    if (windowSize.width === 0) return "translate(0px, 0px)";
    return `translate(${(mousePosition.x - windowSize.width / 2) * 0.02}px, ${
      (mousePosition.y - windowSize.height / 2) * 0.02
    }px)`;
  };

  return (
    <div className="bg-black min-h-screen relative">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 bg-customgrey"
        style={{
          transform: calculateTransform(),
          transition: "transform 0.2s ease-out",
        }}
      />

      <motion.div
        className="relative z-10"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-screen flex flex-col">
          {/* Social Links */}
          <div className="fixed top-8 right-8 flex gap-6">
            <motion.a
              href="https://github.com/ShadowRoot-ops"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aniket-sharma-1a686522a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4">
            {/* Scrolling Text */}
            <div className="overflow-hidden w-full mb-12">
              <div
                className={`inline-flex whitespace-nowrap ${
                  startScroll ? "animate-infinite-scroll" : ""
                }`}
              >
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="uppercase font-bold text-gray-200 inline-block px-20"
                    style={{
                      fontSize: "clamp(2rem, 5vw, 4rem)",
                      lineHeight: 0.9,
                    }}
                  >
                    {words.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className="animate-text-reveal inline-block"
                        style={{
                          animationDelay: `${wordIndex * 0.2}s`,
                        }}
                      >
                        {word}
                        <span className="mr-4"> </span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <motion.p
              className="text-gray-300 max-w-2xl text-center text-lg mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              Showcasing innovative full-stack web solutions, blending
              creativity with cutting-edge technology to build seamless digital
              experiences.
            </motion.p>

            {/* Buttons */}
            <div className="flex gap-6">
              <Link
                href="/portfolio"
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                My Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            filter: blur(10px);
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
          will-change: transform;
        }

        .animate-text-reveal {
          animation: textReveal 0.8s cubic-bezier(0.7, 0, 0.3, 1) forwards;
          opacity: 0;
          filter: blur(10px);
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default App;
