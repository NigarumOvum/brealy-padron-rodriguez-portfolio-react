import React from 'react';

import { TiUserOutline } from 'react-icons/ti';
import { BiCodeAlt } from 'react-icons/bi';
import { SiApache } from 'react-icons/si';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import SobreInfo from '../../components/sobre/SobreInfo';
import BackTop from '../../components/backtop/BackTop';

import ProfileImg from '../../media/images/profile-image.jpg';
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
                text='I consider myself as a passionate computer science student, always curious and excited about the new technology trends with a relentless attention to details. With strong bias for action and ability to operate independently, sharpen communication and organization skills with an ability to thrive in a fast-paced production deadline-driven environment. '
              />
              <SobreInfo
                text=
                'For the SDLC I have experience with Waterfall/Agile/scrum/Kanban methodologies. Building Web Applications using many design patterns such as: MVC (Model Views Controller), MVVM (Model ViewModel View), MVP (Model View Presenter) and MVT (Model View Template). Also, use programming paradigms such as: OOP (Object Oriented Programming), DDD (domain-driven design) and architectural patterns such as: Layered, Pipe-Filter, Client-Server, Event Bus, Microservices, Broken, Peer-To-Peer, Black Board and Master-Slave. '
              />
              <SobreInfo
                text=
                'For the STLC I have experience with manual and automated tests at functional, non-functional & maintenance macro-level.'
              />

              <BiCodeAlt className='sobre-card-personicon' size={60} />

              <hr />
              
              <SobreInfo text={`Design and Development Principles:`} />  <p>GOF, DDD, TDD, SOLID, KISS, YAGNI, DRY.</p>
<SobreInfo text={`VSC:`} />  <p>Git (Github, Gitlab, Bitbucket)  </p>
<SobreInfo text={`Git:`} />  <p>Commit, Pull, Branch, Merging.  </p>
<SobreInfo text={`CI/CD:`} />  <p>GitHub Actions, GitLab CI, Jenkins </p>

              
              <h2>Front End</h2>
 <p> Great Ability to take visual UX designs (PSD files, AdobeXD, Anima, Figma, Sketch designs) and convert them into semantic and standard compliant web properties.  </p>
              
 <SobreInfo text={`CMS Templating:`} /> <p>CMS platforms (WordPress, Drupal, AEM, Woocomerce, Shopify, Joomla, etc.)  </p>

 <SobreInfo text={`Headless CMS:`} /> <p> React integration (Sanity, Strapi, Contentful, GraphCMS, ButterCMS, Directs, Agility). </p>

<p>HTTP optimization and monitoring tools (Charles, Fiddler, HttpFox, Network tab from develoepr tools) </p>

<SobreInfo text={`HTML/HTML5:`} /> <p> Forms and validations, Accessibility, SEO principles, Local Storage API, Conventions and Best practices.  </p>

<SobreInfo text={`CSS:`} /> <p> Cross-browsing, pixel perfect concept, Floats, Positioning, Display, Box Model, CSS grid/FlexBox, BEM (block element modifier), Making Layouts (Mobile First Development & responsiveness across all cross-platform devices using Media Queries).  </p>

<SobreInfo text={`CSS Frameworks:`} /> <p>Bootstrap, Bulma, Tailwind CSS, Chakra UI, Material UI. </p>
              
<SobreInfo text={`CSS preprocessors:`} /> <p> Sass/PostCSS </p>

<SobreInfo text={`Modern CSS:`} /> <p> Styled components, CSS modules, Styled JSX.  </p>
              
<SobreInfo text={`JavaScript:`} /> <p> ES5/ES6/ES7, DOM Manipulation, API queries, jQuery, . </p>              
              
<SobreInfo text={`API & Web services`} /> <p>SOAP, REST, JSON-RPC, gRPC, GraphQL APIs</p>
                            
<SobreInfo text={`Security:`} /> <p> SHA family, Hashing algorithms(script, bcrypt.), HTTPS, Content Security Policy, CORS, SSL/TLS, OWASP Security Risks. </p>
              
