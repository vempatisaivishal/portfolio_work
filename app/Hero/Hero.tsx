import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Bitter as BitterFont } from 'next/font/google';

const Bitter = BitterFont({
  weight: '600',
  subsets: ['latin']
});
const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

function Hero() {
  return (
    <div>
    <p className='pb-1 text-4xl font-bold inline border-b-4 border-white text-orange-500  mb-12'>
                Profile  
            &nbsp;
            </p >
    <div className='w-10/12 border-slate-200 min-h-32 text-white rounded-md ms-auto me-auto py-6 px-10 flex justify-between'>
      <div className='inline-block '>

        <Image src={'/images/Mohammed Huzaif Ahmed.jpeg'} height={200} width={200} alt='Moahmmed Huzaif Ahmed' className='rounded-xl ' />
      </div>
      <div className='inline-block w-9/12  py-10 ps-4'>
        <p className={`text-3xl text-blue-400 font-sans m-3 font-bo ${Bitter.className}`}>
          Heyyy! I'm Mohammed Huzaif Ahmed, a third-year student at Keshav Memorial Institute of Technology.

        </p>
        <p className='text-orange-400 m-3 text-center text-lg'>
          Specializing in Data Structures and Algorithms, I am also a proficient full-stack developer with a growing interest in artificial intelligence. Eager to contribute to open-source projects, I bring a solid foundation in software engineering and development. Excited to tackle challenging projects and make meaningful contributions to the tech landscape.

        </p>
      </div>
    </div>
    </div>
  )
}

export default Hero