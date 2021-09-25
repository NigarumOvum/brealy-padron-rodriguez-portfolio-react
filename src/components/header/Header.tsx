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
        <h1>Greetings! </h1>

          <img src={ProfileImg} alt=""/>
          <h1> My name is <strong>Brealy Padron</strong>,</h1>
            <h2>
              <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('I am')
                typewriter.typeString(' a Full-Stack <strong>Developer</strong>...')
                .pauseFor(3000)
                .deleteAll()
                typewriter.typeString(' and Site Reliability <strong>Engineer</strong>...')
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
            <p>My strong skills are <strong>Full-Stack Development for </strong>Web Apps & UI. I'm a <strong>Python Software Developer</strong> & also embeded with <strong>DevOps culture</strong>.</p>
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