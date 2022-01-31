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
              <h2>Front End</h2>
               <SobreInfo text={`CMS Templating:`} /> <p>CMS platforms (WordPress, Drupal, AEM, Woocomerce, Shopify, Joomla, etc.)  </p>


<p> Great Ability to take visual UX designs (PSD files, AdobeXD, Anima, Figma, Sketch designs) and convert them into semantic and standard compliant web properties.  </p>

<SobreInfo text={`HTTPS, DNS & Web services`} /> 
 
<SobreInfo text={`HTTP`} /> <p> optimization and monitoring tools (Charles, Fiddler, HttpFox, Network tab)  </p>

<SobreInfo text={`Web Security:`} />  <p>HTTPS, SSL/TLS Content security policy, CORS, OWASP security risks.  </p>

<SobreInfo text={`VSC:`} />  <p>Git ,Github, Gitlab, Bitbucket  </p>

<SobreInfo text={`HTML/HTML5:`} /> <p> Forms and validations, Accessibility, SEO principles, Local Storage API, Conventions and Best practices.  </p>

<SobreInfo text={`CSS:`} /> <p> Cross-browsing, pixel perfect concept, Floats, Positioning, Display, Box Model, CSS grid, FlexBox, BEM (block element modifier), Making Layouts (Mobile First Development & responsiveness across all cross-platform devices using Media Queries).  </p>

<SobreInfo text={`CSS Frameworks:`} /> <p>Bootstrap, Bulma, Tailwind CSS, Chakra UI, Material UI. </p>
              
<SobreInfo text={`CSS preprocessors:`} /> <p> Sass/PostCSS </p>

<SobreInfo text={`Modern CSS:`} /> <p> Styled components, CSS modules, Styled JSX.  </p>

<SobreInfo text={`JavaScript:`} /> <p> ES5/ES6 Syntax, scope, IIFE, hoisting, closures, callbacks(ES5), promises(ES6) , async/wait(ES7), DOM manipulation, AJAX, jQuery, Fetch, Developer Console Debugging, complex RPC/REST APIs, Write unit, integration, and functional test.  </p>

<SobreInfo text={`Package Managers:`} /> <p> npm/yarn/bower  </p>
              
<SobreInfo text={`Linters and Formatters:`} /> <p> Prettier & ESLint  </p>
            
<SobreInfo text={`Module Bundlers:`} /> <p> npm scripts, Webpack, Babel, esbuild.  </p>

<SobreInfo text={`React:`} /> <p> JSX, functional/class based components, props vs state, conditional rendering, component lifecycle, Lists and Keys, Composition vs Inheritance, Hooks and Customer Hooks, Refs, Render Props, HOC, Portals, Error boundaries, Fiber Architecture. Routers, API calls, Forms, state management(Context, Redux)  </p>

<SobreInfo text={`Type checkers:`} /> <p> TypeScript  </p>

<SobreInfo text={`PWA:`} /> <p> Perfomance Metrics, Lightouse, DevTools. Storage, Web Sockets, Service Workers.  </p>

<SobreInfo text={`Testing:`} /> <p> Integration Testing, Unit Testing, Functional testing.  </p>

<SobreInfo text={`Testing libraries:`} /> <p> Jest, react-testing-library, Cypress, Enzyme, mocha, Jasmine. </p>

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
