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
                'For the SDLC, I have experience building Web Applications based Waterfall/Agile methodologies with OOP (Object Oriented Programming), following DDD (domain-driven design), MVT (Model View Template), MVC (Model Views Controller), Hexagonal & Clean Architectures, also using Class-Based and Functional Programming.'
              />
              <hr />
              <h2>For the front-end I usually work with: </h2>

              <p>* HTML (HTML 4.01, XHTML, HTML 5)</p>
              <p>* I make the web pretty with CSS (CSS1, CSS2, CSS3 Cross-browsing, pixel perfect concept, validation, FlexBox/Grid) and SASS/LESS prepocessors.</p>
              <p>* JS (DOM, Core, JSON, AJAX, Frameworks: jQuery, Node)</p>
              <p>* Solid experience in using a complex RPC/REST/GraphQL APIs. </p>
              <p> * Significant experience of troubleshooting using JavaScript-based tools like Chrome Developer Console. </p>
              <p> * Build cross-browser and cross-device compatible pages according to W3C standards. </p>
              <p> * Mobile First Development & responsiveness across all cross-platform devices. </p>
              <p> * I have good understanding of On-Page SEO principles. </p>
              <p>* Knowledge in MVC frameworks (j Query, Vue, React, Angular)</p>
              <p>* Great Ability to take visual UX designs (PSD files, AdobeXD, Anima, Figma, Sketch designs) and convert them into semantic and standard compliant web properties. </p>
              <p>* Knowledge of Build Tools and Workflows (examples: Grunt, Gulp, Rake, Ant, Yeoman, Bower, etc.)</p>
              <p>* CMS Templating: CMS platforms (WordPress, Drupal, AEM)</p>
              <p>* Image Manipulation (Photoshop Layers manipulation)</p>
              <p>* Experience with HTTP optimization and monitoring tools (Charles, Fiddler, HttpFox, Network tab)</p>
              <p> * Experience with web performance measurements tools: PageSpeed, YSlow </p>
              <p>* HTML5 Local Storage API</p>
              <p>* Integration with Adobe Analytics / Adobe Dynamic Tag Manager</p>

              <hr />
              <h2>For the back-end I usually work with: </h2>
              <p> *  Django/Python, Node/Express.  </p>

              <p> * MySQL, MongoDB, PostgreSQL, MariaDB, Redis using Python/JavaScript ORMs (Object-Relational Mapper) to manage & model DataBases   </p>
              <p> * Creation of scalable application APIs to support third party integrations   </p>
              <p> *    </p>
              <p> * Experience with RESTful Web Services, APIs, JSON and asynchronous data flow   </p>
              <p> * Experience with request-response API paradigms, which are REST APIs, RPC APIs and GraphQL APIs</p>
              <p> *    </p>
              <p> * Understanding of accessibility and security compliance   </p>

              <p> * Experience with modern serverless architectures   </p>
              <p> * Experience with optimizing database queries   </p>
              <p> * Write unit, integration, and functional test   </p>
              <p> * Strong communication skills to interact with Agile team members   </p>
              <p> * Identify system issues and bugs and provide elegant solutions without performance overheads.  </p>
              <p> * Spend a proportionate amount of time unit testing and reviewing QA and UAT test scripts   </p>
              <p> * Expertise participating in the design, creation, documentation of scalable and secure software.   </p>
              <p> * Exposure/Awareness of APIs / Microservices development.   </p>


              <hr />

              <h2>For SRE & DevOps I usually work with: </h2>

              <p> * Advanced knowledge of Linux-based infrastructures, Linux/Unix administration.   </p>
              <p>*  Knowledge in networking concepts and how it works in cloud platforms </p>
              <p>* Strong experience with AWS and Azure clouds.   </p>
              <p>* Experience with Docker, Kubernetes, Terraform, Ansible, Jenkins, Git, GitHub, GitLab, Bitbucket, etc. </p>
              <p>*  Infrastructure management and CI/CD pipelines, including Git workflows, Jenkins, etc.</p>
              <p> * Knowledge in leveraging CI/CD tools to automate deployment and testing. </p>
              <p>*  Infrastructure as code basics with Terraform and Ansible and thorough knowledge of software
                deployment automation tools. Puppet, Chef. </p>
              <p> * Expertise in software code testing and deployment. </p>
              <p>* Experience with Docker/Kubernetes container architecture</p>
              <p>*  Excellent troubleshooting skills with the ability to spot issues before they become problems. </p>
              <p> * Current with industry trends, IT ops and industry best practices, and able to identify the ones
                we should implement. </p>
              <p>* Experience in fast-paced DevOps environments. </p>
              <p> * Solid team player, with excellent people skills and soft skills. </p>


              <BiCodeAlt className='sobre-card-personicon' size={60} />

              <SobreInfo text={`I have projects and experience in the most popular stacks: `} />
              <h1> LAMP Stack: </h1>
              <SobreInfo text={`Linux | Apache | MySQL | PHP`} />
              {<img src="https://img.icons8.com/color/96/000000/linux--v2.png" alt="12" />}
              <SiApache className='apa-icon' size={96} />
              {<img src="https://img.icons8.com/color/96/000000/mysql-logo.png" alt="12" />}
              {<img src="https://img.icons8.com/dusk/96/000000/php-logo.png" alt="12" />}
              <h1> LEMP Stack: </h1>
              <SobreInfo text={`Linux | Nginx | MySQL | PHP`} />
              {<img src="https://img.icons8.com/color/96/000000/linux--v2.png" alt="12" />}
              {<img src="https://img.icons8.com/color/96/000000/nginx.png" alt="12" />}
              {<img src="https://img.icons8.com/color/96/000000/mysql-logo.png" alt="12" />}
              {<img src="https://img.icons8.com/dusk/96/000000/php-logo.png" alt="12" />}
              <h1> Python Stack: </h1>
              <SobreInfo text={`Django | HTML5 | CSS3 | JavaScript | MySQL`} />
              {<img src="https://img.icons8.com/fluency/65/000000/python.png" alt="12" />}
              {<img src="https://img.icons8.com/color/65/000000/django.png" alt="12" />}
              {<img src="https://img.icons8.com/color/65/000000/html-5--v1.png" alt="12" />}
              {<img src="https://img.icons8.com/color/65/000000/css3.png" alt="12" />}
              {<img src="https://img.icons8.com/color/65/000000/javascript--v1.png" alt="12" />}
              {<img src="https://img.icons8.com/color/65/000000/mysql-logo.png" alt="12" />}
              <h1> MERN JavaScript Stack: </h1>

              <SobreInfo text={`MongoDB/MySQL - Express -  React - Node.js`} />
              {<img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="12" />}
              {<img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt="12" />}
              {<img src="https://img.icons8.com/plasticine/100/000000/react.png" alt="12" />}
              {<img src="https://img.icons8.com/fluency/96/000000/node-js.png" alt="12" />}
              <h1> MEVN JavaScript Stack: </h1>

              <SobreInfo text={`MongoDB/MySQL - Express -  Vue - Node.js`} />
              {<img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="12" />}
              {<img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt="12" />}
              {<img src="https://img.icons8.com/color/96/000000/vue-js.png" alt="12" />}
              {<img src="https://img.icons8.com/fluency/96/000000/node-js.png" alt="12" />}

            </div>

            <div className="contact-card-dmbutton">
              <a
                href="https://onedrive.live.com/?cid=BA9303518C1A2F28&id=BA9303518C1A2F28%215094&parId=root&o=OneUp"
                download
              >
                Downlaod Resume/CV
              </a>
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
