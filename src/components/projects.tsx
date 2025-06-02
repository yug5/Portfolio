import React from 'react'
import { Timeline } from './ui/timeline';
import { Icon } from '@iconify/react';
import Contact from './contact';

export default function projects() {
  
  const data = [
    {
      title: "Plsner",
      content: (
        <div>
          
<p className="mb-4 text-md pr-[30%] font-normal text-white dark:text-neutral-200">
  Built an AI-powered travel planner that generates personalized itineraries based on user-defined destination, budget, and interests.
</p>

<div className="flex items-center flex-wrap gap-4 mb-10 text-white text-sm">

  <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
    <Icon icon="devicon:nextjs" className="text-white w-5 h-5" />
    <span>Next.js</span>
  </div>

  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
    <Icon icon="mdi:robot" className="text-white w-5 h-5" />
    <span>Mistral</span>
  </div>


  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
    <Icon icon="logos:tailwindcss-icon" className="w-5 h-5" />
    <span>Tailwind</span>
  </div>
</div>

          <div >
            <a href="https://plsner.vercel.app/" target="_blank" rel="noopener noreferrer">
 
            <img
              src="img/plsner.png"
              className="w-full h-full rounded-lg shadow-lg transition-all hover:scale-110"
              alt="plsner"
            />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Ben10-Showcase",
      content: (
        <div>
          
<p className="mb-4 text-md pr-[30%] font-normal text-white dark:text-neutral-200">
  Built an AI-powered travel planner that generates personalized itineraries based on user-defined destination, budget, and interests.
</p>

<div className="flex items-center flex-wrap gap-4 mb-10 text-white text-sm">

  <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
    <Icon icon="devicon:nextjs" className="text-white w-5 h-5" />
    <span>Next.js</span>
  </div>

  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
    <Icon icon="mdi:robot" className="text-white w-5 h-5" />
    <span>Mistral</span>
  </div>


  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
    <Icon icon="logos:tailwindcss-icon" className="w-5 h-5" />
    <span>Tailwind</span>
  </div>
</div>

          <div >
            <a href="https://ben10-showcase.vercel.app/" target="_blank" rel="noopener noreferrer">
 
            <img
              src="img/ben10.png"
              className="w-full h-[80%] rounded-lg shadow-lg transition-all hover:scale-110"
              alt="ben10"
            />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Ben10-Showcase",
      content: (
        <div>
          
<p className="mb-4 text-md pr-[30%] font-normal text-white dark:text-neutral-200">
  Built an AI-powered travel planner that generates personalized itineraries based on user-defined destination, budget, and interests.
</p>

<div className="flex items-center flex-wrap gap-4 mb-10 text-white text-sm">

  <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
    <Icon icon="devicon:nextjs" className="text-white w-5 h-5" />
    <span>Next.js</span>
  </div>

  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
    <Icon icon="mdi:robot" className="text-white w-5 h-5" />
    <span>Mistral</span>
  </div>


  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
    <Icon icon="logos:tailwindcss-icon" className="w-5 h-5" />
    <span>Tailwind</span>
  </div>
</div>

          <div >
            <a href="https://expense-tracker-yug.vercel.app/" target="_blank" rel="noopener noreferrer">
 
            <img
              src="img/expense.png"
              className="w-full h-[80%] rounded-lg shadow-lg transition-all hover:scale-110"
              alt="expense"
            />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Portfolio",
      content: (
        <div>
          
<p className="mb-4 text-md pr-[30%] font-normal text-white dark:text-neutral-200">
  Built an AI-powered travel planner that generates personalized itineraries based on user-defined destination, budget, and interests.
</p>

<div className="flex items-center flex-wrap gap-4 mb-10 text-white text-sm">

  <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
    <Icon icon="devicon:nextjs" className="text-white w-5 h-5" />
    <span>Next.js</span>
  </div>

  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
    <Icon icon="mdi:robot" className="text-white w-5 h-5" />
    <span>Mistral</span>
  </div>


  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
    <Icon icon="logos:tailwindcss-icon" className="w-5 h-5" />
    <span>Tailwind</span>
  </div>
</div>

          <div >
            <a href="https://expense-tracker-yug.vercel.app/" target="_blank" rel="noopener noreferrer">
 
            <img
              src="img/port.png"
              className="w-full h-[80%] rounded-lg shadow-lg transition-all hover:scale-110"
              alt="expense"
            />
            </a>
          </div>
        </div>
      ),
    }

    
  ];

  return (
    <div id='projects' >
      <div className="relative rounded-s-3xl w-full  bg-gradient-to-b from-black to-black text-white font-sans ">
        <Timeline data={data} />
      </div>
       
    </div>
      
  );
}
