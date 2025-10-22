"use client";
import "./globals.css";
import "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode, useEffect, useState } from 'react';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from './page.module.css';
import {FaGithub, FaGoogle, FaLinkedin} from "react-icons/fa";

const Footer = ({ children }: { children: ReactNode }) => {
    const [showScroll, setShowScroll] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!showScroll && window.scrollY > 400) {
          setShowScroll(true);
        } else if (showScroll && window.scrollY <= 400) {
          setShowScroll(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [showScroll]);
  
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <>
          <footer className="bottom-0 w-full h-[80px] bg-black text-white text-center z-10">
              <div className="flex flex-row gap-4 w-full items-center justify-center">
                  <a href="https://github.com/ARMummert" target="_blank"
                     className="flex flex-col text-white mt-8 text-2xl hover:text-[#45B4D6]">
                      <FaGithub className=" mb-4 ml-4 w-4 h-4"/>
                  </a>
                  <a href="https://www.linkedin.com/in/armummert" target="_blank"
                     className="flex flex-col text-white mt-8 text-2xl hover:text-[#45B4D6]">
                      <FaLinkedin className="mb-4 w-4 h-4"/>
                  </a>
                  <a href="mailto:armummert4@gmail.com"  target="_blank"
                     className="flex flex-col text-white mt-8 text-2xl hover:text-[#45B4D6]">
                      <FaGoogle className="mb-4 w-4 h-4"/>
                  </a>
                  <button
                      onClick={scrollTop}
                      style={{
                          display: showScroll ? 'flex' : 'none',
                          position: 'fixed',
                          bottom: '5px',
                          right: '5px',
                          backgroundColor: 'transparent',
                          color: 'white',
                          border: 'none',
                          padding: '10px',
                          cursor: 'pointer',
                          justifyContent: 'center',
                          alignItems: 'center',
                      }}
                      aria-label="Scroll to top"
                  >
                      <FontAwesomeIcon icon={faArrowUp}/>
                  </button>
                  <p className="flex justify-center items-center mt-4 p-1 text-[0.8rem] font-semibold uppercase">
                      © 2024 Amy Mummert. All Rights Reserved.</p>
                  <p className="flex justify-center items-center mt-4 p-1 text-[0.8rem] font-semibold uppercase">BUILT
                      WITH - REACT NEXTJS TYPESCRIPT TAILWINDCSS</p>
              </div>
          </footer>
      </>
    );
};

export default Footer;
  