import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  title: string;
  author: string;
  tags: string[];
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, author, tags, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        src={imageUrl}
        alt="Fashion"
        className="w-full"
        width={400}
        height={540}
        objectFit="cover"
      />
      <div className="px-6 py-4 bg-black bg-opacity-50 text-white">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{author}</p>
        <div className="pt-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
