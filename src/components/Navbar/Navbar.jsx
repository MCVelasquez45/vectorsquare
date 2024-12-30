import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "#home" },
  { id: 2, title: "Services", path: "#services" },
  { id: 3, title: "About Us", path: "#about" },
  { id: 4, title: "Our Team", path: "#team" },
  { id: 5, title: "Subscribe Now", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative z-20 bg-white shadow-md">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo */}
        <h1 className="font-bold text-2xl">Vector Square's Coding Journey</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6">
          {NavbarMenu.map((menu) => (
            <a
              key={menu.id}
              href={menu.path}
              className="text-lg font-medium hover:text-secondary"
            >
              {menu.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-gray-100"
        >
          <ul className="flex flex-col gap-4 p-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-secondary"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
