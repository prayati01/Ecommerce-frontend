import axios from 'axios';
import React from "react";





function Register(){

    const registerData={
        username: "",
        email:"",
        password:"",
    }

    const [register, setRegister] = React.useState(registerData);

    const handleChange = (e)=>{
        setRegister({ //using spread operator
            ...register,
            [e.target.name]:e.target.value
            //name:document.getElementById("name").value,
            //email:document.getElementById("email").value,
            //password:document.getElementById("password").value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(register);

        try{
            const response = await axios.post('http://localhost:8082/api/addUser', register );
            console.log(response.data);
            alert("User added successfully");
            
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>
                    Register
                </h2>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value ={register.username}
                    placeholder="enter your username "
                    onChange={handleChange}
                />
                    <br/><br/>

                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email"  
                    name="email"
                    value={register.email}
                    placeholder="enter your email "
                    onChange={handleChange}
                />
                <br/><br/>

                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    value={register.password}
                    name="password"
                    placeholder="Enter your password" 
                    onChange={handleChange}
                />
                <br/><br/>
                <button type="submit">Register</button>
            </form>

        </div>
        )
}
export default Register;