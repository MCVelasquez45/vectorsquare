import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email) {
      setStatusMessage("Full Name and Email are required!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "6dd1f1ce-48fa-4d02-9a5f-784a36c48880",
          subject: "New Subscription",
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage("Thank you for subscribing! 🎉");
        setFormData({ fullName: "", email: "", message: "" });
        setTimeout(() => {
          setShowForm(false);
          setStatusMessage("");
        }, 3000);
      } else {
        setStatusMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatusMessage("Error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          {!showForm ? (
            <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
              <h1 className="text-4xl font-bold leading-snug">
              Get in touch by subscribing now to learn Web Development & Full-Stack MERN Development!
              </h1>
         
<ol>

    <ul>
      <li><strong>Full Name</strong>: Enter your first and last name.</li>
      <li><strong>Email Address</strong>: Provide a valid email address where we can reach you.</li>
      <li><strong>Message</strong>: Write any questions or specific information you’d like to know about our program.</li>
    </ul>

  <li>Once all fields are complete, click <strong>Submit</strong>.</li>
  <li>Our team will get in touch with you shortly with all the details you need about our program!</li>
</ol>
<p>We look forward to hearing from you! 😊</p>

              <button
                onClick={() => setShowForm(true)}
                className="primary-btn mt-8 inline-flex items-center gap-4 group"
              >
                Subscribe Now
                <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
              </button>
            </div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white shadow-lg rounded-lg p-8 mx-auto max-w-md space-y-6 border border-gray-300"
            >
              <h2 className="text-2xl font-bold text-center">
                Subscribe to Our Program
              </h2>
              {statusMessage && (
                <p
                  className={`text-center ${
                    statusMessage.includes("Thank you")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
              <div>
                <label htmlFor="fullName" className="block font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full py-2 text-white bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="w-full py-2 text-gray-700 hover:text-blue-600 underline mt-2"
              >
                Cancel
              </button>
            </motion.form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;