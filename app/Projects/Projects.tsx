import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Shiksha Ekikaran",
    Description: "A website for an for Government To keep track of the students and their perfomrance in the educational Instititutes so that they can implement better policies for the students",
    Demolink: "",
    Githublink: "",
    imgurl: "/images/shiksha_ekikaran.jpg",
  },
  {
    title: "Text to video convertion using AI",
    Description: "An Ai model which makes use of the text to speech and speech to text model to convert the text to video making boring news intresting",
    Demolink: "https://drive.google.com/file/d/1TROmY4aPNaxLYEIIxaDwTX1djSHeo4sg/view?usp=sharing",
    Githublink: "https://github.com/Huzaif-Ahmed/text_to_video",
    imgurl:"/images/Text_to_video_image.jpg"
  },
  {
    title: "GENORYZA (Research Project)",
    Description: "Predicting the phenotypic effects of mutations in the oryza sativa genome using deep learning models using genotypic characteristics of the plant . Also Published a Research paper",
    Demolink: "https://ijritcc.org/index.php/ijritcc/article/view/9642",
    Githublink: "https://github.com/Huzaif-Ahmed/Agrigenomics",
    imgurl: "/images/agrigenomics1.jpg",
  },
  {
    title:"Fashion Outfit Generator",
    Description:"An AI model which generates the fashion outfit absed on users parameters like their body shape,color,festival and many other characteristics which makes the user to look more fashionable ",
    Demolink:"https://drive.google.com/file/d/18BzqRPsoeB2BtlC4Yw9oHQHfKHs0Nk0h/view?usp=sharing",
    Githublink:"",
    imgurl:"/images/outfit_generator.jpg",
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
      <p className='pb-1 text-4xl font-bold inline border-b-4 border-white text-orange-500 ms-36'>
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