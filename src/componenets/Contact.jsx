"use client";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem("formSubmitted");
    if (submitted === "true") {
      setIsButtonDisabled(true);
      setSuccessMessage(
        "Looks like you've already reached out—I’m on it! If it’s urgent or you want to chat directly, feel free to connect with me on WhatsApp or LinkedIn. Let’s keep the ideas flowing!"
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await emailjs
          .sendForm(
            "service_s7f1gol",
            "template_c8z9rjl",
            form.current,
            "hAgdbiB-vSi-nqhbV"
          )
          .then(
            (result) => {
              setSuccessMessage(
                "Thanks for messaging! I’ll be in touch before you can say ‘design genius.’"
              );
              localStorage.setItem("formSubmitted", "true");
              setIsButtonDisabled(true);
            },
            (error) => {
              setSuccessMessage("Failed to send email,Try again");
            }
          );
      } catch (error) {
        console.error("Failed to send the message", error);
      }
    }
  };

  return (
    <div
      className="bg-cover md:py-0 py-2 bg-center lg:bg-[url('/images/contactMe.webp')] bg-[url('/images/contactMobile.webp')] lg:h-[1000px] h-[1100px]"
      id="contact"
    >
      <div className="max-w-[1440px] m-auto md:p-10 p-4 flex items-center">
        <div className="lg:w-7/12"></div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-8 lg:w-5/12 w-full lg:pt-32 "
        >
          <div>
            <h2 className="lg:text-5xl text-3xl uppercase md:mt-10 my-2 text-white font-bold md:text-left text-center">
              Let's Connect
            </h2>
            <p className="md:text-left text-center text-white mb-10 tracking-wider text-sm">
              Let’s turn ideas into visuals, feel free to reach out!
            </p>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bolder  text-white"
            >
              Your email{" "}
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`shadow-orange bg-white border border-gray-300 text-primary-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-none block w-full p-2.5  ${
                errors.email && "border-red-500"
              }`}
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-[#fff]"
            >
              Subject{" "}
              {errors.subject && (
                <p className="text-red-500">{errors.subject}</p>
              )}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`shadow-orange bg-white border border-gray-300 text-primary-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-none block w-full p-2.5 ${
                errors.subject && "border-red-500"
              }`}
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-[#fff] dark:text-[#fff]"
            >
              Your message{""}
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className={`shadow-orange bg-white border border-gray-300 text-primary-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-none block w-full p-2.5 ${
                errors.message && "border-red-500"
              }`}
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <div className="flex md:justify-start justify-center">
            <button
              type="submit"
              className="z-10lg:text-2xl rounded-md py-2 capitalize lg:px-6 px-3 md:text-base font-bold duration-300 transform hover:scale-105 hover:shadow-neon text-white bg-[#fe5239]"
              disabled={isButtonDisabled}
            >
              Send Message
            </button>
          </div>
          {successMessage && (
            <div className="md:bg-transparent bg-gray-700  rounded md:p-0 p-2">
              <p className="text-white font-bold md:bg-none ">
                {successMessage}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
