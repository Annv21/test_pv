import React, { useState } from 'react';
import backgroundImage from '../assets/anh/anh3.png';

function Review() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviews = [
    {
      content: "Customer support is super fast and super nice. It has been a few years since I touched a website so I am dusting off my cobwebs and I am not feeling bad about asking questions! Thank you guys!",
      author: "— LUCKYY7 FIREMASTER",
    },
    {
      content: "Haven't even finished my project yet and have already decided that this has to be one of the best themes I've ever had the pleasure of working with. It's delightfully creative and bold in ways no other theme appears to be. Huge kudos for taking the risk and releasing something for a small niche — absolutely amazing work.",
      author: "— PDUESTERDIEK HYPERBENT",
    },
    {
      content: "Love this theme! I'm still working on it and having some questions here and there, but the Customer Support team answers them in a timely manner and explains it clearly. Very helpful for a beginner like me.",
      author: "— MMORITAI (Kayo)",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="relative bg-cover bg-center py-40" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white/80 mb-8" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Making Music Themes Since 2011
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-white">Latest Music Theme Reviews</h3>
        <div className="relative w-full">
          <div className="relative h-60 overflow-hidden md:h-80 "> {/* Overlay mờ để text nổi bật */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center px-4 z-10">
                <p className="text-sm leading-relaxed mb-2">{reviews[currentSlide].content}</p>
                <p className="text-xs italic">{reviews[currentSlide].author}</p>
              </div>
            </div>
          </div>
          {/* Nút Previous */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 z-20 transform -translate-y-1/2 px-4 text-white focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </span>
          </button>
          {/* Nút Next */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 z-20 transform -translate-y-1/2 px-4 text-white focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </span>
          </button>
          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/30'}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;