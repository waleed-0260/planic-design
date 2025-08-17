import React,{useState} from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Form = () => {
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
 <form onSubmit={handleSubmit} className="space-y-6 mt-[30px]">
  <div className="flex flex-col md:flex-row gap-4">
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

  <div className="flex flex-col md:flex-row gap-4">
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
      <div className="flex-1">
      <label
        htmlFor="country"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Country
      </label>
      <input
        type="text"
        id="country"
        name="country"
        placeholder="Enter your Country"
        className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-1 bg-transparent"
        required
      />
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

  <button
    type="submit"
    className="button flex flex-row items-center justify-center gap-2 font-light"
    disabled={loading}
  >
    {loading ? "Sending..." : "Send your message"} <GoArrowUpRight />
  </button>

  <p className="textColor text-sm">
    By Submitting I'm agree to terms & Conditions
  </p>
</form>

  )
}

export default Form