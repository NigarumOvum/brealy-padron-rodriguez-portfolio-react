import React from "react";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

import ProfileImg from '../../media/images/profile-image.jpeg';

import './style.css';
import Gradient from 'rgt';

export function Header() {
  return (
    <>
      <section id='header-mainpage'>
        <div className='header-mainpage-container'>
          <div className='header-mainpage-title'>
            <h1>My name is </h1>
            <img src={ProfileImg} alt="" />
            <h1> <strong>Brealy Padrón Rodríguez</strong></h1>
            <h1>...and <strong>
              <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
                I'm
              </Gradient>
            </strong></h1>
            <h2>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(' a Full-Stack <strong>Developer</strong>...')
                    .pauseFor(1500)
                    .deleteAll()
                  typewriter.typeString(' and a Site Reliability<strong> Engineer (DevOps)</strong>...')
                    .pauseFor(3500)
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
            <p>
              I consider myself as a passionate computer science student, always curious and excited about the new technology trends with a relentless attention to details. With strong bias for action and ability to operate independently, communication and organization skills with an ability to thrive in a fast-paced production deadline-driven environment.
            </p>
          </div>


          <div className='header-buttons'>
            <a className='continuesee-button' href="/#projects">Projects</a>
            <Link to="/about" className='seemore-button'>More about my skills</Link>
          </div>

        </div>
      </section>

    </>
  );
}