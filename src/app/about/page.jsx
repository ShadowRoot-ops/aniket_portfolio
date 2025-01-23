"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const skillRef = useRef(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const skills = [
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Framer Motion",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <div className="bg-black min-h-screen relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-customgrey" />

      <motion.div
        className="relative z-10"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="min-h-screen px-4 py-16 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          {/* Biography Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-8">
              BIOGRAPHY
            </h2>

            <div className="h-px bg-gray-600 mb-8" />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-8 lg:gap-16">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              >
                Over the years, I have worked on customer-facing products with a
                strong focus on excellent user experience and accessibility.
              </motion.h3>

              <div className="space-y-6 text-gray-400">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="leading-relaxed"
                >
                  Self-taught software engineer with a strong knowledge of
                  Frontend and Backend development.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="leading-relaxed"
                >
                  I am passionate about working on meaningful projects that have
                  a positive impact on people&apos;s lives. I have hands-on
                  experience working on high-traffic, customer-facing products
                  and prioritize building clean, maintainable codebases that
                  enable continuous improvement and scalability.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="leading-relaxed"
                >
                  I am fluent in English and have experience working and
                  studying in an international environment.
                </motion.p>
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <section ref={skillRef} className="pt-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isSkillRefInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-12"
            >
              SKILLS
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isSkillRefInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {skills.map((skill, index) => (
                <motion.button
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isSkillRefInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-full bg-transparent px-6 py-3 text-sm md:text-base"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-50 transition-opacity group-hover:opacity-100" />
                  <span className="relative text-gray-300 font-medium">
                    {skill}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
