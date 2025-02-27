import axios from "axios";
import React, { useState } from "react";

function ResetPassword() {
  const [formData, setFormData] = useState({
    username: "",
    password: "" // This will be the new password
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending the JSON body to your resetPassword endpoint
      const response = await axios.put("http://localhost:8082/api/resetPassword", formData);
      alert("Password updated successfully");
      console.log("Updated user:", response.data);
    } catch (error) {
      console.error("Error updating password:", error.response?.data || error.message);
      alert("Error updating password: " + (error.response?.data || error.message));
    }
  };

  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username"
          name="username" 
          value={formData.username} 
          placeholder="Enter your username"
          onChange={handleChange}
          required
        />
        <br /><br />
        <label htmlFor="password">New Password:</label>
        <input 
          type="password" 
          id="password"
          name="password" 
          value={formData.password} 
          placeholder="Enter your new password"
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
