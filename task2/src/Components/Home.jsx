import React from 'react';
import { getUsers, getCurrentUser, logoutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

function Home() {
  const users = getUsers();
  const currentUser = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome, {currentUser.firstName}!</h2>
      <button onClick={handleLogout}>Logout</button>
      <h3>Registered Users:</h3>
      {users.map((user, index) => (
        <div key={index} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          {user.photo && <img src={user.photo} alt="Profile" width="100" />}
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>DOB:</strong> {user.dob}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.district}, {user.address.pincode}, {user.address.state}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
