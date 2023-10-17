"use client"

import React, { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      image: {
        src: "webs.jpg", // Add the URL to your first image
        alt: "Alt text for image 1"
      },
      description:
        "Equipify’s innovative hospital equipment has given our facility a significant competitive edge in the industry, attracting more patients than ever.",
      footer: "Fortis Hospital",
    },
    {
      image: {
        src: "webs2.jpg", // Add the URL to your second image
        alt: "Alt text for image 2"
      },
      description: "Item 2 Description",
      footer: "Subject 2",
    },
    {
      image: {
        src: "webs3.jpg", // Add the URL to your third image
        alt: "Alt text for image 3"
      },
      description: "Item 3 Description",
      footer: "Subject 3",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <section id="testimonials">
      <div>
        <h1 className="font-goblin text-[#FFCA3A] text-2xl bg-black text-center pt-10">
          Check out what our customers
          <br /> have to say about our products
        </h1>

        <div className="bg-black pt-20 pb-28">
          <div className="max-w-xl mx-auto relative pl-20 pr-20">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div
                className="flex transition-transform duration-300 ease-in"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {carouselItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 bg-[#111111] p-6"
                  >
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      className="mx-auto mb-4"
                    />
                    <p className="text-md mb-2 text-[#FFCA3A] pl-5">
                      {item.description}
                    </p>
                    <p className="text-[#FFCA3A] pl-5 text-xl">{item.footer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full">
              <button
                onClick={prevSlide}
                className="text-white text-2xl animate-bounce hover:text-gray-300 px-4 focus:outline-none"
              >
                &#8249;
              </button>
              <button
                onClick={nextSlide}
                className="text-white animate animate-bounce text-2xl hover:text-gray-300 px-4 focus:outline-none"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-black pb-16">
          <h1 className="text-[#FFCA3A] text-4xl font-goblin text-center">
            Join The Revolution
          </h1>
          <p className="text-[#FFCA3A] pt-7 text-center">
            Ready to take your hospital’s equipment game to the next level?
            <br /> Embark on this thrilling journey and explore our products
            today!
          </p>
          <button className="btn relative block mt-7 mx-auto  overflow-hidden font-medium transition-all bg-[#FFCA3A] rounded hover:bg-white group w-32 h-8">
            <span className="w-56 h-48 rounded bg-[#3E8989] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-[#111111] transition-colors duration-300 ease-in-out group-hover:text-[#111111]">
              Explore!
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
