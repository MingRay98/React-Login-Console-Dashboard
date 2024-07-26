import React from 'react';
import './CompanyInfo.css';

function CompanyInfo({isAuthenticated}) {

  let greeting = '';

  const today = new Date();
  const currentHour = today.getHours();

  switch (true) {
    case currentHour < 12:
      greeting = '早安';
      break;
    case currentHour < 18:
      greeting = '午安';
      break;
    default:
      greeting = '晚安';
  }

  return (
    <div className="company-info">
      <h1>公司名稱-登入系統</h1>
      {/* <img className="icon" src={require('../../assets/images/icon.png')} alt="公司標誌" /> */}
      <p>這是一個描述公司簡介的段落。</p>
      {isAuthenticated && <p>{greeting}!</p>}
    </div>
  );
}

export default CompanyInfo;
