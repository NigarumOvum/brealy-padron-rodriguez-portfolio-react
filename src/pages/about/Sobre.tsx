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
            <SobreInfo 
            text=
    'I have experience building Web Applications based in OOP (Object Oriented Programming), following MVT (Model View Template), MVC (Model Views Controller) using ORM (Object-Relational Mapper) to manage & model DBs, also DDD (domain-driven design), Hexagonal & Clean Architectures. Using Class-Based and Functional Programming.' 
          />
            <hr />
            <SobreInfo
            text= 'For the front-end I usually work with popular frameworks like jQuery/React/Vue.'
            />
            
            <p> Great Ability to take visual UX designs (PSD files, AdobeXD, Anima, Figma, Sketch designs) and convert them into semantic and standard compliant web properties.  </p>
            <p>  Build cross-browser and cross-device compatible pages according to W3C standards. </p>
            <p>   I also make the web pretty by using CSS (FlexBox/Grid) and SASS/LESS prepocessors. Do responsiveness across all cross-platform devices UI layouts. </p>
            <p>  I have good understanding of On-Page SEO principles. </p>
            <p>   Solid experience in using a complex REST API from the client-side </p>
            <p>   Significant experience of troubleshooting using JavaScript-based tools like Chrome Developer Console. </p>
            <hr />

             <SobreInfo
            text=
            'For the back-end I have experience in Django/Python, Node/Express.'
            />
          
            <SobreInfo
            text=
            'For the DBs I know how to work with MySQL, MongoDB, PostgreSQL, MariaDB, Redis using Python/JavaScript'
/>
<SobreInfo
            text=
            ' Exposure to DevOps and Continuous Integration/Delivery pipeline, including Git, Jenkins, etc.'
            />
            <BiCodeAlt className='sobre-card-personicon' size={60} />

            <SobreInfo text={`I have projects and experience in the most popular stacks: `} />   
<h1> LAMP Stack: </h1>
            <SobreInfo text={`Linux | Apache | MySQL | PHP`} />    
            { <img src="https://img.icons8.com/color/96/000000/linux--v2.png" alt="12"/>}
            <SiApache className='apa-icon' size={96} />
            { <img src="https://img.icons8.com/color/96/000000/mysql-logo.png" alt="12"/> }
            { <img src="https://img.icons8.com/dusk/96/000000/php-logo.png" alt="12"/> }
            <h1> LEMP Stack: </h1>
            <SobreInfo text={`Linux | Nginx | MySQL | PHP`} />          
            { <img src="https://img.icons8.com/color/96/000000/linux--v2.png" alt="12"/>}
            { <img src="https://img.icons8.com/color/96/000000/nginx.png" alt="12"/> } 
            { <img src="https://img.icons8.com/color/96/000000/mysql-logo.png" alt="12"/> }
            { <img src="https://img.icons8.com/dusk/96/000000/php-logo.png" alt="12"/> }
            <h1> Python Stack: </h1>
            <SobreInfo text={`Django | HTML5 | CSS3 | JavaScript | MySQL`} /> 
            {<img src="https://img.icons8.com/fluency/65/000000/python.png" alt="12"/> }
            { <img src="https://img.icons8.com/color/65/000000/django.png" alt="12" /> }
            { <img src="https://img.icons8.com/color/65/000000/html-5--v1.png" alt="12" /> }
            { <img src="https://img.icons8.com/color/65/000000/css3.png" alt="12"/> }
            { <img src="https://img.icons8.com/color/65/000000/javascript--v1.png"alt="12" /> }
            { <img src="https://img.icons8.com/color/65/000000/mysql-logo.png" alt="12"/> }
            <h1> MERN JavaScript Stack: </h1>

            <SobreInfo text={`MongoDB/MySQL - Express -  React - Node.js`} /> 
            { <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="12"/> }
            { <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt="12"/> }
            { <img src="https://img.icons8.com/plasticine/100/000000/react.png" alt="12"/> }
            { <img src="https://img.icons8.com/fluency/96/000000/node-js.png" alt="12"/>}
            <h1> MEVN JavaScript Stack: </h1>

            <SobreInfo text={`MongoDB/MySQL - Express -  Vue - Node.js`} />    
            { <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="12"/> }
            { <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt="12"/> }
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
