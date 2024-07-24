import React from 'react';
import './SideBar.css';

function Sidebar(props) {
  const {isSidebarOpen, toggleSidebar, onNavigate} = props;
  return (
    <div className={`sidebar ${!isSidebarOpen && 'close'}`} >
      <button className="sidebar-button sidebar-menu-icon" onClick={toggleSidebar}>
        ☰
      </button>
      <button className="sidebar-button" onClick={() => onNavigate('home')}>
        首頁
      </button>
      <button className="sidebar-button" onClick={() => onNavigate('login')}>
        登入
      </button>
      <button className="sidebar-button" onClick={() => onNavigate('logout')}>
        登出
      </button>
    </div>
  );
}

export default Sidebar;
