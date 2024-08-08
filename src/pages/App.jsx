import React from 'react';
import Left from '../components/SideBar/SideBar'
import {useLoginContext} from '../hooks/ContextProvider';
import './App.css';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import {Route, Routes, useNavigate} from 'react-router-dom';

function App() {

  const {
    isAuthenticated,
    logout,
    toggleSidebar,
    isSidebarOpen
  } = useLoginContext();

  const navigate = useNavigate();

  const handleNavigate = (destination) => {
    if (isAuthenticated && destination === 'logout') {
      logout();
    }
    if (destination === 'login') {
      navigate('/login');
    }
    if (destination === 'home') {
      navigate('/');
    }
  };

  return (
    <div className="App">
      <Left
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        onNavigate={handleNavigate}
        isAuthenticated={isAuthenticated}
      />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      {!isSidebarOpen && <button className="float-menu-button" onClick={toggleSidebar}>☰</button>}
    </div>
  );
}

export default App;
