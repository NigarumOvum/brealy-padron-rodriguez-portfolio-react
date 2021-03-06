import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { FiGithub } from 'react-icons/fi';
import { BsLink45Deg } from 'react-icons/bs';
import Projects from './components/Projects';
import './style.css';


function ProjectCard() {
  return (
  <Carousel
    width={300}
    showStatus={false}
    useKeyboardArrows={true}
    centerMode={false}
    centerSlidePercentage={200}
    showArrows={true}
    showThumbs={false}
  >
    { Projects.map(project => {
      return (
        <div key={project.title} className={`${project.title} projects-card`}>
          { project.icon.length >= 20 && <img src={project.icon} className='projects-card-icon' alt=""/> }
          <div className='projects-card-title'>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <div className='projects-card-languages'>
            <h3>Developed with:</h3>
            <div className='projects-card-languages-image'>
              {project.tecnologias.map(tecnologia => {
                return (
                  <div key={tecnologia.name}>
                    <img src={tecnologia.imageUrl} alt=""/>
                    <span>{tecnologia.name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='line-divisor'></div>

          <div className='projects-card-buttons'>
            { project.ghLink && <a className='github projects-card-button' href={project.ghLink} target='_blank' rel='noopener noreferrer'>
              <FiGithub size={20} />
            </a> }

            { project.brLink && <a className='browser projects-card-button' href={project.brLink} target='_blank' rel='noopener noreferrer'>
              <BsLink45Deg size={20} /> Access WebSite
            </a> }
          </div>
        </div>
      )
    }) }
    </Carousel>
  )
}

export default ProjectCard;