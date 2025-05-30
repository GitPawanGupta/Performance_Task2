import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers, saveUser } from '../utils/auth';

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    photo: '',
    firstName: '',
    lastName: '',
    dob: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: {
      street: '',
      city: '',
      district: '',
      pincode: '',
      state: ''
    }
  });


  const ImageChange = (v) => {
    const file = v.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm(prev => ({ ...prev, photo: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  
  const Change = (v) => {
    const { name, value } = v.target;
    if (name in form.address) {
      setForm(prev => ({
        ...prev,
        address: { ...prev.address, [name]: value }
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  
  const isPasswordStrong = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return strongPasswordRegex.test(password);
  };

  
  const Submit = (v) => {
    v.preventDefault();
    const users = getUsers();

    
    if (users.some(u => u.username === form.username)) {
      return setError(" Username already taken");
    }

    
    if (form.password !== form.confirmPassword) {
      return setError(" Passwords do not match");
    }

    
    if (!isPasswordStrong(form.password)) {
      return setError(" Password must be at least 8 characters and include uppercase, lowercase, number, and special character");
    }

    const { confirmPassword, ...userData } = form;
    saveUser(userData);
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>
      <form onSubmit={Submit}>
        <h2>Register Here</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label>Profile Photo:</label><br />
        <input type="file" accept="image/*" onChange={ImageChange} /><br />
        {form.photo && (
          <img
            src={form.photo}
            alt="Preview"
            width="100"
            height="100"
            style={{ borderRadius: '50%', objectFit: 'cover', marginTop: '10px' }}
          />
        )}<br /><br />

        <input name="firstName" placeholder="First Name" onChange={Change} required /><br />
        <input name="lastName" placeholder="Last Name" onChange={Change} required /><br />
        <input type="date" name="dob" onChange={Change} required /><br />
        <input name="username" placeholder="Username" onChange={Change} required /><br />
        <input name="email" type="email" placeholder="Email" onChange={Change} required /><br />
        <input name="password" type="password" placeholder="Password" onChange={Change} required /><br />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={Change} required /><br />

        <h4>Address</h4>
        <input name="street" placeholder="Street" onChange={Change} required /><br />
        <input name="city" placeholder="City" onChange={Change} required /><br />
        <input name="district" placeholder="District" onChange={Change} required /><br />
        <input name="pincode" placeholder="Pincode" onChange={Change} required /><br />
        <input name="state" placeholder="State" onChange={Change} required /><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
