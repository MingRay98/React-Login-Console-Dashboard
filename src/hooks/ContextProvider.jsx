import React, {createContext, useState, useContext, useEffect} from 'react';
// Add the two MIT licensed libraries below to encrypt and decrypt user data
import CryptoJS from 'crypto-js';
import {v4 as uuidv4} from 'uuid';

const LoginContext = createContext();
const isMobile = window.innerWidth < 500;

export const ContextProvider = ({children}) => {
  const initialState = {
    isSidebarOpen: isMobile ? false : true,
    isAuthenticated: false,
    userInfo: {},
  };

  const [isAuthenticated, setIsAuthenticated] = useState(initialState.isAuthenticated);
  const [userInfo, setUserInfo] = useState(initialState.userInfo);
  const [isSidebarOpen, setIsSidebarOpen] = useState(initialState.isSidebarOpen);

  // Check if user data is stored in local storage and will be used to auto-login
  useEffect(() => {
    const storedEncryptedData = localStorage.getItem('encryptedUserData');
    const storedSecretKey = localStorage.getItem('userSecretKey');

    if (storedEncryptedData && storedSecretKey) {
      try {
        const decryptedData = decryptData(storedEncryptedData, storedSecretKey);
        setUserInfo(decryptedData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error decrypting user data:', error);
        logout();
      }
    }
    const handleStorageChange = (event) => {
      if (event.key === 'userSecretKey' && !event.newValue) {
        logout();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isAuthenticated]);

  const generateSecretKey = () => {
    return uuidv4();
  };

  const encryptData = (data, secretKey) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  };

  const decryptData = (cipherText, secretKey) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  };

  const login = (userName, password) => {
    if (userName !== '' && password !== '') {
      const secretKey = generateSecretKey();
      const data = {userName, password};

      const encryptedData = encryptData(data, secretKey);

      localStorage.setItem('encryptedUserData', encryptedData);
      localStorage.setItem('userSecretKey', secretKey);

      setIsAuthenticated(true);
      setUserInfo(data);
      alert('登入成功');
    } else {
      alert('登入失敗，請檢查您的使用者名稱和密碼');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserInfo({});
    localStorage.removeItem('encryptedUserData');
    localStorage.removeItem('userSecretKey');
    alert('已登出');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const getUserInfo = () => {
    return userInfo;
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
