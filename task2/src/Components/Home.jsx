import React from 'react';
import { getUsers, getCurrentUser, logoutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

function Home() {
  const users = getUsers();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Registered Users</h2>
      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <table border="1" style={{ margin: 'auto', fontSize: '16px' }}>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Full Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  {user.photo ? (
                    <img
                      src={user.photo}
                      alt="User"
                      width="60"
                      height="60"
                      style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                  ) : (
                    'N/A'
                  )}
                </td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
                <td>
                  {user.address.street}, {user.address.city}, {user.address.district}, {user.address.pincode}, {user.address.state}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
