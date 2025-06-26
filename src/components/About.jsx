import React from "react";
import { ABOUT } from "../constants";
import {motion} from "framer-motion";

const About = () => {
  const imageVariants ={
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}
  }
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center bg-emerald-50 px-6 "
      id="about"
    >
      <motion.h2 initial={{opacity:0.8, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="my-8 text-center text-4xl font-semibold tracking-tighter">
        About Us
      </motion.h2>
      <div className="mb-10 flex items-center justify-center gap-4">
        {" "}
        {ABOUT.profileImages.map((image, index) => (
          <motion.img
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          animate={{opacity:1, scale:1}}
          transition={{duration:0.5, delay:image.delay}}
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-1/4 rounded-3xl shadow-lg"
          />
        ))}
      </div>
      <motion.p initial={{opacity:0.8, scale:0.8}} animate={{opacity:1, scale:1}} transition={{duration:0.8}} className="mb-8 max-w-4xl text-center text-xl lg:text-4xl">
        {ABOUT.aboutUsText}
      </motion.p>
    </section>
  );
};

export default About;
