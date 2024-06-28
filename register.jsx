// import { useState } from 'react';
// // import { useNavigate } from "react-router-dom";
// import axios from "axios";
//  function SignUp() {
//   const [username, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState(0);
//   const [repassword, setRepassword] = useState(0);
//   const [sign,setSign] = useState([]);

//   function handleUserNameChange(e) {
//     setUserName(e.target.value);
//   }

//   function handleEmailChange(e) {
//     setEmail(e.target.value);
//   }

//   function handlePasswordChange(e) {
//     setPassword(e.target.value);
//   }
//   function handleRepasswordChange(e) {
//     setRepassword(e.target.value);
//   }
//   function handleSignUp() {
//     if(password===repassword){
//     setSign({username,email,password,repassword});
//     axios.post('http://localhost:5000/register',{username,email,password,repassword});
  
//   }
//   else{
//     alert("SignUp failed!")
//   }
// }
// const containerStyle = {
//   maxWidth: '400px',
//   margin: '0 auto',
//   padding: '20px',
//   border: '1px solid #ccc',
//   borderRadius: '10px',
//   boxShadow: '0 0 10px rgba(0,0,0,0.1)'
// };

// const inputStyle = {
//   width: '5cm',
//   padding: '10px',
//   margin: '10px 0',
//   borderRadius: '5px',
//   border: '1px solid #ccc'
// };

// const buttonStyle = {

//   width: '2cm',
//   padding: '10px',
//   margin: '10px 0',
//   backgroundColor: '#007BFF',
//   color: 'white',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer'
// };

// const titleStyle = {
//   textAlign: 'center',
//   marginBottom: '20px'
// };


//   return (
//     <>
//      <div style={containerStyle}></div>
//      <h1 style={titleStyle}>Register</h1>
//     <p>Username</p>
//       <input type="text" placeholder="Enter your Username" onChange={handleUserNameChange}style={inputStyle} />
//       <p>Email</p>
//       <input type="email" placeholder="Enter your Email" onChange={handleEmailChange} style={inputStyle}/>
//       <p>Password</p>
//       <input type="password" placeholder="Enter your password" onChange={handlePasswordChange}style={inputStyle} />
//       <p>Repassword</p>
//       <input type="password" placeholder="Enter your password again " onChange={handleRepasswordChange}style={inputStyle} />

//       <button onClick={handleSignUp}style={buttonStyle}>SignUp</button>
//      <p>Data: username : {sign.username},Email:email:{sign.email},Password:password:{sign.password},Repassword:repassword:{sign.repassword}</p>
//     </>
//   );
// }
// export default SignUp;


import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRepassword] = useState('');
  const [sign, setSign] = useState({});

  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }
  
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  
  function handleRePasswordChange(e) {
    setRepassword(e.target.value);
  }
  
  async function handleSignUp() {
    if (password === rePassword) {
      setSign({ username, email, password, rePassword });

        const response = await axios.post('http://localhost:5000/register', { email, username, password, rePassword });
       
        navigate('/log'); 
        console.log(response);
    }
    else {
        alert("Sign up failed!");
      }
    }
  
    return (
    <>
      <h1>Register</h1>
      <p>Username</p>
      <input type='text' placeholder="Enter your Name" onChange={handleUserNameChange} />
      <p>Email</p>
      <input type='email' placeholder="Enter your Email" onChange={handleEmailChange} />
      <p>Password</p>
      <input type='password' placeholder="Enter your Password" onChange={handlePasswordChange} />
      <p>Re-Password</p>
      <input type='password' placeholder="Re-enter your Password" onChange={handleRePasswordChange} />
      <button onClick={handleSignUp}>SignUp</button>
      <p>Data: Username: {sign.username}, Email: {sign.email}, Password: {sign.password}, Re-password: {sign.rePassword}</p>
    </>
  );
}
export default Signup;

