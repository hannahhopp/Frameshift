import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-page">
    <Link to="/dreams" className="entrance">
      <img src="/entrance.png" />
    </Link>
  </div>
)

export default Home;
