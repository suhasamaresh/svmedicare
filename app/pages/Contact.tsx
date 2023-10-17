"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiry: "",
  });
  const [error, setError] = useState([])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    const res = await fetch('api/contact', {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({
        formData
      }),
    });
    const {msg} = await res.json();
    setError(msg);
    console.log(error); 
  };

  return (
    <section id="contact" className="bg-black p-4 pt-10">
      <div>
        <h2 className="text-center font-bold text-6xl">
          <span className="text-[#FFCA3A]"> GET </span>
          <span className="font-outline-2"> IN TOUCH</span>
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="max-w-xl w-full bg-black">
          {" "}
          {/* Increased width */}
          <div className="bg-black rounded shadow-lg p-8 grid grid-cols-1 gap-8 items-center">
            {" "}
            {/* Card */}
            <div className="col-span-1">
              {" "}
              {/* Right half for the Contact Form */}
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6 relative">
                    <label
                      htmlFor="name"
                      className="block font-bold mb-2 font-goblin text-[#FFCA3A] text-lg"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name here"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 border-b border-[#FFCA3A] text-lg bg-[#FFFAFA]`}
                      required
                    />
                  </div>

                  <div className="mb-6 relative">
                    <label
                      htmlFor="email"
                      className="block font-bold font-goblin mb-2 text-[#FFCA3A] text-lg"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Please enter a valid email!"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 border-b border-[#FFCA3A] text-lg bg-[#FFFAFA]`}
                      required
                    />
                  </div>

                  <div className="mb-6 relative">
                    <label
                      htmlFor="enquiry"
                      className="block font-bold mb-2 text-[#FFCA3A] text-lg font-goblin"
                    >
                      Enquiry
                    </label>
                    <textarea
                      id="enquiry"
                      name="enquiry"
                      placeholder="Enter the enquiry"
                      value={formData.enquiry}
                      onChange={handleChange}
                      className={`w-full p-3 border-b border-[#FFCA3A] text-lg bg-[#FFFAFA]`}
                      rows={4}
                      required
                    />
                  </div>
                  <div className="text-center mt-8">
                    {" "}
                    {/* Increased margin */}
                    <button
                      type="submit"
                      className=" md:px-48 py-1 sm:px-36 px-32 bg-[#FFCA3A] text-black rounded-3xl hover:bg-yellow-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