<SobreInfo text={`React:`} /> <p> JSX, functional(Hooks)/class based components, props/state, component lifecycle, Lists/Keys, Router DOM, Composition/Inheritance, Refs, conditional rendering, Render Props, HOC, Portals, Error boundaries, CRUD, API calls, Forms, state management(Context, Redux)  </p>

 <SobreInfo text={`Redux:`} /> <p> Store, Middlewares, Actions, dispatch(), react-redux/reduxjs/toolkit </p>
             
<SobreInfo text={`Type checkers:`} /> <p> TypeScript  </p>
                            
<SobreInfo text={`Package Managers:`} /> <p> npm/yarn/bower </p>
              
<SobreInfo text={`Linters and Formatters:`} /> <p> Prettier & ESLint  </p>
            
<SobreInfo text={`Module Bundlers:`} /> <p> npm scripts, Webpack, Babel, esbuild.  </p>

<SobreInfo text={`Caching:`} /> <p> CDN, Redis. </p>

<SobreInfo text={`PWA:`} /> <p> Perfomance Metrics, Lightouse, DevTools. Storage, Web Sockets, Service Workers.  </p>

<SobreInfo text={`Testing:`} /> <p> Integration Testing, Unit Testing, Functional testing.  </p>

<SobreInfo text={`Testing libraries:`} /> <p> Jest, react-testing-library, Cypress, Enzyme, mocha, Jasmine. </p>
              

                            <hr />

                            <h2>Back End</h2>
              
              <SobreInfo text={`API architecture:`} /> <p> Monolithic, SOA & Microservices. </p>
               <SobreInfo text={`API contraints:`} /> <p> Uniform interface, Client Server, Statelessness, Cache ability, Layered System, Code on Demand. </p>
             <SobreInfo text={`API & Web services`} /> <p>SOAP, REST, JSON-RPC, gRPC, GraphQL APIs</p>

               <SobreInfo text={`Django:`} /> <p> . </p>
              
                 <SobreInfo text={`Node:`} /> <p> Routing, ExpressJS, SSR. </p>

                  <SobreInfo text={`Server Architecture:`} /> <p> Apache/Nginx. </p>
              
                   <SobreInfo text={`Servers:`} /> <p> Node/Express, Apache/Nginx. </p>
  
              <SobreInfo text={`Databases:`} /> <p> ORM, ACID Transactions, N+1 Problem, Normalization. Data replication, Sharding Strategies, CAP Theorem.. </p>
              <SobreInfo text={`SQL:`} /> <p> PostgreSQL,  MySQL, MS SQL, Oracle SQL.</p>
              <SobreInfo text={`NoSQL:`} /> <p> MongoDB, RethinkDB, DynamoDB.</p>
              
              <SobreInfo text={`Caching:`} /> <p> CDN, Redis. </p>
                  
               <SobreInfo text={`Cloud IaaS:`} /> <p> AWS, GCP, Heroku, Vercel, Netlify. </p>

<SobreInfo text={`Testing:`} /> <p> Integration Testing, Unit Testing, Functional testing.  </p>


              <SobreInfo text={`Security:`} /> <p> SHA family, Hashing algorithms(script, bcrypt.), HTTPS, Content Security Policy, CORS, SSL/TLS, OWASP Security Risks. </p>
              <SobreInfo text={`:`} /> <p> . </p>
              
<!--                   <SobreInfo text={`:`} /> <p> . </p>

                  <SobreInfo text={`:`} /> <p> . </p>

                  <SobreInfo text={`:`} /> <p> . </p>

                  <SobreInfo text={`:`} /> <p> . </p>

                  <SobreInfo text={`:`} /> <p> . </p>

                  <SobreInfo text={`:`} /> <p> . </p>

                  <SobreInfo text={`:`} /> <p> . </p>

                  <SobreInfo text={`:`} /> <p> . </p> -->


              
              
              
              
    </div>
              <hr />

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

            <div
              className="contact-card-dmbutton">
              <a
                href="https://1drv.ms/w/s!AigvGoxRA5O6hIQ7NMNcCUweEzNswQ?e=CDGFbB"
                download
              >
                Downlaod Resume
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
