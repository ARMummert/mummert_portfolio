"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';


interface Project {
  id: number;
  name: string;
  description: string;
  image_url: string;
  demo_url: string;
  github_url: string;
  built_with: string;
}

const formatUrl = (url: string) => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
};


const ProjectComponent: React.FC = () => {
  const [sampleProjects, setSampleProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Project Data
    const sampleProjects: Project[] = [
       {
        id: 1,
        name: 'Software Engineer Portfolio',
        description: 'A portfolio website showcasing a software engineers projects. Responsive design for mobile and desktop.',
        image_url: '/images/mummertportfolio.png',
        demo_url: 'https://armummert.github.io/mummert_portfolio/',
        github_url: 'https://github.com/ARMummert/',
        built_with: 'REACT NEXTJS TYPESCRIPT TAILWINDCSS'
      },
      {
        id: 2,
        name: 'Arcane Archive',
        description: 'A collection of resources for Magic: The Gathering Players. Includes a card search feature and deck builder.',
        image_url: '/images/arcanearchive.png',
        demo_url: 'https://armummert.github.io/arcane_archive/',
        github_url: 'https://github.com/ARMummert/',
        built_with: 'REACT NEXTJS TYPESCRIPT TAILWINDCSS FASTAPI POSTGRESQL'
      },
      {
        id: 6,
        name: 'Temperature Conversion Microservice',
        description: 'A temperature conversion tool that converts Fahrenheit, Celsius, and Kelvin.',
        image_url: '/images/project1.png',
        demo_url: 'https://armummert.github.io/temp_conversion/',
        github_url: 'https://github.com/ARMummert/temp_conversion',
        built_with: 'NODEJS'
      },
      {
        id: 8,
        name: 'Dog Training App & Newsletter Microservice',
        description: 'A user friendly dog training application and newsletter microservice.',
        image_url: '/images/dogwebappportfolio2.png',
        demo_url: 'https://github.com/ARMummert/',
        github_url: 'https://github.com/ARMummert/',
        built_with: 'PYTHON DJANGO DOCKER POSTGRESQL RABBITMQ'
      },
    ];
  
    setSampleProjects(sampleProjects);
  }, []);
  
  const projectContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
  projectContainerRef.current?.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className="h-auto">
      <div className="flex flex-row flex-wrap justify-center items-center m-5 bg-black w-screen p-0 border-none ref={projectContainerRef}">
          {sampleProjects.map((project) => (
            <div className="flex flex-col flex-wrap justify-center items-center ml-10 rounded-lg w-[550px] h-[600px] bg-white font-montserrat text-center text-black shadow-[0px_0px_5px_5px_rgba(0,0,0,0.1)] overflow-hidden bg-gradient-to-t from-black via-[#775FA8] to-[#775FA8]" key={project.id}>
              <h3 className="justify-center items-center mt-8 text-xl text-wrap text-white">{project.name}</h3>
              <a href={formatUrl(project.demo_url)} target="_blank" rel="noopener noreferrer">
                <Image src={project.image_url} className="flex drop-shadow-[0px_0px_5px_rgba(0,0,0,0.2)] mt-5 w-[350px] h-[250px] relative z-10 rounded-lg"
                       alt="projectimg" width={600} height={400} />
              </a>
              <p className="flex flex-col flex-wrap overflow-wrap-normal white-space-normal word-wrap-break mt-5 w-3/4 text-white text-xl">{project.description}</p>
              <div>
                <a href={formatUrl(project.demo_url)} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="text-white hover:text-[#45B4D6] p-4 w-10 h-10 mt-4" icon={faFile} />
                </a>
                <a href={formatUrl(project.github_url)} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="text-white hover:text-[#45B4D6] p-4 w-10 h-10 mt-4" icon={faGithub} />
                </a>
              </div>
              <div><p className="text-white font-semibold">{project.built_with}</p></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectComponent;