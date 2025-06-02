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

          <div>
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
            A nostalgic showcase gallery of classic Ben 10 aliens, created for fun and to relive childhood memories with a visually engaging interface.
          </p>

          <div className="flex items-center flex-wrap gap-4 mb-10 text-white text-sm">
            <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="devicon:nextjs" className="text-white w-5 h-5" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="logos:tailwindcss-icon" className="w-5 h-5" />
              <span>Tailwind</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="logos:typescript-icon" className="w-5 h-5" />
              <span>TypeScript</span>
            </div>
          </div>

          <div>
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
      title: "Expense Tracker",
      content: (
        <div>
          <p className="mb-4 text-md pr-[30%] font-normal text-white dark:text-neutral-200">
            Built an expense and income tracker with user login and persistent data storage. Users can securely manage and visualize their finances.
          </p>

          <div className="flex items-center flex-wrap gap-4 mb-10 text-white text-sm">
            <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="devicon:nextjs" className="text-white w-5 h-5" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="logos:firebase" className="w-5 h-5" />
              <span>Firebase</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="logos:tailwindcss-icon" className="w-5 h-5" />
              <span>Tailwind</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="logos:typescript-icon" className="w-5 h-5" />
              <span>TypeScript</span>
            </div>
          </div>

          <div>
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
            A developer portfolio that showcases my projects, coding activity, and skills. Designed with clean UI, animations, and modern layout components.
          </p>

          <div className="flex items-center flex-wrap gap-4 mb-10 text-white text-sm">
            <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="devicon:nextjs" className="text-white w-5 h-5" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="logos:tailwindcss-icon" className="w-5 h-5" />
              <span>Tailwind</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="logos:typescript-icon" className="w-5 h-5" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="simple-icons:aceternity" className="w-5 h-5" />
              <span>Aceternity</span>
            </div>
          </div>

          <div>
            <a href="https://your-portfolio-link.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                src="img/port.png"
                className="w-full h-[80%] rounded-lg shadow-lg transition-all hover:scale-110"
                alt="portfolio"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Paws & Hearts",
      content: (
        <div>
          <p className="mb-4 text-md pr-[30%] font-normal text-white dark:text-neutral-200">
            A pet adoption center web app with both client and admin panels; admins can manage pet listings while clients browse pets by category, request adoptions, and take quizzes to find their perfect pet match.
          </p>
          <div className="flex items-center flex-wrap gap-4 mb-10 text-white text-sm">
            <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="logos:html-5" className="w-5 h-5" />
              <span>HTML</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="logos:tailwindcss-icon" className="w-5 h-5" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="logos:php" className="w-5 h-5" />
              <span>PHP</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="logos:mysql" className="w-5 h-5" />
              <span>MySQL</span>
            </div>
          </div>
          <div>
            <a href="https://pawsandhearts.example.com" target="_blank" rel="noopener noreferrer">
              <img
                src="img/pawshearts.png"
                className="w-full h-[80%] rounded-lg shadow-lg transition-all hover:scale-110"
                alt="paws & hearts"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Flood Management System (FMS)",
      content: (
        <div>
          <p className="mb-4 text-md pr-[30%] font-normal text-white dark:text-neutral-200">
            Disaster preparedness and response app to help individuals and communities mitigate flood risks effectively.
          </p>

          <div className="flex items-center flex-wrap gap-4 mb-10 text-white text-sm">
            <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="devicon:kotlin" className="w-5 h-5" />
              <span>Kotlin</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="devicon:android" className="w-5 h-5" />
              <span>Android Studio</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white hover:scale-105 transition-transform duration-200">
              <Icon icon="logos:xml" className="w-5 h-5" />
              <span>XML</span>
            </div>
          </div>

          <div>
            <a href="https://fms.example.com" target="_blank" rel="noopener noreferrer">
              <img
                src="img/fms.png"
                className="w-full h-[100%] rounded-lg shadow-lg transition-all hover:scale-110"
                alt="fms"
              />
            </a>
          </div>
        </div>
      ),
    },

  ];

  return (
    <div id='projects' >
      <div className="relative rounded-s-3xl w-full  bg-gradient-to-b from-black to-black text-white font-sans ">
        <Timeline data={data} />
      </div>
       
    </div>
      
  );
}
