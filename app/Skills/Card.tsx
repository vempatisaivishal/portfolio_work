'use client';
import React from 'react';
import ReactParallaxTilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  img: string;
  title: string;
  // shadowColor: string;
}


const Card: React.FC<CardProps> = ({ img, title }) => {
  return (
    <ReactParallaxTilt className='h-56 w-56'>
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 1000 }}
        transition={{ duration: 1.0, staggerChildren: 0.2 }}
        className='card h-56 w-56 bg-slate-800 rounded-lg shadow-lg flex flex-col justify-center items-center'
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        // style={{ boxShadow: `0 4px 8px ${shadowColor}` }}
      >
        <div>
          <Image src={img} alt={title} width={200} height={200} />
        </div>
        <div className='text-center text-2xl text-slate-100 h-12 flex items-center justify-center pt-10'>
          {title}
        </div>
      </motion.div>
    </ReactParallaxTilt>
  );
};

export default Card;
