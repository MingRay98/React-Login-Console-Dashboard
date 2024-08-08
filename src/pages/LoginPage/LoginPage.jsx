import React from 'react';
import './LoginPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginPage(props) {

  return (
    <div className="Login-page">
      <LoginForm {...props} />
    </div>
  );
}

export default LoginPage;
