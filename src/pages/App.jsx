import React from 'react';
import Left from '../components/SideBar/SideBar'
import Right from './HomePage/HomePage';
import {useLoginContext} from '../hooks/ContextProvider';
import './App.css';

function App() {

  const {
    isAuthenticated,
    logout,
    toggleSidebar,
    isSidebarOpen
  } = useLoginContext();

  const handleNavigate = (destination) => {
    if (isAuthenticated && destination === 'logout') {
      logout();
    }
    // can add more navigation for other pages
  };

  return (
    <div className="App">
      <Left
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        onNavigate={handleNavigate}
        isAuthenticated={isAuthenticated}
      />
      <Right
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
}

export default App;
