import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, setCurrentUser } from '../utils/auth';

function Login() {
  const [form, setForm] = useState({ identifier: '', password: '' });
  const navigate = useNavigate();

  const Change = (v) => {
    setForm({ ...form, [v.target.name]: v.target.value });
  };

  const Submit = (v) => {
    v.preventDefault();
    const user = loginUser(form.identifier, form.password);
    if (user) {
      setCurrentUser(user);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{textAlign:'center', fontSize:'20px', fontWeight:'bold'}}>
    <form onSubmit={Submit}>
      <h2>Login Here...</h2>
      <input name="identifier" placeholder="Username or Email" onChange={Change} required /><br/>
      <input name="password" type="password" placeholder="Password" onChange={Change} required /><br/>
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default Login;
