import React from 'react';
import Routes from './Routes';
import Logo from './Logo';

const Main = () => (
  <div className='main'>
    <Logo />
    <div className='main-container'>
      <Routes />
    </div>
  </div>
)

export default Main;
