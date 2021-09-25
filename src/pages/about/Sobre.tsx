import React from 'react';

import { TiUserOutline } from 'react-icons/ti';
import { BiCodeAlt } from 'react-icons/bi';
import { SiHtml5, SiJavascript, SiReact, SiDjango, SiPython, SiMysql, SiApache, SiNginx, SiLinux, SiNodeDotJs, SiVueDotJs, SiPhp, SiMongodb, SiCss3 } from 'react-icons/si';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import SobreInfo from '../../components/sobre/SobreInfo';
import BackTop from '../../components/backtop/BackTop';

import ProfileImg from '../../media/images/profile-image.jpeg';
import './style/sobre.css';
import BackHome from '../../components/backtohome/BackHome';


function Sobre() {
  return (
    <>

    <Navbar />
    <section id='sobre'>
      <div className='sobre-container'>

        <div className='sobre-card'>

          <div className='sobre-card-images'>
            <img src={ProfileImg} className='sobre-card-image image-1' alt='Profile' />
          </div>
          <div className='sobre-card-title'>
            <h1>A few things <strong> about me</strong></h1>
          </div>
          <div className='sobre-card-information'>
            
            <TiUserOutline className='sobre-card-personicon' size={60} />
            <SobreInfo text='I consider myself an enthusiastic learner, and active student with a keen interest in new technological trends, in helping others find the most effective solution to their technical problems. In addition, I always seek progress through the acquisition of new skills and knowledge; and thus, complement my professional training and personal growth, with labor trends. ' />
            
            <BiCodeAlt className='sobre-card-personicon' size={60} />

            <SobreInfo text={`I have projects and experience in the most popular stacks: `} />   

            <SobreInfo text={`LAMP Stack: Linux | Apache | MySQL | PHP`} />        
            <SiLinux className='linx' size={50} /> <SiApache className='apa-icon' size={50} />
            <SiMysql className='mys' size={50} /> <SiPhp className='ph' size={50} />  

            <SobreInfo text={`LEMP Stack: Linux | Nginx | MySQL | PHP`} />          
            <SiLinux className='linx' size={50} /> <SiNginx className='nginx-icon' size={50} />
            <SiMysql className='mys' size={50} /> <SiPhp className='ph' size={50} />

            <SobreInfo text={`Python stack: Django | HTML5 | CSS3 | JavaScript | MySQL`} /> 
            <SiPython className='py' size={50} /> <SiDjango className='dj' size={50} />
            <SiHtml5 className='html5' size={50} /> <SiCss3 className='cs' size={50} /> 
            <SiJavascript className='js-icon' size={50} /> <SiMysql className='mys' size={50} />

            <SobreInfo text={`MERN JavaScript stack- MongoDB/MySQL - Express -  React - Node.js`} /> 
            <SiJavascript className='js-icon' size={50} /> <SiMongodb className='mong-icon' size={50} />
            <SiReact className='reac' size={50} /> <SiNodeDotJs className='nod' size={50} />

            <SobreInfo text={`MEVN JavaScript stack: - MongoDB/MySQL - Express -  Vue - Node.js`} />    
            <SiJavascript className='js-icon' size={50} /> <SiMongodb className='mong-icon' size={50} />
            <SiVueDotJs className='vu' size={50} /> <SiNodeDotJs className='nod' size={50} />      

          </div>
          
          <BackHome />

        </div>
      </div>
    </section>

    <Footer />

    <BackTop />

    </>
  )
}

export default Sobre;
