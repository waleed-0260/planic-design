"use client"
import React, {useState} from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaRegBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
// import { FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const ContactForm = () => {


  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // console.log("data of the form",data)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        e.target.reset(); // Reset form after successful submission
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[90%] my-[50px] py-[50px] flex md:flex-row flex-col items-start justify-between">
      <div className="flex flex-col space-y-5 md:w-[50%]">
        <h1 className="md:text-[55px] text-2xl md:leading-[60px]">
          {/* Let's work together to turn your dreams into reality */}
          Let’s Talk About Your Space

        </h1>
        {/* <p className="textColor realtive md:top-[40px] text-sm">
          Your email address will not be published. Required fields are marked *
        </p> */}

        <div className="flex flex-col gap-6">
          <p className="textColor text-lg">Have a question? We’d love to hear from you. Send us a note to get the conversation started - or click on an office above and talk to us. Especially about designing something, or something we’ve designed.</p>
  {/* Phone */}
  {/* <div className="flex items-start gap-4">
    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#231f20] transition duration-300">
      <FaPhoneAlt className="text-2xl text-white" />
    </div>
    <div className="flex flex-col">
      <p className=" text-xl ">Phone</p>
      <p className="textColor text-sm">0335 5272083</p>
      <p className="textColor text-sm">051-5912675</p>
    </div>
  </div>
  <div className="flex items-start gap-4">
    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#231f20] transition duration-300">
      <IoMail className="text-2xl text-white" />
    </div>
    <div className="flex flex-col">
      <p className=" text-xl ">Mail</p>
      <p className="textColor text-sm">planicdesignisb@gmail.com</p>
    </div>
  </div>

   <div className="flex gap-4 md:mt-[20px] mt-4">
            <a
              href="https://www.facebook.com/theplanicdesign"
              target="blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#231f20] hover:bg-[#231f20] hover:text-white transition-all"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@PlanicDesign"
              target="blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#231f20] hover:bg-[#231f20] hover:text-white transition-all"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/theplanicdesign/"
              target="blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#231f20] hover:bg-[#231f20] hover:text-white transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/theplanicdesign"
              target="blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#231f20] hover:bg-[#231f20] hover:text-white transition-all"
            >
              <FaLinkedinIn />
            </a>
          </div> */}
</div>
      </div>

      <div className="md:w-[45%] flex flex-col md:mt-0 mt-[50px]">
        <h2 className="md:text-3xl text-lg py-3 border-t-[1px] border-b-[1px] border-black w-full">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className=" space-y-6 mt-[30px]">
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-1 bg-transparent"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-1 bg-transparent"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your Phone Number"
                className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-1 bg-transparent"
                required
              />
            </div>
            <div className="flex-1">
  <label
    htmlFor="type"
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    Project Type
  </label>
  <select
    id="type"
    name="type"
    className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-1 bg-transparent"
    required
  >
    <option value="" disabled hidden>
      Select Project Type
    </option>
    <option value="resedential">Resedential</option>
    <option value="commercial">Commercial</option>
    <option value="educational">Educational</option>
    <option value="healthcare">Healthcare</option>
    <option value="hospitality">Hospitality</option>
    <option value="marquee">Marquee</option>
    <option value="restaurant">Restaurant</option>
  </select>
</div>

          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-1 bg-transparent"
              required
            ></textarea>
          </div>
          {/* <div className="text-center"> */}
          <button type="submit" className="button flex flex-row items-center justify-center gap-2 font-light" disabled={loading}>
          {loading ? "Sending..." : "Send your message"} <GoArrowUpRight />
          </button>
          <p className="textColor text-sm">
            By Submitting I'm agree to terms & Conditions
          </p>

          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
