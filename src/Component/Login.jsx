import axios from 'axios';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";


function Login() {
    
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();
    //const [setPassword, setPasswordValue] = useState("");
    //const[userId, setUserIdValue]= useState("");\
    ////React state should be [stateVariable, setterFunction]Here, setPassword should be the password state, not the function.

   //const setPassword = (e)=>{
     //   setPasswordValue(e.target.value);
    //}  
    //const setUserId = (e)=>{
      //  setUserIdValue(e.target.value);
    //}

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);  // ✅ Updates the state correctly
    };

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);  // ✅ Updates userId state
    };


    const handleSubmit= async(e)=>{

        //api call
        e.preventDefault(); //prevents pf refresh
        console.log("User ID:", userId, "Password:", password);

        //create object with userid & password for passign the api
        const data={
            email: userId,
            password: password
        }
        try {
            const response = await axios.post("http://localhost:8082/api/loginUser", data);
            if (response.data === true) {
                alert("Login Successful");
                navigate('/dashboard');
            }
        } catch (error) {
            //401 Unauthorized, we know the credentials were invalid
            if (error.response && error.response.status === 401) {
                alert("Invalid UserId or Password");
            } else {
                console.error("Login error:", error);
                alert("Error logging in, Please try again.");
            }
        }
        
    };



    return (
        <>
            <h1>VWITS E-commerce</h1>
            <h2>This is the login page</h2>
            <div className="container">

               <form onSubmit={handleSubmit}>
                <div className='header'>
                    <div className='text'>Sign Up</div>
                    <div className='underline'></div>
                </div>
                
                <br/>
                <label>User Id: </label>
                <input 
                    type = "email" 
                    placeholder ="Enter your use id" 
                    //value={userId} 
                    value={userId ?? ""} // ✅ Ensures userId is never undefined
                    onChange={handleUserIdChange}
                />
                    <br></br>
                    <br></br>
                <label>Password:</label>
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    //value={password} 
                    value={password ?? ""} // Ensures password is never undefined
                    onChange={handlePasswordChange}
                />

                <div className='forgotPassword'>
                <Link to="/resetPassword" >
                    Forgot Password?
                </Link>
                </div>
                
                <br/>

                <div className='loginButton'>
                <button type="submit">Login</button>
                </div>
                
                <div className='accountCreation'>
                <Link to="/register" style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>
                    Don't have an account?
                </Link>
                </div>
                

                
               </form>
            </div>
        </>
    );
}

export default Login;