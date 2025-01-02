import React from "react";
import { motion } from "framer-motion";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaSquareGithub } from "react-icons/fa6";
import { DiBootstrap } from "react-icons/di";
import { SiJquery } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiMongoose } from "react-icons/si";
import { PiOpenAiLogo } from "react-icons/pi";
const ServicesData = [
  {
    id: 1,
    title: "HTML",
    link: "#",
    icon: <IoLogoHtml5 />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "CSS",
    link: "#",
    icon: <IoLogoCss3 />,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Bootstrap",
    link: "#",
    icon: <DiBootstrap />,
    delay: 0.7,
  },
  {
    id: 4,
    title: "Java Script",
    link: "#",
    icon: <IoLogoJavascript />,
    delay: 0.3,
  },
  {
    id: 5,
    title: "JQuery",
    link: "#",
    icon: <SiJquery />,
    delay: 0.7,
  },
  {
    id: 6,
    title: "MongoDb",
    link: "#",
    icon: <SiMongodb />
    ,
    delay: 0.7,
  },
  {
    id: 7,
    title: "Express",
    link: "#",
    icon: <SiExpress />,
    delay: 0.7,
  },
  {
    id: 8,
    title: "React",
    link: "#",
    icon: <IoLogoReact />,
    delay: 0.7,
  },
  {
    id: 9,
    title: "Node",
    link: "#",
    icon: <FaNode />,
    delay: 0.7,
  },
  {
    id: 10,
    title: "Mongoose",
    link: "#",
    icon: <SiMongoose />,
    delay: 0.7,
  },
  {
    id: 11,
    title: "Visual Studio Code",
    link: "#",
    icon: <BiLogoVisualStudio />,
    delay: 0.5,
  },
 
  {
    id: 12,
    title: "GitHub",
    link: "#",
    icon: <FaSquareGithub />,
    delay: 0.6,
  }
  ,
 
  {
    id: 13,
    title: "OpenAi",
    link: "#",
    icon: <PiOpenAiLogo />,
    delay: 0.6,
  }
  
  
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Languages & Technologies Covered in Our Program
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id} // Add unique key prop here
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4"> {service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
