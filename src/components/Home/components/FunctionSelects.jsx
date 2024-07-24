import React from 'react';

const FunctionSelects = (props) => {
  const {onSelectFunction, contentInfo} = props;

  return (
    <div className='function-select-container'>
      <select className="function-select" onChange={(e) => onSelectFunction(e)}>
        <option value="">請選擇功能</option>
        <option value="version">版本資訊</option>
        <option value="userInfo">登入資訊</option>
      </select>
      {!!Object.keys(contentInfo).length &&
        <div className="more-info">
          <h2>{contentInfo.title}</h2>
          <p>{contentInfo.content}</p>
        </div>
      }
    </div>
  );
};

export default FunctionSelects;