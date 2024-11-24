import React from 'react';
import { HERO_CONTENT } from '../constants/index.js';

const Hero = () => {
    return (
      <div className="container mx-auto border-b border-neutral-900 pb-4 lg:mb-35 px-4 lg:px-8 min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="pb-8 text-6xl font-thin tracking-light lg:text-8xl">Tom Byrne</h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent leading-relaxed whitespace-nowrap">
            Software Engineer / Student
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter"></p>
        </div>
      </div>
    );
  };
  
export default Hero;
