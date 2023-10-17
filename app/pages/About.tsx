import React from "react";

const About = () => {
  return (
    <section id="about">
    <div>
      <div className="md:flex justify-evenly bg-black text-center py-16">
        <div>
          <h1 className="text-bold font-goblin text-4xl text-[#FFCA3A] py-5 flex-col xl:text-left">
            High-Quality
            <br /> Hospital
            <br /> Tech
          </h1>
        </div>
        <p className="text-[#FFCA3A] py-5 display:flex xl:text-left ">
          Acquire top-notch, state-of-the-art equipment crafted to boost your
          hospital’s
          <br /> performance and amp-up the patient experience. You won’t
          believe you ever lived
          <br /> without these life-changing tools!
        </p>
      </div>
      <div className="flex flex-col justify-center md:flex-row bg-black pt-10 pb-32"> {/* Added flex-column for mobile */}
        <div className="max-w-xs p-4 md:p-6 rounded-lg shadow-lg mx-auto md:mx-4 mb-4 md:mb-0 bg-[#111111]"> {/* Adjusted padding and centered the card */}
          <img
            className="mx-auto object-cover rounded-lg mb-2 grayscale-card"  
            src="fw4.webp"
            alt="Card 1"
          />
          <h2 className="text-lg font-bold mb-2 md:text-xl md:mb-4 text-[#FFCA3A] font-goblin">Wide Range</h2> {/* Adjusted heading size */}
          <p className="text-sm md:text-base mb-4 text-[#FFCA3A]">Hundreds of essential products</p> {/* Adjusted text size */}
        </div>

        <div className="max-w-xs  p-4 md:p-6 rounded-lg shadow-lg mx-auto md:mx-4 mb-4 md:mb-0 bg-[#111111]"> {/* Adjusted padding and centered the card */}
          <img
            className="mx-auto object-cover rounded-lg mb-2 grayscale"  
            src="ad.jpg"
            alt="Card 2"
          />
          <h2 className="text-lg font-bold mb-2 md:text-xl md:mb-4 text-[#FFCA3A] font-goblin">Affordable Prices</h2> {/* Adjusted heading size */}
          <p className="text-sm md:text-base mb-4 text-[#FFCA3A]">Budget-friendly options available</p> {/* Adjusted text size */}
        </div>

        <div className="max-w-xs bg-[#111111] p-4 md:p-6 rounded-lg shadow-lg mx-auto md:mx-4"> {/* Adjusted padding and centered the card */}
          <img
            className="mx-auto object-cover rounded-lg mb-2 grayscale"  
            src="lbj.jpg"
            alt="Card 3"
          />
          <h2 className="text-lg font-bold mb-2 md:text-xl md:mb-4 text-[#FFCA3A] font-goblin">Premium Quality</h2> {/* Adjusted heading size */}
          <p className="text-sm md:text-base mb-4 text-[#FFCA3A]">Top-grade materials and design</p> {/* Adjusted text size */}
        </div>
      </div>
      
    </div>
    </section>
  );
};
export default About