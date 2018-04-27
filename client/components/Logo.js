import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="navbar">
    <Link to="/">
      <img src="/frameshift.png" className="logo" />
    </Link>
  </div>
);

export default Logo;
