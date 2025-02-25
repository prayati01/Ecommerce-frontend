import axios from 'axios';
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
    
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");
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
            <h1>This is the login page</h1>
            <div className="container">
               <form onSubmit={handleSubmit}>
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
                <br></br>
                <br></br>

                <Link to="/register" style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>
                    Don't have an account?
                </Link>

                <button type="submit">Login</button>
               </form>
            </div>
        </>
    );
}

export default Login;