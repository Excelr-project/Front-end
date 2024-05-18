import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import "../styles/register.css";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirmpassword: document.getElementById('confirmpassword').value
        };

        try {
            const res = await axios.post("http://localhost:8080/api/signup", formData);
            if (res.status === 201) {
                alert("Registration Successful");
                window.location.href = '/';
            } else {
                alert("Failed to register");
            }
        } catch (err) {
            alert('Unable to Register');
        }
    };

    return (

        <div className="register-page" >

            <div className="left-container">
            </div>
            <div className="right-container">
                <h2>Welcome</h2>
                <form onSubmit={handleOnSubmit}>
                    <input type="text" id='firstname' name="firstname" value={formData.firstname} onChange={handleChange} placeholder='Enter first name' required />

                    <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} placeholder='Enter last name' required />

                    <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email' required />

                    <input type="password" id='password' name="password" value={formData.password} onChange={handleChange} placeholder='Enter your password' required />

                    <input type="password" name="confirmPassword" id='confirmpassword' value={formData.confirmPassword} onChange={handleChange} placeholder='confirm the password' required />

                    <Button type='submit' variant="outlined">Sign-up</Button>
                </form>


                <p>already a user ? <a href="/login">login</a></p>
            </div>

        </div>
    );
};

export default RegisterPage;
