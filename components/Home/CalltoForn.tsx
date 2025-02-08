"use client"
import React, {useState} from 'react'

const CalltoForn = ({heading, desc, btn}:any) => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://dominobackend.vercel.app/add-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Email submitted successfully!");
        setEmail(""); // Reset input field
      } else {
        alert("Failed to submit email. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  return (
<div className="w-full flex flex-col items-center justify-center space-y-4 p-6 border-t-[1px] borer-[#b3b2af] mt-[100px]" data-aos="zoom-in">
  <h1 className="text-3xl font-bold text-center text-gray-800">
  {heading}
  </h1>
  <p className="text-lg text-center text-gray-600 max-w-2xl">
    {desc}
  </p>

  <form className="flex sm:flex-row flex-col items-center justify-center sm:space-x-3" onSubmit={handleSubmit}>
    <input
      type="email"
      placeholder="Email address"
      value={email}
        onChange={(e) => setEmail(e.target.value)}
      className="sm:w-80 h-12 px-4 text-lg border border-[#231f20] rounded-md focus:outline-none focus:ring-1 focus:ring-[#231f20] w-[80%]"
    />
    <button
        type="submit"
        className="bg-[#231f20] text-white sm:w-[210px] sm:mt-0 mt-8 w-[80%] h-12 text-lg rounded-md transition duration-300"
        disabled={loading}
      >
        {loading ? "Submitting..." : btn}
      </button>
  </form>
</div>
  )
}

export default CalltoForn