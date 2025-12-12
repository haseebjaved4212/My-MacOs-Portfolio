import React, { useRef } from 'react'
import useVariableFontHover from '../hooks/useVariableFontHover';

const renderText = (text, className) => {
  return (
    <span aria-label={text} className={className} style={{ display: 'inline-block' }}>
      {[...text].map((char, index) => (
        <span
          key={index}
          className="hover-char"
          aria-hidden="true"
          style={{
            display: 'inline-block',
            // Default styling handled by hook or CSS, but setting initial state here is good
            transition: 'color 0.2s',
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // Initialize custom hooks
  useVariableFontHover(titleRef, "title");
  useVariableFontHover(subtitleRef, "subtitle");

  return (
    <section className='h-screen w-full relative' id='welcome'>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center select-none flex flex-col items-center justify-center">
        <p ref={subtitleRef} className='text-gray-200'>
          {/* Passing base classes here, font weight handled by hook defaults */}
          {renderText("Hey I'm Haseeb! Welcome to my ", "text-3xl font-georama font-thin")}
        </p>

        <h1 ref={titleRef} className='mt-7 text-gray-200'>
          {renderText("portfolio", "text-9xl italic font-georama font-normal")}
        </h1>
      </div>

      <div className="small-screen block sm:hidden absolute top-10 left-1/2 -translate-x-1/2 bg-red-300/20 backdrop-blur-lg p-3 rounded-md">
        <p className="text-[16px] text-center font-roboto text-gray-400">
          This Portfolio is designed For Desktop/Tablet Screen Only.
        </p>
      </div>

    </section>
  )
}

export default Welcome