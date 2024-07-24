import React, {useState} from 'react';
import './LoginForm.css';

function LoginForm({login}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isValidUsername = (username) => /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(username);
  const isValidPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!isValidUsername(username)) {
      return setError('使用者名稱至少包含字母和數字且要8位字元。');
    }
    else if (!isValidPassword(password)) {
      return setError('密碼必須包含至少8個字元\n，包括大小寫字母、數字和特殊符號。');
    }

    login(username, password);
  };

  return (
    <div className="login-form">
      <h2>請登入</h2>
      <form onSubmit={handleSubmit}>
        <div className="info">
          <label htmlFor="username">使用者名稱</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setError('');
              setUsername(e.target.value)
            }}
            required
          />
        </div>
        <div className="info">
          <label htmlFor="password">密碼</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setError('');
              setPassword(e.target.value)
            }}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">登入</button>
      </form>
    </div>
  );
}

export default LoginForm;
