import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(0);
  const [repassword, setRepassword] = useState(0);
  const [login, setLogin] = useState(null);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleRepasswordChange(e) {
    setRepassword(e.target.value);
  }

  function handleLogin() {
    if(password===repassword){
        setLogin({email,password,repassword});
      }
      else{
        alert("Login failed!")
      }
    }

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    width: '75%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    width: ' 25%',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Login</h1>
        <p>Email</p>
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={handleEmailChange}
          style={inputStyle}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          style={inputStyle}
        />
        <p>Repassword</p>
        <input type="password" 
        placeholder="Enter your password again "
         onChange={handleRepasswordChange}
         style={inputStyle} />

        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
        {login && (
          <p>
            Data: Email: {login.email}, Password: {login.password}Repassword:repassword:{login.repassword}
          </p>
        )}
      </div>
    </>
  );
}

export default Login;
