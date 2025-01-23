"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowRight, Github } from "lucide-react";

const items = [
  {
    id: 1,
    color: "#9CA3AF",
    title: "Location Tracking System",
    desc: "The Real-Time Tracking System is an innovative project designed to monitor and display the live location of assets, vehicles, or individuals. Utilizing technologies such as GPS, IoT sensors, and real-time data processing.",
    img: "https://images.pexels.com/photos/13062233/pexels-photo-13062233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/ShadowRoot-ops/Real-time-location-tracking",
  },
  {
    id: 2,
    color: "#9CA3AF",
    title: "Banking Management System",
    desc: "Financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    img: "https://i.imgur.com/dmaEE4N.png",
    link: "https://github.com/ShadowRoot-ops/banking-management-app",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="min-h-screen bg-customgrey"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div
        className="h-screen flex flex-col items-center justify-center space-y-8 px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-400 text-center">
          My Works
        </h1>
        <motion.p
          className="text-lg md:text-xl text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Explore my latest projects and creative endeavors
        </motion.p>
      </motion.div>

      {/* Projects Carousel */}
      <div className="py-16 px-4 md:px-8">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full max-w-6xl"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="w-full max-w-3xl">
              <motion.div
                className="text-gray-400 rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-64 md:h-96">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-400">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    {item.desc}
                  </p>
                  <div className="flex justify-between items-center pt-4">
                    <Link
                      href={item.link}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Source</span>
                    </Link>
                    {/* <Link
                      href={`/projects/${item.id}`}
                      className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      {/* <span>See Demo</span> */}
                    {/* <ArrowRight className="w-4 h-4" />  */}
                    {/* </Link> */}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contact Section */}
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center space-y-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-center text-gray-400">
          Have a project in mind?
        </h2>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="currentColor" className="text-gray-400">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-blue-600 hover:bg-blue-700 text-white 
                     w-24 h-24 md:w-32 md:h-32 
                     rounded-full flex items-center justify-center 
                     text-lg md:text-xl font-semibold
                     transition-all duration-200 hover:scale-110"
          >
            Hire Me
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioPage;
