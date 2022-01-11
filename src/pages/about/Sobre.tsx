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
                'I consider myself as a passionate computer science student, always curious and excited about the new technology trends with a relentless attention to details. With strong bias for action and ability to operate independently, communication and orgation skills with an ability to thrive in a fast-paced production deadline-driven environment.'
              />
              <SobreInfo
                text=
                'For the SDLC I have experience with Waterfall / Agile / Kanban / extreme Programming and DevOps (CI/CD) methodology models. I have experience building Web Applications using OOP (Object Oriented Programming), following DDD (domain-driven design), MVT (Model View Template), MVC (Model Views Controller), Hexagonal & Clean Architectures, also using Class-Based and Functional Programming.'
              />
              <SobreInfo
                text=
                'For the STLC I have experience with manual & automated tests at functional, non-functional & maintenance macro-level.'
              />

              <BiCodeAlt className='sobre-card-personicon' size={60} />

              <SobreInfo text={`I have projects and experience in the most popular stacks: `} />
              <h2> LAMP Stack: </h2>
              <SobreInfo text={`Linux | Apache | MySQL | PHP`} />
              {<img src="https://img.icons8.com/color/48/000000/linux--v2.png" alt="12" />}
              <SiApache className='apa-icon' size={48} />
              {<img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="12" />}
              {<img src="https://img.icons8.com/dusk/48/000000/php-logo.png" alt="12" />}
              <h2> LEMP Stack: </h2>
              <SobreInfo text={`Linux | Nginx | MySQL | PHP`} />
              {<img src="https://img.icons8.com/color/48/000000/linux--v2.png" alt="12" />}
              {<img src="https://img.icons8.com/color/48/000000/nginx.png" alt="12" />}
              {<img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="12" />}
              {<img src="https://img.icons8.com/dusk/48/000000/php-logo.png" alt="12" />}
              <h2> Python Stack: </h2>
              <SobreInfo text={`Django | HTML5 | CSS3 | JavaScript | MySQL`} />
              {<img src="https://img.icons8.com/fluency/48/000000/python.png" alt="12" />}
              {<img src="https://img.icons8.com/color/48/000000/django.png" alt="12" />}
              {<img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="12" />}
              {<img src="https://img.icons8.com/color/48/000000/css3.png" alt="12" />}
              {<img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="12" />}
              {<img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="12" />}
              <h2> MERN JavaScript Stack: </h2>

              <SobreInfo text={`MongoDB/MySQL - Express -  React - Node.js`} />
              {<img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="12" />}
              {<img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="12" />}
              {<img src="https://img.icons8.com/plasticine/48/000000/react.png" alt="12" />}
              {<img src="https://img.icons8.com/fluency/48/000000/node-js.png" alt="12" />}
              <h2> MEVN JavaScript Stack: </h2>

              <SobreInfo text={`MongoDB/MySQL - Express -  Vue - Node.js`} />
              {<img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="12" />}
              {<img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="12" />}
              {<img src="https://img.icons8.com/color/48/000000/vue-js.png" alt="12" />}
              {<img src="https://img.icons8.com/fluency/48/000000/node-js.png" alt="12" />}


              <hr />
              <h2>For the front-end I usually work with: </h2>
              <p>CMS Templating: CMS platforms (WordPress, Drupal, AEM, Woocomerce, Shopify, Joomla, etc.)</p>
              <p>Image Manipulation (Photoshop Layers manipulation)</p>
              <p>Great Ability to take visual UX designs (PSD files, AdobeXD, Anima, Figma, Sketch designs) and convert them into semantic and standard compliant web properties. </p>
              <p>HTML5 or PHP </p>
              <p>I make the web pretty with CSS3 (Cross-browsing, pixel perfect concept, validation, FlexBox/Grid)</p>
              <p>I be able to work with SASS/LESS prepocessors</p>
              <p>JavaScript (DOM, Core, JSON, AJAX, Frameworks: jQuery)</p>
              <p> Troubleshooting using JavaScript-based tools like Chrome Developer Console. </p>
              <p> Build cross-browser and cross-device compatible pages according to W3C standards. </p>
              <p> Mobile First Development & responsiveness across all cross-platform devices. </p>
              <p> Good understanding of On-Page SEO principles. </p>
              <p>Solid experience in using a complex RPC/REST APIs. </p>
              <p>HTML5 Local Storage API</p>
              <p>MVC frameworks (Vue, React)</p>
              <p>Knowledge of Build Tools and Workflows (examples: Grunt, Gulp, Rake, Ant, Yeoman, Bower, etc.)</p>
              <p>Experience with HTTP optimization and monitoring tools (Charles, Fiddler, HttpFox, Network tab)</p>
              <p>Experience with web performance measurements tools: PageSpeed, YSlow </p>
              <p> Write unit, integration, and functional test   </p>
              <hr />
              <h2>For the back-end I usually work with: </h2>
              <p> Django/Python, Node/Express.  </p>
              <p> Experience with modern serverless architectures </p>
              <p> MySQL, PostgreSQL, MongoDB, MariaDB using Python/JavaScript ORMs (Object-Relational Mapper) to manage & model DataBases </p>
              <p> Redis for caching DB </p>
              <p> Optimizing database queries   </p>
              <p> Scalable application APIs to support third party integrations   </p>
              <p> RESTful Web Services, APIs, JSON and asynchronous data flow / Microservices development.  </p>
              <p> Request-response API paradigms, which are REST APIs, RPC APIs and GraphQL APIs</p>
              <p> Identify system issues and bugs and provide elegant solutions without performance overheads.  </p>
              <p> Write unit, integration, and functional test   </p>
              <p> Understanding of accessibility and security compliance   </p>
              <p> Expertise participating in the design, creation, documentation of scalable and secure software.   </p>




            </div>
{/* 
            <div className="contact-card-dmbutton">
              <a
                href="https://onedrive.live.com/?cid=BA9303518C1A2F28&id=BA9303518C1A2F28%215094&parId=root&o=OneUp"
                download
              >
                Downlaod Resume/CV
              </a>
            </div> */}

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
