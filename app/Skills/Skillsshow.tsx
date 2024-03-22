import React from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

// Define a type for the skillset items
type Skill = {
    img: string;
    title: string;

};

// Skillset array with type annotation
const skillset: Skill[] = [
    {
        img: "/images/ccpp.png",
        title: "C/C++"
    },
    {
        img: "/images/java.svg",
        title: "Java"
    },
    {
        img: "/images/Python.png",
        title: "Python"
    },
    {
        img: "/images/htmlandcss.jfif",
        title: "Bootstrap"
    },
    {
        img: "/images/tailwindcss.jfif",
        title: "Tailwind CSS"
    },
    {
        img: "/images/node.png",
        title: "Node.js"
    },
    {
        img: "/images/react-logo.svg",
        title: "React"
    },
    {
        img: "/images/nextjs.png",
        title: "Next.js"
    },
    {
        img: "/images/firebase.png",
        title: "Firebase"
    },
    {
        img: "/images/mongo.png",
        title: "MongoDB"
    },
    {
        img: "/images/postgres.png",
        title: "PostgreSQL"
    },
    {
        img: "/images/mysql.png",
        title: "MySql"
    },
    {
        img: "/images/opencv.png",
        title: "OpenCV"

    },
    {
        img: "/images/hugging face.png",
        title: "Hugging Face"
    }, {
        img: "/images/git.png",
        title: "Git"
    }
];

// Skillsshow component definition
function Skillsshow() {
    return (
        <>
            <p className='pb-1 text-4xl font-bold inline border-b-4 border-white text-orange-500 ms-10'>
                Skills <FontAwesomeIcon icon={faGraduationCap} className='text-4xl inline text-green-500 h-8 ms-3' />
            &nbsp;
            </p>

            <div className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 px-4 mt-8'>
                {skillset.map((skill: Skill, index: number) => (
                    <div className='w-full md:w-1/4 lg:w-1/12 p-2' key={index}>
                        <Card img={skill.img} title={skill.title} index={index}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Skillsshow;
