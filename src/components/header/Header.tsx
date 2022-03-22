import React from "react";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

import ProfileImg from '../../media/images/profile-image.jpg';

import './style.css';

export function Header() {
  return (
    <>
      <section id='header-mainpage'>
        <div className='header-mainpage-container'>
          <div className='header-mainpage-title'>
            <h1>I'm Brealy Padrón Rodríguez </h1>
            <img src={ProfileImg} alt="" />
            <h2> <strong></strong></h2>
            <h2>...and <strong>
                I'm
            </strong></h2>
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
              {/*  */}
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