import React from 'react';

import { TiUserOutline } from 'react-icons/ti';
import { BiCodeAlt } from 'react-icons/bi';

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
            <h1>Un poco<strong> sobre quien soy</strong></h1>
          </div>
          <div className='sobre-card-information'>
            
            <TiUserOutline className='sobre-card-personicon' size={60} />
            <SobreInfo text='I consider myself an enthusiastic learner, and active student with a keen interest in new technological trends, in helping others find the most effective solution to their technical problems. In addition, I always seek progress through the acquisition of new skills and knowledge; and thus, complement my professional training and personal growth, with labor trends. ' />
            
            <BiCodeAlt className='sobre-card-personicon' size={60} />
            <SobreInfo text={`.`} />          

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
