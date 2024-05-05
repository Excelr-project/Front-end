import axios from 'axios';
import React, { useState } from 'react';
import "../styles/Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        // const formData = {
        //     email: document.getElementById('email').value,
        //     password: document.getElementById('password').value
        // };

        try {
            const res = await axios.get("http://localhost:8080/signin", {
                params: {
                    email: formData.email,
                    password: formData.password
                }
            });

            const Email = res.data;

            if (formData.email === Email) {
                window.location.href = '/search';
            }
        } catch (error) {
            alert("Error sign-in");
        }
    }

    return (

        <div className="login-page" >

            <div className="left-container">
            </div>
            <div className="right-container">
                <h2>Sign-in</h2>
                <form onSubmit={handleOnSubmit}>

                    <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email' required />

                    <input type="password" id='password' name="password" value={formData.password} onChange={handleChange} placeholder='Enter your password' required />

                    <button type="submit">Signin</button>
                </form>
            </div>

        </div>
    );
}

export default Login