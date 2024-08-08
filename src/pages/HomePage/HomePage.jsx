import React from 'react';
import './HomePage.css';
import Home from '../../components/Home/Home';

function HomePage(props) {

  return (
    <div className="home-page">
      <Home {...props} />
    </div>
  );
}

export default HomePage;
