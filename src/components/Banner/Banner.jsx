import React, { useState } from "react";
import BannerPng from "../../assets/education.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Banner = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng}
            alt="Web Development Program"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              Learn Web Development & Full-Stack MERN with Us
            </motion.h1>
            <p className="text-lg text-gray-600">
              Unlock your potential with our comprehensive program designed to
              teach you the skills to build modern websites and full-stack
              applications. Join a community of aspiring developers and create
              projects that make an impact.
            </p>
            <div className="flex flex-col gap-6">
              {/* Project-Based Learning */}
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                onClick={() =>
                  openModal({
                    title: "Project-Based Learning",
                    content:
                      "Our program focuses on hands-on learning through real-world projects. This approach helps students build practical skills and a portfolio that showcases their capabilities to future employers.",
                  })
                }
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl cursor-pointer"
              >
                <FaBookReader className="text-2xl text-primary" />
                <p className="text-lg">Project-Based Learning</p>
              </motion.div>

              {/* Mentorship by Industry Experts */}
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                onClick={() =>
                  openModal({
                    title: "Mentorship by Industry Experts",
                    content:
                      "Learn directly from seasoned professionals in the tech industry. Our mentors provide invaluable guidance, share their experiences, and help you navigate your career path.",
                  })
                }
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl cursor-pointer"
              >
                <GrUserExpert className="text-2xl text-primary" />
                <p className="text-lg">Mentorship by Industry Experts</p>
              </motion.div>

              {/* Flexible Learning Schedule */}
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                onClick={() =>
                  openModal({
                    title: "Flexible Learning Schedule",
                    content:
                      "We understand that life is busy. Our program offers flexible scheduling options to help you learn at your own pace while balancing other commitments.",
                  })
                }
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl cursor-pointer"
              >
                <MdOutlineAccessTime className="text-2xl text-primary" />
                <p className="text-lg">Flexible Learning Schedule</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full space-y-4 shadow-lg">
            <h2 className="text-2xl font-bold">{modalContent.title}</h2>
            <p>{modalContent.content}</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;