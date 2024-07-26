import React, {useState} from 'react';
import LoginForm from '../LoginForm/LoginForm';
import CompnayInfo from '../CompanyInfo/CompanyInfo';
import './Home.css';
import packageInfo from '../../../package.json';
import FunctionSelects from './components/FunctionSelects';
import {useLoginContext} from '../../hooks/ContextProvider';

const Home = (props) => {
  const {isAuthenticated, login, logout, getUserInfo} = useLoginContext();
  const [contentInfo, setContentInfo] = useState({});

  const onSelectFunction = (e) => {
    if (!isAuthenticated) {
      return alert('請先登入');
    }
    const value = e.target.value;
    if (value === 'version') {
      setContentInfo({
        title: '版本資訊',
        content: packageInfo.version,
      });
    } else if (value === 'userInfo') {
      const userInfo = getUserInfo('userName');
      setContentInfo({
        title: '登入資訊',
        content: `使用者名稱: ${userInfo.userName}\n 密碼: ${userInfo.password}`,
      });
    }
  }

  return (
    <div className='home-container'>
      <CompnayInfo isAuthenticated={isAuthenticated} />
      {isAuthenticated ?
        <div>
          <FunctionSelects onSelectFunction={onSelectFunction} contentInfo={contentInfo} />
          <button className="logout-button" onClick={logout}>
            登出
          </button>
        </div> :
        <LoginForm login={login} />
      }
    </div>
  );
};

export default Home;