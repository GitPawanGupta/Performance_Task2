import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar /> 
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
    </>
  );
}

export default App;
