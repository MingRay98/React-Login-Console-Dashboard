import React, {createContext, useState, useContext} from 'react';

const LoginContext = createContext();
const isMobile = window.innerWidth < 500;

export const ContextProvider = ({children}) => {
  const initialState = {
    isSidebarOpen: isMobile ? false : true,
    userInfo: {},
    isAuthenticated: false,
  }

  const [isAuthenticated, setIsAuthenticated] = useState(initialState.isAuthenticated);
  const [userInfo, setUserInfo] = useState(initialState.userInfo);
  const [isSidebarOpen, setIsSidebarOpen] = useState(initialState.isSidebarOpen);

  const login = (userName, password) => {
    if (userName !== '' && password !== '') {
      setIsAuthenticated(true);
      setUserInfo({userName, password});
      alert('登入成功');
    } else {
      alert('登入失敗，請檢查您的使用者名稱和密碼');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    alert('已登出');
  };

  const getUserInfo = () => {
    return userInfo;
  }

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const value = {
    isAuthenticated,
    isSidebarOpen,
    login,
    logout,
    toggleSidebar,
    getUserInfo,
  };

  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};
