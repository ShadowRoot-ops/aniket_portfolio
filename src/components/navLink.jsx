"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  const ref = useRef(null);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Update position when pathname changes or component mounts
  useEffect(() => {
    if (pathName === link.url && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({
        left: ref.current.offsetLeft,
        width,
        opacity: 1,
      });
    } else {
      setPosition((prev) => ({
        ...prev,
        opacity: 0,
      }));
    }
  }, [pathName, link.url]);

  return (
    <div className="relative">
      <Link
        ref={ref}
        className={`relative z-10 block rounded p-1 ${
          pathName === link.url
            ? "text-white mix-blend-difference"
            : "text-black"
        }`}
        href={link.url}
      >
        {link.title}
      </Link>
      <motion.div
        animate={position}
        className="absolute top-0 z-0 h-full rounded-md bg-black"
        initial={false}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default NavLink;
