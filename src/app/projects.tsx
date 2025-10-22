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
  const [mummertProjects, setMummertProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Project Data
    const mummertProjects: Project[] = [
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
        image_url: '/images/aa-web.png',
        demo_url: 'https://armummert.github.io/arcane_archive/',
        github_url: 'https://github.com/ARMummert/',
        built_with: 'REACT NATIVE EXPO GO FASTAPI POSTGRESQL'
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
  
    setMummertProjects(mummertProjects);
  }, []);
  
  const projectContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
  projectContainerRef.current?.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className="h-auto w-auto bg-gradient-to-b from-black via-[#121212] to-[#121212]" id="projects">
      <div className="flex flex-row flex-wrap m-5 border-none ref={projectContainerRef}">
          {mummertProjects.map((project) => (
            <div className="flex flex-col flex-wrap justify-content-center items-center m-5 w-[500px] h-[800px] bg-white text-center text-black shadow-[0px_0px_5px_5px_rgba(0,0,0,0.1)] overflow-hidden bg-gradient-to-t from-black via-[#775FA8] to-[#775FA8]" key={project.id}>
              <h3 className="text-white mt-10">{project.name}</h3>
                <a href={formatUrl(project.demo_url)} target="_blank" rel="noopener noreferrer">
                  <Image src={project.image_url} className="drop-shadow-[0px_0px_5px_rgba(0,0,0,0.5)] mt-5 hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-300 ease-in-out"
                       alt="projectimg" width={400} height={200} />
                </a>
              <p className="flex flex-col flex-wrap overflow-wrap-normal white-space-normal word-wrap-break mt-5 w-3/4 text-white">{project.description}</p>
              <div>
                <a href={formatUrl(project.demo_url)} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="text-white hover:text-[#45B4D6] p-4 w-10 h-10 mt-4" icon={faFile} />
                </a>
                <p className="text-white font-semibold">{project.built_with}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectComponent;