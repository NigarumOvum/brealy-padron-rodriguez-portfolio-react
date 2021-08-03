import React from "react";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

import ProfileImg from '../../media/images/profile-image.jpeg';

import './style.css';

export function Header() {
  return (
    <>
     <section id='header-mainpage'>
      <div className='header-mainpage-container'>
        <div className='header-mainpage-title'>
          <img src={ProfileImg} alt=""/>
          <h1>Hi! My name is <strong>Brealy Padron</strong>,</h1>
            <h2>
              <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('I am')
                typewriter.typeString(' a Front-End <strong>Developer</strong>...')
                .pauseFor(3000)
                .deleteAll()
                typewriter.typeString(' and Back-End <strong>Developer</strong>...')
                .pauseFor(5000)
                .start()
              }}
              options={{
                delay: 60,
                autoStart: true,
                loop: true,
                cursor: '|',
                wrapperClassName: 'header-mainpage-title-type-wraper',
              }}
            />
            </h2>
            <p>My strong skills are <strong>HTML5, CSS3, JavaScript,</strong><strong>ReactJS (and Native), Django</strong> y <strong>NetDevOps|Devops</strong>.</p>
        </div>
    

          <div className='header-buttons'>
            <a className='continuesee-button' href="/#projects">Projects</a>
            <Link to="/about" className='seemore-button'>More about me</Link>
          </div>

      </div>      
      </section>

    </>
  );
}