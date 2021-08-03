import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

// Icons
import { FaInstagram, FaLinkedin, FaNodeJs, FaVuejs } from 'react-icons/fa';
import { AiFillHtml5, AiFillGithub, AiOutlinePlus, AiOutlineQuestionCircle } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiReact, SiGmail, SiTypescript, SiDjango } from 'react-icons/si';
import { FiMessageSquare } from 'react-icons/fi';

// Components
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ProjectCard from '../../components/projects/ProjectCard';
import { Header } from '../../components/header/Header';
// import StockProjectCard from '../../components/projects/components/StockProjectCard';
import BackTop from '../../components/backtop/BackTop';

// Other
import '../mainpage/style/habilities.css';
import '../mainpage/style/projects.css';
import '../mainpage/style/contact.css';
import HabilitiesCard from '../../components/habilities/HabilitiesCard';

function MainPage() {
  const [canShow, setCanShow] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [toggleShow, setToggleShow] = useState(false);

  const [timer, setTimer] = useState(100);
  const [timerCount, setTimerCount] = useState(10);

  const checkScroll = () => {
    if (canShow && (window.pageYOffset > 400)){
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setCanShow(false);
      }, 10000);
    }
  }
  window.addEventListener('scroll', checkScroll);
  
  useEffect(() => {
    if (canShow && isVisible) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 85);
      setTimeout(() => {
        setTimerCount(timerCount - 1);
      }, 1000);
    }
  }, [isVisible, canShow, timer, timerCount]);
  
  function handleToggleShow() {
    setToggleShow(!toggleShow);
  } 

  return(
    <>

    <Navbar />

    <Header />

    <section id='skills'>
      <div className='habilities-container'>
        <div className='habilities-title'>
          <h1>My <strong>Skills</strong>.</h1>
          <p> You'll see <strong>technologies and frameworks</strong> I've worked with.</p>
        </div>

        <div className='habilities-cards'>

        <AiOutlineQuestionCircle 
          size={25}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            right: 0,
          }} 
          onMouseOver={handleToggleShow}
          onMouseOut={handleToggleShow}
        />

        { canShow && isVisible && (
          <div className='card-popup'>
            <div className='card-popup-arrow-left'></div>
            <p>Place the mousse on the icon to see animation</p>
            <br/>
            <div style={{width: `${timer}%`}} className='timer-line'></div>
            { timerCount < 10 ? <span>00:0{timerCount}</span> : <span>00:{timerCount}</span>}
          </div> 
          ) 
        }

        { !canShow && toggleShow && (
          <div className='card-popup'>
            <div className='card-popup-arrow-left'></div>
            <p>Place the mousse on the icon to see animation</p>
          </div>
          ) 
        }

          <HabilitiesCard
            name='html'
            skillPercent={90}
          >
            <AiFillHtml5 className='html-icon' size={60} />
          </HabilitiesCard>

          <HabilitiesCard
            name='css'
            skillPercent={85}
          >
            <DiCss3 className='css-icon' size={60} />
          </HabilitiesCard>


          <HabilitiesCard
            name='javascript'
            skillPercent={75}
          >
            <SiJavascript className='javascript-icon' size={60} />
          </HabilitiesCard>

          <HabilitiesCard
            name='typescript'
            skillPercent={65}
          >
            <SiTypescript className='typescript-icon' size={60} />
          </HabilitiesCard>

          <HabilitiesCard
            name='reactjs'
            skillPercent={70}
          >
            <SiReact className='reactjs-icon' size={60} />
          </HabilitiesCard>

          <HabilitiesCard
            name='vuejs'
            skillPercent={60}
          >
            <FaVuejs className='vuejs-icon' size={60} />
          </HabilitiesCard>

          <HabilitiesCard
            name='nodejs'
            skillPercent={40}
          >
            <FaNodeJs className='nodejs-icon' size={60} />
          </HabilitiesCard>

          <HabilitiesCard
            name='django'
            skillPercent={80}
          >
            <SiDjango className='django-icon' size={60} />
          </HabilitiesCard>
        </div>
      </div>
    </section>

    <section id='projects'>
      <div className='projects-container'>
        <div className='projects-title'>
          <h1>My<strong>Projects</strong>.</h1>
          <p>You'll see<strong> projects</strong> I made<strong> for</strong> my<strong> customers</strong>.</p>
        </div>

          <div className='projects-cards'> 

            {/* <StockProjectCard /> */}

            <ProjectCard />
          
          </div>

          <div className='projects-button-container'>
            <Link to='/repositories' className='projects-button-repositories' >See my repositories <AiOutlinePlus style={{ marginLeft: '5px' }} size={24} /></Link>
          </div>
      </div>
    </section>

    <section id='contact'>
      <div className='contact-container'>
        <div className='contact-cards'>
         <div className="contact-card-social">
            <a className='github-icon contact-card' href='https://github.com/nigarumovum' target='_blank' rel='noopener noreferrer'>
              <AiFillGithub className='github icon' size={50} />
            </a>
            <a className='linkedin-icon contact-card' href='https://www.linkedin.com/in/bfpr131095' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='linkedin icon' size={50} />
            </a>
            <a className='instagram-icon contact-card' href='https://instagram.com/nigarumovum' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='instagram icon' size={50} />
            </a>
            <a className='email-icon contact-card' href='mailto: bfpr131095@gmail.com' data-tip='bfpr131095@gmail.com' target='_blank' rel='noopener noreferrer'>
              <SiGmail className='email icon' size={50} />
            </a>
         </div>
         <Link to='/direct-message' className="contact-card-dmbutton">Send a message <FiMessageSquare size={22} /></Link>
        </div>

        <div className='contact-title'>
          <h2>You can <strong>contanct me</strong>.</h2>
        </div>
      </div>
      
    </section>

    <Footer />

    <BackTop />

    <ReactTooltip 
    offset={{ top: 10 }}
    backgroundColor='rgba(0, 0, 0, 0.8)'
    className='global-tooltip' 
    place='top' 
    />

    </>
  )
}

export default MainPage;
