import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Advance Fake news detection",
    Description: "An AI-powered tool that separates fact from fiction, empowering users to identify and combat misinformation across the web.",
    Demolink: "",
    Githublink: "https://github.com/vempatisaivishal/GlobalTruthHub",
    imgurl: "/images/fakenews.png",
  },
  {
    title: "Crop Damage Estimation",
    Description: "A cutting-edge AI system leveraging MSCANet for precise crop damage assessment, enabling data-driven decision-making and optimized agricultural practices",
    Demolink: "",
    Githublink: "",
    imgurl:"/images/cropdamage.png"
  },
  {
    title: "Expense Tracker",
    Description: "A sleek and user-friendly expense tracking application built with Next.js, Tailwind CSS, Clerk authentication, and Drizzle ORM, empowering you to effortlessly monitor and manage your finances.",
    Demolink: "",
    Githublink: "",
    imgurl: "/images/expensetracker.png",
  },
  {
    title:"Doctor Appointment System",
    Description:"An intuitive and user-friendly doctor appointment system built with React, Strapi, and Tailwind CSS, streamlining the process of scheduling medical consultations and ensuring a seamless experience for both patients and healthcare providers",
    Demolink:"",
    Githublink:"",
    imgurl:"/images/doctorbooking.png",
  }
  
];

type Project = {
  title: string;
  Description: string;
  Demolink: string;
  Githublink: string;
  imgurl: string;
}

function Projects() {
  return (
    <>
      <p className='pb-1 text-4xl font-bold inline border-b-4 border-white text-orange-500 '>
        projects <FontAwesomeIcon icon={faBriefcase} className='text-4xl inline text-green-500 h-8 ms-3' />
        &nbsp;
      </p>

      <div className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 px-4 mt-8'>
        {projects.map((project: Project, index: number) => (
          <div className='w-full md:w-1/2 lg:w-1/3 p-2' key={index}>
            <ProjectCard
              title={project.title}
              Description={project.Description}
              demoLink={project.Demolink}
              githubLink={project.Githublink}
              imageUrl={project.imgurl}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects