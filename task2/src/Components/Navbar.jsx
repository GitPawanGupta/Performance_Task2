import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../utils/auth';

function Navbar() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const Logout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee', display: 'flex', gap: '1rem' }}>
      <Link to="/">Home</Link>
      {!user && <Link to="/register">Register</Link>}
      {!user && <Link to="/login">Login</Link>}
      {user && <button onClick={Logout}>Logout</button>}
    </nav>
  );
}

export default Navbar;
