//logout button component
// frontend/src/components/LogoutButton.js
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the backend logout endpoint
      await axios.post('http://localhost:8082/api/logout');
    } catch (error) {
      console.error('Logout error:', error);
    }
    // Clear any stored authentication tokens/info if applicable
    localStorage.removeItem('user');
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
