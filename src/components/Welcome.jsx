import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';




const FONT_WEIGHTS = {
  subtitle: {
    min: 100,
    max: 400,
    default: 100,
  },
  title: {
    min: 400,
    max: 900,
    default: 400,
  }
}
const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, index) => {
    return (
      <span
        key={index}
        className={className}
        style={{
          fontWeight: baseWeight,
          display: 'inline-block'
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    )
  })
}

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max } = FONT_WEIGHTS[type];

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;

    letters.forEach((letter) => {
      const { left, width } = letter.getBoundingClientRect();
      const letterCenter = left + width / 2;
      const distance = Math.abs(mouseX - letterCenter);

      // Calculate intensity based on distance (sigma approx 100px -> 10000)
      const intensity = Math.exp(-(distance * distance) / 10000);
      const targetWeight = min + (max - min) * intensity;

      gsap.to(letter, {
        fontWeight: targetWeight,
        color: intensity > 0.5 ? 'white' : '#e5e7eb', // e5e7eb is gray-200
        duration: 0.25,
        ease: "power2.out",
        overwrite: 'auto'
      });
    });
  };

  const handleMouseLeave = () => {
    gsap.to(letters, {
      fontWeight: min,
      color: '#e5e7eb',
      duration: 0.5,
      ease: "power2.out",
      overwrite: 'auto'
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  // Return cleanup function
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};


const Welcome = () => {

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const cleanupTitle = setupTextHover(titleRef.current, "title");
    const cleanupSubtitle = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      if (cleanupTitle) cleanupTitle();
      if (cleanupSubtitle) cleanupSubtitle();
    }
  }, []);
  return (
    <section className='' id='welcome'>
      <p ref={subtitleRef}>
        {renderText("Hey I'm Haseeb! Welcome to my ", "text-3xl font-georama ", 100)}

      </p>
      <h1 ref={titleRef} className='mt-7 '>
        {renderText("portfolio", "text-9xl italic font-georama ")}
      </h1>
      <div className="small-screen ">
        <p>this Portfolio is designed For Desktop/tablet Screen Only. </p>
      </div>

    </section>
  )
}

export default Welcome