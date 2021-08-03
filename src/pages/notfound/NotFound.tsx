import React from 'react';
import BackHome from '../../components/backtohome/BackHome';

import Error404 from '../../media/images/404';

import './style/notfound.css';

export default function NotFound() {
  return (
    <div className='notfound-container'>
      <Error404 />
      <div className='notfound-title'>
        <span><strong>Ooooops...</strong></span>
        <h1><strong>404</strong></h1>
        <p>It look this page doesn´t exist!, Please try again</p>
        <BackHome />
      </div>
    </div>
  );
}
