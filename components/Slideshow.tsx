"use client";
import React, { useState } from "react";

const items = ["saman", "nkke", "santha", "senrath", "semira", "gotabaya"];

const Slideshow = () => {
  const [startIndex, setStartIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = startIndex + 3;
    if (newIndex < items.length) {
      setStartIndex(newIndex);
    } else {
      // If we reach the end, loop back to the beginning
      setStartIndex(0);
    }
  };

  return (
    <div className="slideshow-container">
      <div className="slides" style={{ transform: `translateX(-${startIndex * 100}%)` }}>
        {items.slice(startIndex, startIndex + 3).map((item, index) => (
          <div className=" w-[200px] h-[200px] border-2 border-red-400">
            <h1>{item}</h1>
          </div>
        ))}
      </div>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
