"use client";

import React, { useState, useEffect } from "react";

const Homepage = () => {
  const [firstLine, setFirstLine] = useState("");
  const [ampersand, setAmpersand] = useState("");
  const [lastLine, setLastLine] = useState("");

  const texts = {
    first: "Crafting Code",
    second: "&",
    third: "Building Dreams",
  };

  useEffect(() => {
    let currentIndexFirst = 0;
    let currentIndexAmp = 0;
    let currentIndexLast = 0;

    // First line animation
    const timerFirst = setInterval(() => {
      if (currentIndexFirst <= texts.first.length) {
        setFirstLine(texts.first.slice(0, currentIndexFirst));
        currentIndexFirst++;
      } else {
        clearInterval(timerFirst);
        // Start ampersand animation after first line
        const timerAmp = setInterval(() => {
          if (currentIndexAmp <= texts.second.length) {
            setAmpersand(texts.second.slice(0, currentIndexAmp));
            currentIndexAmp++;
          } else {
            clearInterval(timerAmp);
            // Start last line animation after ampersand
            const timerLast = setInterval(() => {
              if (currentIndexLast <= texts.third.length) {
                setLastLine(texts.third.slice(0, currentIndexLast));
                currentIndexLast++;
              } else {
                clearInterval(timerLast);
              }
            }, 100);
          }
        }, 200);
      }
    }, 100);

    return () => {
      clearInterval(timerFirst);
    };
  }, []);

  return (
    <div className="">
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex lg:h-full flex-col gap-8 items-center justify-center text-center">
        {/* TITLE */}
        <h1
          className="uppercase font-primaryregular font-bold text-customblue"
          style={{
            fontSize: "5vw",
            lineHeight: 0.78,
          }}
        >
          {firstLine || "\u00A0"}
          <br />
          <span
            className="text-8xl text-center align-middle"
            style={{
              lineHeight: 1,
            }}
          >
            {ampersand || "\u00A0"}
          </span>
          <br />
          {lastLine || "\u00A0"}
        </h1>
        {/* DESC */}
        <p className="">
          Showcasing innovative full-stack web solutions, blending creativity
          with cutting-edge technology to build seamless digital experiences.
        </p>
        {/* BUTTONS */}
        <div className="flex gap-4">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            My Work
          </button>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
