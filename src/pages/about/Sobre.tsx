import React from 'react';

import { TiUserOutline } from 'react-icons/ti';
import { BiCodeAlt } from 'react-icons/bi';
import { SiApache } from 'react-icons/si';

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
            <SobreInfo text='I consider myself an enthusiastic learner, and active student with a keen interest in new technological trends, in helping others find the most effective solution to their technical problems. In addition, I always seek progress through the acquisition of new skills and knowledge' />
            
            <BiCodeAlt className='sobre-card-personicon' size={60} />

            <SobreInfo text={`I have projects and experience in the most popular stacks: `} />   

            <SobreInfo text={`LAMP Stack: Linux | Apache | MySQL | PHP`} />    
            { <img src="https://img.icons8.com/color/96/000000/linux--v2.png" alt="12"/>}
            <SiApache className='apa-icon' size={96} />
            { <img src="https://img.icons8.com/color/96/000000/mysql-logo.png" alt="12"/> }
            { <img src="https://img.icons8.com/dusk/96/000000/php-logo.png" alt="12"/> }
            <SobreInfo text={`LEMP Stack: Linux | Nginx | MySQL | PHP`} />          
            { <img src="https://img.icons8.com/color/96/000000/linux--v2.png" alt="12"/>}
            { <img src="https://img.icons8.com/color/96/000000/nginx.png" alt="12"/> } 
            { <img src="https://img.icons8.com/color/96/000000/mysql-logo.png" alt="12"/> }
            { <img src="https://img.icons8.com/dusk/96/000000/php-logo.png" alt="12"/> }
            <SobreInfo text={`Python stack: Django | HTML5 | CSS3 | JavaScript | MySQL`} /> 
            {<img src="https://img.icons8.com/fluency/65/000000/python.png" alt="12"/> }
            { <img src="https://img.icons8.com/color/65/000000/django.png" alt="12" /> }
            { <img src="https://img.icons8.com/color/65/000000/html-5--v1.png" alt="12" /> }
            { <img src="https://img.icons8.com/color/65/000000/css3.png" alt="12"/> }
            { <img src="https://img.icons8.com/color/65/000000/javascript--v1.png"alt="12" /> }
            { <img src="https://img.icons8.com/color/65/000000/mysql-logo.png" alt="12"/> }

            <SobreInfo text={`MERN JavaScript stack- MongoDB/MySQL - Express -  React - Node.js`} /> 
            { <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt="12"/> }
            { <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="12"/> }
            { <img src="https://img.icons8.com/plasticine/100/000000/react.png" alt="12"/> }
            { <img src="https://img.icons8.com/fluency/96/000000/node-js.png" alt="12"/>}

            <SobreInfo text={`MEVN JavaScript stack: - MongoDB/MySQL - Express -  Vue - Node.js`} />    
            { <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt="12"/> }
            { <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="12"/> }
            { <img src="https://img.icons8.com/color/96/000000/vue-js.png" alt="12"/> }
            { <img src="https://img.icons8.com/fluency/96/000000/node-js.png" alt="12"/>}  

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
