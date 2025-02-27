//a protected area for logged-in users
// frontend/src/components/Dashboard.js
import React from 'react';
import LogoutButton from './LogoutButton.jsx';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, you are logged in!</p>
      <LogoutButton />
    </div>
  );
}

export default Dashboard;
