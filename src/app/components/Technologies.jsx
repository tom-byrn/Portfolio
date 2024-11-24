import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { SiPython } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';



const Technologies = () => {
  return( <div className='border-b border-neutral-800 pb-24 '>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400 '/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiJavascript className='text-7xl text-yellow-300 '/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiHtml5 className='text-7xl text-red-500 '/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-7xl text-sky-300 '/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPython className='text-7xl text-amber-300 '/>
            </div>
        </div>
    </div>
    );
}

export default Technologies