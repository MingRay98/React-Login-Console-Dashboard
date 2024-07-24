import React from 'react';
import './HomePage.css';
import Home from '../../components/Home/Home';

function HomePage(props) {
  const {isSidebarOpen, toggleSidebar} = props;

  return (
    <div className="home-page">
      {!isSidebarOpen && <button className="float-menu-button" onClick={toggleSidebar}>☰</button>}
      <Home {...props} />
    </div>
  );
}

export default HomePage;
