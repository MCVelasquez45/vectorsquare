import React from "react";
import { FaGithub, FaLinkedin, FaSlack } from "react-icons/fa";
import { motion } from "framer-motion";
import Chat from "../Chat/Chat"; // Import the Chat component

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Vector Square Coding Journey</h1>
            <p className="text-dark2">
              VSCJ is your go-to platform for mastering the art of coding and
              web development. Whether you’re a beginner just starting out or
              an advanced learner looking to deepen your knowledge, we offer
              tailored tutorials, hands-on projects, and in-depth programming
              concepts.
              <br />
              <br />
              Our goal is to provide a comprehensive learning experience that
              equips you with the skills to build real-world projects, showcase
              your expertise, and confidently launch your tech career. Join us
              and turn your coding dreams into reality!
            </p>
          </div>

          {/* Second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Web Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    MERN Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    GitHub Version Control
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Visual Studio Code
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Contact Information</h1>
            <div className="text-dark2">
              <p className="text-lg">
                <strong>Name:</strong> Mark Velasquez
              </p>
              <p className="text-lg">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:vectorsquarecoding@gmail.com"
                  className="text-secondary hover:underline"
                >
                  vectorsquarecoding@gmail.com
                </a>
              </p>
              <p className="text-lg">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:4423531920"
                  className="text-secondary hover:underline"
                >
                  442-353-1920
                </a>
              </p>
              <p className="text-lg">
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Vector-Square-Coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  https://github.com/Vector-Square-Coding
                </a>
              </p>
            </div>
            <div className="flex space-x-6 py-3">
              <a
                href="https://github.com/Vector-Square-Coding"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={32}
                  className="cursor-pointer hover:text-primary hover:scale-105 duration-200"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/mark-velasquez4545/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={32}
                  className="cursor-pointer hover:text-primary hover:scale-105 duration-200"
                />
              </a>
              <a
                href="https://vectorsquarec-jh68932.slack.com/archives/C086Y6J43PW"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSlack
                  size={32}
                  className="cursor-pointer hover:text-primary hover:scale-105 duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="mt-10 bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Chat with Victor AI</h2>
          <Chat /> {/* Embedding the Chat component */}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;