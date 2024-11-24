import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiPython } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiJava className='text-7xl text-red-500' /> {/* Deep red for Java */}
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPython className='text-7xl text-blue-400' /> {/* Light blue for Python */}
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-teal-400' /> {/* Teal for React */}
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiJavascript className='text-7xl text-yellow-500' /> {/* Soft yellow for JS */}
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiHtml5 className='text-7xl text-orange-400' /> {/* Orange for HTML */}
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTailwindcss className='text-7xl text-blue-300' /> {/* Sky blue for Tailwind */}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
