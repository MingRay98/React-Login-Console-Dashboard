import React from 'react';
import './SideBar.css';
import {useLoginContext} from '../../hooks/ContextProvider';

function Sidebar(props) {
  const {isSidebarOpen, toggleSidebar, onNavigate} = props;
  const {isAuthenticated} = useLoginContext();

  return (
    <div className={`sidebar ${!isSidebarOpen && 'close'}`} >
      <button className="sidebar-button sidebar-menu-icon" onClick={toggleSidebar}>
        ☰
      </button>
      <button className="sidebar-button" onClick={() => onNavigate('home')}>
        首頁
      </button>
      {!isAuthenticated &&
        <button className="sidebar-button" onClick={() => onNavigate('login')}>
          登入
        </button>}
      {isAuthenticated &&
        <button className="sidebar-button" onClick={() => onNavigate('logout')}>
          登出
        </button>}
    </div>
  );
}

export default Sidebar;
